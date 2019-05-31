import java.util.*;

class Point implements As<Point> {
    public int x;
    public int y;
    @Override public boolean equals(Object o){
        if(o==null){    //非空性
            return false;
        }
        if(!(o instanceof Point)){
            return false;
        }
        Point p=(Point)o;
        return p.x==x&&p.y==y;
    }
    @Override public Point as(){
        return this;
    }
    public boolean equals2(As<? extends Point> ap){
        Point p=ap.as();
        return equals(p);
    }
    public boolean equals3(Object o){
        if(!(o.getClass()==getClass())){
            return false;
        }
        return equals(o);
    }
}

class ColorPoint extends Point{
    Color color;
}
interface As<T>{
    T as();
}

class ColorPoint2 implements As<Point>{
    Point p;
    Color color;
    @Override public Point as(){
        return p;
    }
}

public class JJJ{
    
    public static void main(String[] args){
        System.out.println("Hello");
        Point p=new Point();
        Point s=p.as();
        System.out.println(s.x);
    }
}