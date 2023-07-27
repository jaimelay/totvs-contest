/* 
    n = int
    m = int
    roads = lista de lista de inteiros, cada lista possuí dois elementos.
    q = int 
    tourst = lista de lista
*/
function solve(n, m, roads, q, tours) {
  // Complate esse metodo resolver a questão ThexTranfer.
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
  let m = parseInt(input[1]);
  let roads = []
  let q = []
  let tours = []

  for(let i = 0; i < m; i++) {
    roads.push(readLine().split(' ').map(x => parseInt(x)))
  }

  q = parseInt(readLine().split(' ')[0])

  for(let i = 0, tmp; i < q; i++) {
    tours.push(readLine().split(' ').map(x => parseInt(x)))
  }
  
  console.log(solve(n, m, roads, q, tours));
}
