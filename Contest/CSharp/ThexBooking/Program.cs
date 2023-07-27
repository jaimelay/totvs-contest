using System;
using System.Collections.Generic;
using System.Linq;

namespace ThexBooking
{
    class Program
    {
        private static string Solve(int n, int q, int k, List<List<int>> rooms)
        {
            // Complete este metodo para resolver a questao ThexBooking
        }
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            int n = input[0], q = input[1], k = input[2];

            var rooms = new List<List<int>>();
            for (var i = 0; i < n; i++)
            {
                rooms.Add(Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList());
            }
            
            Console.WriteLine(Solve(n, q, k, rooms));
        }
    }
}