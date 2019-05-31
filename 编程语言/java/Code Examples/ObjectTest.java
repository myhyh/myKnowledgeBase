public class ObjectTest{
    public static void main(String[] args) {
        Object o=new Object();
        Object oo=new Object();
        System.out.println(o.toString());
        System.out.printf("%x\n",o.hashCode());
        System.out.printf("%x\n",oo.hashCode());
        System.out.println(o.getClass());

        
        System.out.println(o.equals(o));
        System.out.println(o.equals(oo));

    }
}