using System;
using System.Collections.Generic;
using System.Linq;

namespace ThexReservation
{
    class Program
    {
        private static void Solve(int n, int q, List<List<int>> rooms)
        {
            // Complete este metodo para resolver a questao ThexReservation
        }
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
            int n = input[0], q = input[1];
            var rooms = new List<List<int>>();
 
            for (var i = 0; i < n; i++)
            {
                var room = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
                rooms.Add(room);
            }

            Solve(n, q, rooms);
        }
    }
}