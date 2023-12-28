let startsfrom = 5;
let endsto = 10;
let totalSum = 0;

for (let i = startsfrom; i <= endsto; i++) {
  totalSum += i;
}
console.log(totalSum);


/*
// -----------alternate Method----------
//using Gauss sum method
let startsfrom = 5
let endsto = 10
totalTerms = endsto - startsfrom + 1

// totalSum = totalterms/2 * (startingTerm + lastTerm)
totalSum = totalTerms/2 * (startsfrom + endsto)
console.log(totalSum);
*/