
function detectPalindromo () {
    let palavra = 'rever';
    let palavraSeparada = palavra.split("");
    palavraInvertida = palavraSeparada.reverse();
    palavraInvertida = palavraInvertida.join("");
    
    if (palavra == palavraInvertida) {
        alert('Essa palavra é um palídromo');
    } else {
        alert('Essa palavra não é um palídromo');
    }
}

detectPalindromo();