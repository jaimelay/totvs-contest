/*
  Uma lista de lista com 3 elementos, representando o a, b e c da questão.
*/
function solve(pullRequests) {
  // Complate esse metodo resolver a questão PullRequest.
  // Você deve imprimir as saídas usando o método console.log
}

/* 
  Esse template foi retirado do post https://codeforces.com/blog/entry/69610
  Não é recomendado modificar o código abaixo.
*/
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let n = parseInt(readLine().split(" "));
  let pullRequests = []
  for(let i = 0; i < n; i++) {
    pullRequests.push(readLine().split(' ').map(x => parseInt(x)))
  }
  solve(n, k, bets);
}
