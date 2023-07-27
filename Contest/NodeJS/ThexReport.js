/* 
    n = int
    q = int
    checkoutCount = lista de inteiros com tamanho n
    queries = lista de inteiros com tamanho q.
*/
function solve(n, q, checkoutCount, queries) {
  // Complate esse metodo resolver a questão ThexReport.
  // Você deve imprimir as saídas usando o método console.log
  console.log(n, q)
  console.log(checkoutCount)
  console.log(queries)
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
  let q = parseInt(input[1]);
  let checkoutCount = readLine().split(' ').map(x => parseInt(x));
  let queries = []
  for(let i = 0; i < q; i++) {
    queries.push(parseInt(readLine().split(' ')[0]))
  }
  solve(n, q, checkoutCount, queries);
}
