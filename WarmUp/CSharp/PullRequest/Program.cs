using System;
using System.Collections.Generic;
using System.Linq;

namespace PullRequest
{
    class Program
    {
        static void Solve(int n, List<List<int>> reviewers)
        {
            // Complete este metodo para resolver a questao PullRequest
        }
        
        static void Main(string[] args)
        {
            var n = Convert.ToInt32(Console.ReadLine());
            var reviewers = new List<List<int>>();
 
            for (var i = 0; i < n; i++)
            {
                var reviewersList = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToList();
                reviewers.Add(reviewersList);
            }

            Solve(n, reviewers);
        }
    }
}