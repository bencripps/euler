/* 
* @Author: ben_cripps
* @Date:   2015-03-31 21:40:32
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-03-31 21:43:45
*/

using System;
using System.Linq;
      
public class Program
{
    private int eulerLoop(int max, string type)
    {
        int[] nums = new int[max+1];
        bool isSquare = type.Equals("incremental-square");
        
        for (int i = 1; i <= max; i++)
        {   
            var num = isSquare ? (int)Math.Pow(i, 2) : i;
            nums[i] = num;
        }
        
        return isSquare ? nums.Sum() : (int)Math.Pow(nums.Sum(), 2);
    }
    
    public void Main()
    {   
        Console.WriteLine(Math.Abs((eulerLoop(100, "incremental-square") - eulerLoop(100, "sum-square"))));
    }
}