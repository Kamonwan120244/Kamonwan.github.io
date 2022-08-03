
function isInteger(n) {
    return n % 1 == 0;
}

function showPrime(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        numprime.push(i)
    } 
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

const numprime = []
while (true) {
    var number = Number(prompt("Enter a positive integer"))
    
    if (!isInteger(number)) continue;
    if (number < 0) continue;
    showPrime(number);
    alert('For n = ' + number + ' prime numbers are ' + numprime);
    break;
}
 
 
 
