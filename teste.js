const readline = require('readline-sync')



function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro. Divisão por zero.";
    }
    return a / b;

}




function calculadora() {
    
    while (true) {
        console.log("Bem vindo a calculadora feita em js.");
        console.log("Escolha uma das opções");
        console.log("1. Somar")
        console.log("2. Subtrair")
        console.log("3. Multiplicar")
        console.log("4. Dividir")

        let opcao = readline.question("Escolha uma opção (0/1/2/3/4):  ");

        if (opcao === "0") {
            console.log("Sistema encerrado...");
            break;
        }
        

        if (opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4") {
            console.log("Opção inválida");
        } else {
            let num1 = Number(readline.question("Digite o primeiro número: "));
            let num2 = Number(readline.question("Digite o segundo número: "));

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Digite apenas números.");
            } else if (opcao === "1") {
                console.log(somar(num1, num2));
            } else if (opcao === "2") {
                console.log(subtrair(num1, num2));
            } else if (opcao === "3") {
                console.log(multiplicar(num1, num2));
            } else {
                console.log(dividir(num1, num2));
            }
            
        
    }

    }

    
}



calculadora()
























