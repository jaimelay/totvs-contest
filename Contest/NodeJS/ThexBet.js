/* 
    n = int
    k = int
    bets = lista de lista, cada lista possuí dois elementos.
*/
function solve(n, k, bets) {
  // Complate esse metodo resolver a questão ThexBet.
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
  let input = readLine().split(" ");
  let n = parseInt(input[0]);
  let k = parseInt(input[1]);
  let bets = [];
  for (let i = 0; i < n; i++) {
    bets.push(
      readLine()
        .split(" ")
        .map((x) => parseInt(x))
    );
  }
  solve(n, k, bets);
}
