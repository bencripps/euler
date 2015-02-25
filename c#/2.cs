using System;

public class Euler
{   
    private int Fib(int limit, int sum = 0, int a = 0, int b = 1) 
    {   
        int temp = 0;

        if (a < limit)
        {
            if (a % 2 == 0) 
            {
                sum+= a;
            }
            
            temp = a;
            a = b;
            b = temp + b;
            return Fib(limit, sum, a, b);
        }
        
        return sum;
    }
    
    public void Main()
    {
        Console.WriteLine(Fib(4000000));
    }
}