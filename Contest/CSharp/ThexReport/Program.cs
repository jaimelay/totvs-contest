using System;
using System.Collections.Generic;
using System.Linq;

namespace ThexReport
{
    class Program
    {
        private static void Solve(int n, int q, List<int> checkouts, List<int> guests)
        {
            // Complete este metodo para resolver a questao ThexReport
        }
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            int n = input[0], q = input[1];
            var checkouts = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            var guests = new List<int>();
            
            for (var i = 0; i < q; i++)
            {
                var guest = Convert.ToInt32(Console.ReadLine());
                guests.Add(guest);
            }

            Solve(n, q, checkouts, guests);
        }
    }
}