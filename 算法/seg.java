class Seg1 {
    static class Node {
        public int val;
        public Node left;
        public Node right;
    }

    Node tree;
    int[] value;

    void build(int[] input) {
        value = input;
        tree = build(0, input.length - 1);
    }

    Node build(int i, int j) {
        Node root = new Node();
        if (i == j) {
            root.val = value[i];
            return root;
        }
        int mid = (i + j) / 2;
        root.left = build(i, mid);
        root.right = build(mid + 1, j);
        root.val = Math.min(root.left.val, root.right.val);
        return root;
    }

    int query(int i, int j) {
        return query(tree, i, j, 0, value.length - 1);
    }

    int query(Node root, int i, int j, int l, int r) {
        if (j < l || i > r) {
            return Integer.MAX_VALUE;
        }
        if (i <= l && r <= j) {
            return root.val;
        }
        int mid = (l + r) / 2;
        int lnum = query(root.left, i, j, l, mid);
        int rnum = query(root.right, i, j, mid + 1, r);
        return Math.min(lnum, rnum);
    }
}

class Seg2 {

    int[] tree;
    int[] value;

    void build(int[] input) {
        value = input;
        tree = new int[input.length * 4 - 1];
        build(0, 0, input.length - 1);
    }

    void build(int root, int i, int j) {
        if (i == j) {
            tree[root] = value[i];
            return;
        }
        int mid = (i + j) / 2;
        build(root * 2 + 1, i, mid);
        build(root * 2 + 2, mid + 1, j);
        tree[root] = Math.min(tree[root * 2 + 1], tree[root * 2 + 2]);
    }

    int query(int i, int j) {
        return query(0, i, j, 0, value.length - 1);
    }

    int query(int root, int i, int j, int l, int r) {
        if (j < l || i > r) {
            return Integer.MAX_VALUE;
        }
        if (i <= l && r <= j) {
            return tree[root];
        }
        int mid = (l + r) / 2;
        int lnum = query(root * 2 + 1, i, j, l, mid);
        int rnum = query(root * 2 + 2, i, j, mid + 1, r);
        return Math.min(lnum, rnum);
    }

    void update(int pos, int newval) {

    }
}

class Main {
    public static void main(String[] args) {
        Seg2 seg = new Seg2();
        seg.build(new int[] { 62, 54, 66, 75, 17, 30 });
        System.out.println(seg.query(0, 5));
        ;
    }
}