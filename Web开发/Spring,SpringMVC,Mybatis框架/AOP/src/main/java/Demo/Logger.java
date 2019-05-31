package Demo;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

class Logger{
    String getInfo(JoinPoint joinPoint){
        return joinPoint.getSignature().getDeclaringTypeName()+
        "."+joinPoint.getSignature().getName();
    }

    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable{
        
        System.out.println("start log around:"+getInfo(joinPoint));
        Object object=joinPoint.proceed();
        System.out.println("end log around:"+getInfo(joinPoint));
        return object;
    }

    public void logBefore(JoinPoint joinPoint) throws Throwable{
        System.out.println("log before:"+getInfo(joinPoint));
    }

    public void logAfter(JoinPoint joinPoint) throws Throwable{
        System.out.println("log after:"+getInfo(joinPoint));
    }

    public void logAfterReturning(JoinPoint joinPoint) throws Throwable{
        System.out.println("log after return:"+getInfo(joinPoint));
    }

    public void logAfterThrowing(JoinPoint joinPoint) throws Throwable{
        System.out.println("log after throw:"+getInfo(joinPoint));
    }
}