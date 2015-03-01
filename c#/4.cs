using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
                    
public class Program
{
    public static void Main()
    {
        List<int> allNums = getNums();
        foreach (int num in allNums.Reverse<int>())
        {
            if (isPalindrome(num))
            {
                Console.WriteLine(num);
                break;
            }
        }
        
    }
    
    private static bool isPalindrome(int n)
    {
        var str = n.ToString().ToArray().Reverse();
        StringBuilder builder = new StringBuilder();
        foreach(char i in str)
        {
            builder.Append(i);
        }
        return Convert.ToInt32(builder.ToString()) == n;
    }
    
    private static List<int> getNums()
    {
        var arr = new List<int>();
        for (var i = 0; i < 1000; i++)
        {
            for (var x = 0; x < 1000; x ++)
            {
                arr.Add(i*x);
            }
        }
        return arr;
    }
}