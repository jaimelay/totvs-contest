using System;
using System.Collections.Generic;
using System.Linq;

namespace ThexTransfer
{
    class Program
    {
        private static void Solve(int n, int m, List<List<int>> routes, int q, List<List<int>> tours)
        {
            // Complete este metodo para resolver a questao ThexTransfer
        }
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            int n = input[0], m = input[1];

            var routes = new List<List<int>>();
            
            for (var i = 0; i < m; i++)
            {
                var route = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
                routes.Add(route);
            }
            
            var q = Convert.ToInt32(Console.ReadLine());
            
            var tours = new List<List<int>>();
            
            for (var i = 0; i < q; i++)
            {
                var tour = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
                tours.Add(tour);
            }

            Solve(n, m, routes, q, tours);
        }
    }
}