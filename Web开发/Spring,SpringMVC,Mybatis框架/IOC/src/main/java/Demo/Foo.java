package Demo;

import java.util.*;

public class Foo {
    Foo(String a){
        setA(a);
        setB(0);
        setC(null);
        setD(null);
        setNext(null);
    }

    Foo(){
        
    }

    /**
     * @return the next
     */
    public Foo getNext() {
        return next;
    }

    /**
     * @param next the next to set
     */
    public void setNext(Foo next) {
        this.next = next;
    }

    /**
     * @return the d
     */
    public Map<Integer, String> getD() {
        return d;
    }

    /**
     * @param d the d to set
     */
    public void setD(Map<Integer, String> d) {
        this.d = d;
    }

    /**
     * @return the c
     */
    public List<Integer> getC() {
        return c;
    }

    /**
     * @param c the c to set
     */
    public void setC(List<Integer> c) {
        this.c = c;
    }

    /**
     * @return the b
     */
    public int getB() {
        return b;
    }

    /**
     * @param b the b to set
     */
    public void setB(int b) {
        this.b = b;
    }

    /**
     * @return the a
     */
    public String getA() {
        return a;
    }

    /**
     * @param a the a to set
     */
    public void setA(String a) {
        this.a = a;
    }

    @Override
    public String toString() {
        return "{" +
            " a='" + getA() + "'" +
            ", b='" + getB() + "'" +
            ", c='" + getC() + "'" +
            ", d='" + getD() + "'" +
            ", next='" + getNext() + "'" +
            "}";
    }

    private String a;
    private int b;
    private List<Integer> c;
    private Map<Integer, String> d;
    private Foo next;
}