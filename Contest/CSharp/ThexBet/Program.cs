using System;
using System.Collections.Generic;
using System.Linq;

namespace ThexBet
{
    class Program
    {
        private static long Solve(int n, int m, List<List<int>> bets)
        {
            // Complete este metodo para resolver a questao ThexBet
        }
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            var n = input[0];
            var m = input[1];

            var bets = new List<List<int>>();
            
            for (var i = 0; i < n; i++)
            {
                var bet = Console.ReadLine().Split(" ").Select(x => Convert.ToInt32(x)).ToList();
                bets.Add(bet);
            }
            
            Console.WriteLine(Solve(n, m, bets));
        }
    }
}