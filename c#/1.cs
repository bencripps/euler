using System;
using System.Collections.Generic;
using System.Linq;
                    
public class Program
{
    public static void Main()
    {
        IEnumerable<int> range = Enumerable.Range(0,1000);
        List<int> list = new List<int>();
        
        foreach (int value in range) 
        {   
            if (value % 3 == 0 || value % 5 == 0) 
            {
                list.Add(value);
            }
        }
        Console.WriteLine(list.Sum());
    }
}