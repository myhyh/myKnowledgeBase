package example
const (
	doinsert = iota
	doremove
	doflush
	doempty
)

var deferOnEmpty = map [int] bool { doremove : true }

// Same ideas as before
type request struct {
	op   int                // What operation is requested
	val  interface{}        // Optional value for operation
	replyc chan interface{} // Channel to which to send response
}

// Only one channel to implement external interface
type Buf struct {
	requestc chan *request  // Request channel for buffer
}

func NewBuf() *Buf {
	bp := &Buf{make(chan *request)}
	go bp.runServer()
	return bp
}

func (bp *Buf) runServer () {
	// Buffer to hold data
	sb := bufi.NewBuf()
	// Buffer to hold deferred requests
	db := bufi.NewBuf()
	for  {
		var r *request
		// No need for select.  We do our own scheduling!
		if !sb.Empty() && !db.Empty() {
			// Revisit deferred operation
			b, _ := db.Remove()
			r = b.(*request)
		} else {
			r = <- bp.requestc
			if sb.Empty() && deferOnEmpty[r.op] {
				// Must defer this operation
				db.Insert(r)
				continue
			}
		}
		switch r.op {
		case doinsert:
			sb.Insert(r.val)
			r.replyc <- nil
		case doremove:
			v := sb.Remove()
			r.replyc <- v
		case doflush:
			sb.Flush()
			r.replyc <- nil
		case doempty:
			e := sb.Empty()
			// Can send Boolean along channel
			r.replyc <- e
		case dofront:
			v := sb.Front()
			r.replyc <- v
		}
	}
}

func (bp *Buf) dorequest(op int, val interface{}) interface{} {
	r := &request{op, val, make(chan interface{})}
	bp.requestc <- r
	v := <- r.replyc
	return v
}


func (bp *Buf) Insert(val interface{}) {
	bp.dorequest(doinsert, val)
}

func (bp *Buf) Remove() interface{} {
	return bp.dorequest(doremove, nil)
}

func (bp *Buf) Empty() bool {
	v := bp.dorequest(doempty, nil)
	e := v.(bool)
	return e
}

func (bp *Buf) Flush() {
	bp.dorequest(doflush, nil)
}
