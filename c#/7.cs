/* 
* @Author: ben_cripps
* @Date:   2015-03-31 21:46:42
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-03-31 22:13:42
*/

using System;
using System.Linq;
         
public class Program
{
    
    public void Main()
    {   
        var newPrimes = primes(10001);
        Console.WriteLine(newPrimes[newPrimes.Length-1]);
    }

    private int[] primes(int max)
    {
        int[] primes = new int[max];
        int totalPrimes = 0;
        int counter = 2;
        
        while (totalPrimes != max)
        {
            if (isPrime(counter))
            {
                primes[totalPrimes] = counter;
                totalPrimes++;
            }
            counter++;
        }
        
        return primes;
    }

    private bool isPrime(int num)
    {   
        int sqrt = (int)Math.Sqrt(num);
        for (int i=2; i <= sqrt; i++)
        {
            if (num % i == 0) return false; 
        }
        return true;
    }

}