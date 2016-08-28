using System;
using System.Collections.Generic;
using System.Linq;
                    
public class Euler
{
    private static bool isPrime(int n)
    {   
        for (var i = 2; i <= (int)Math.Sqrt(n); i++)
        {   
            if (n % i == 0)
            {   
                return false;
            }
        }
        return true;
        
    }
    
    private static object getFactors(int n) {
        List<int> factors = new List<int>();
        for (var i = 1; i < n; i++)
        {
            if (n % i == 0)
            {
                factors.Add(i);
            }
        }
        return factors;
    }

    public static void Main()
    {   
        Console.WriteLine(getFactors(100));
        Console.WriteLine(isPrime(22));
    }
    
}