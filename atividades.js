// // questão 1
// function calculolucro(grana) {
//     let total = 0;
//     for (i = 0; i < grana.length; i++){
//         total += grana[i]
//     }
//     console.log(`Total de lucro na semana: ${total}`);
// }
// calculolucro([200,450,300,150,500,600,700])

// //Questão 2
// function evenNumbers(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 === 0) {
//             console.log(`Os Numeros pares são: ${num[i]}`);
//         }  
//     }
// }
// evenNumbers([3,5,8,10,13,17,20,22])

// //questão 3
// function palindromo(palavra) {
//     palavra = palavra.toLowerCase(); //evita que palavras maiúsculas atrapalhem no código
//     let arrayChar = palavra.split('');//o split separa a palavra por caractere
//     let arrayCharInvert = [];
//     for (let i = arrayChar.length - 1; i >= 0; i--) {
//         arrayCharInvert.push(arrayChar[i]); // transforma o array normal no seu contrário
//     }


//     let string = arrayChar.join('');
//     let stringInvert = arrayCharInvert.join(''); //transformo os dois em string novamente(tanto a palavra normal quanto invertida)


//     if(string == stringInvert){
//         console.log(`A palavra '${palavra}' é um Palíndromo`);
//     }
//     else{
//         console.log('');
//     }  
// } // se for é, se não for é(se n percebeu isso é mt burro papo)
// palindromo('Radar')

// //questão 4
// function matrizCalc (matrizA, matrizB) {
//     let matrizResultante = []; //Faz matrizresultante se tornar um vetor    
//     for (let i = 0; i < matrizA.length; i++) { //cria a repetição baseado no tamanho de matrizA
//         matrizResultante[i] = []
//         for (let j = 0; j < matrizA[0].length; j++) {//cria a repetição baseada no tamanho dos arrays dentro do array MatrizA
//             matrizResultante[i][j] = matrizA[i][j] + matrizB[i][j] //adiciona a soma a matrizResultante
//         }
//     }
//     // console.log(`Matriz resultante: ${matrizResultante}`);
//     console.log("Matriz resultante:", matrizResultante);
   
// }


// matrizCalc  (
//     [[1, 2], [3, 4]],
//     [[5, 6], [7, 8]]
// );

// //qestão 5
// function contagemLetras(texto,letra) {
//     texto = texto.replace(/\s+/g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');//remove espaços em branco e caracteres especiais e letras maiúsculas
//     letra = letra.replace(/\s+/g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//     let contador = 0;//crio o contador
   
//     for (let char of texto) {//a partir dos caracteres contidos em texto
//       if (letra.includes(char)) {//se a letra proposta estiver inclusa nos caracteres
//         contador++;//a quantidades de letras de vezes e colocada em contador
//       }
//     }
//     console.log(`A letra "${letra}" aparece ${contador} vezes.`);
// }
// contagemLetras("programação é divertida","a");

// // questão 6
// function alfabeticList(nomes) {
//     nomes.sort();//sort faz com que todos os strings dentro dele sejam colocados em ordem alfabética (dentro do vetor tem que serem strings)
//     console.log(`Lista ordenada: ${nomes}`);
// }
// alfabeticList(["Carlos","Ana","Bruno","Daniela"])

// //questão 7
// function countEven(texto) {
//     let vogais = ["a","e","i","o","u"] //defino todas as vogais
//     let contador = 0
//     for (let char of texto) { //para os caracteres do texto
//         if (vogais.includes(char)){//verifico se neles contem alguma das vogais
//             contador++//se tiver ele contabiliza +1
//         }
//     }
//     console.log(`O texto contem ${contador} vogais.`);
// }
// countEven("exemplo de texto")

// //Contador de vogal, com vogal específica
// function countEvenFor(texto,vogal) {
//     let contador = 0
//     for (let char of texto) {
//         if (vogal.includes(char)){
//             contador++
//         }
//     }
//     console.log(`O texto contem a vogal "${vogal}" ${contador} vezes.`);
// }
// countEvenFor("exemplo de texto","e") //a diferença desse é que a vogal foi definida antes.

// // questão 8
// function primeNumbers(number) {
//     if(number % 2 != 0 && number > 1){//Se o resto da divisão dele for diferente de zero e o número for maior que um ele é primo
//         console.log(`O número ${number} é primo`);
//     }
//     else{
//         console.log(`O número ${number} não é primo`);
//     }
// }
// primeNumbers(17)

// //questão 9
// function fibonacci(number) {
//     let = num0 = 0, num1 = 1, proxNum = 0; //cria as variáveis
//     console.log(`A sequência é: `);
//     console.log(num0);
//     if(number > 1){
//         console.log(num1);
//     } //Se o intervalo for maior que um ele continua
//     for (let i = 2; i < number; i++) {
//         proxNum = num0 + num1
//         console.log(proxNum);
//         num0 = num1
//         num1 = proxNum  
//     } //mó brisa, quando ele rodar na primeira vez, ele faz o cálculo num0 + num1 e aloca em proxNum, a partir disso define num0 para o próximo da fila e num1 também, repetindo até acabar o intervalo
//     console.log();
// }
// fibonacci(5)

// //questão 10
// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

// //questão 11
// function calcOddInterval(num1,num2) {
//     let soma = 0
//     for(i = num1; i <= num2; i++){//i vai receber num1 e vai somar continuar o if até chegar em num2
//         if(i % 2 !== 0){//aqui eu defino que para cada número ímpar seja somado
//             soma += i; //os números ímpares são somados até o fim do for
//         }
//     }
//     console.log(`A soma dos Números ímpares entre ${num1} até ${num2} é: ${soma}`);
// }
// calcOddInterval(2,50)

// //questão 12
// function paragrafCount(paragrafo) {
//     let arrParagrafo = paragrafo.split(" ") //vai separar de acordo com os espaços em branco
//     console.log(`O texto contem ${arrParagrafo.length} palavras.`);
// }
// paragrafCount("Este é um exemplo de parágrafo para contagem de palavras.")

// //questão 13
// function fatCalc(numero) {
//     let fatorial = 1 //tem que iniciar em 1
//     for (let i = 1; i <= numero; i++) { //para ir de 1 até o número proposto
//         fatorial = fatorial * i;//aloca em fatorial o resultado da multiplicação de fatorial pelo número
//     }//não pode ser zero porque 0*1 = 0 logo n sairia disto
//     console.log(fatorial);
// }
// fatCalc(5)

// //questão 14
// // base ** exponent
// function circleArea(raio) {
//     let area = 3.14 * (raio * raio) //A = pi .r^2, logo raio * raio = X
//     console.log(area);
// }
// circleArea(12)

// //questão 15
// function generateRandomNum(min, max) {
//     let numeroAleatorio =  Math.floor(Math.random() * (max - min + 1) + min);//math.random ele faz a randomização entre 0 e 1,
//     //multiplicamos pela diferença dos valores dados menos 1 e depois somamos com o primeiro número
//     console.log(numeroAleatorio);
// }
// generateRandomNum(1,100)

// //questão 16
// function countVogalsDef(palavra) {
//     palavra = palavra.replace(/\s+/g, '').toLowerCase();
//     // console.log(palavra);


//     let vogais = ["a","e","i","o","u"];
//     let contador = 0;
//     let objNumeroVogais = {};


//     for (let i = 0; i < palavra.length; i++) {
//         let letra = palavra[i]
//         // console.log(letra);
//         if(vogais.includes(letra)){
//             contador++;
//             if(!objNumeroVogais[letra]){
//                 objNumeroVogais[letra] = 1
//             }
//             else{
//                 objNumeroVogais[letra]++
//             }
//         }
//     }
//     console.log(`Aparecem ${contador} vogais.`);
//     console.log('aparecem', objNumeroVogais);
// }
// countVogalsDef("Paralelepipedo")

// //questão 17
// function mediaMedianaModal(numbers) {
//     // Média
//     let soma1 = 0;
//     const numCrescente = numbers.slice().sort((a, b) => a - b); // coloca em um arrai os numeros ordenados em crescente
//     // console.log('Array ordenado:', numCrescente);

//     for (let i = 0; i < numbers.length; i++) {
//         soma1 += numbers[i];
//     }
//     const media = soma1 / numbers.length;
//     console.log('Média:', media);


//     // Mediana
//     let mediana;
//     const mid = Math.floor(numCrescente.length / 2);//define o numero do meio

//     if (numCrescente.length % 2 === 0) { //Se o comprimento do array for par, a mediana é a média dos dois números do meio.
//         mediana = (numCrescente[mid - 1] + numCrescente[mid]) / 2;
//     } else {//Se o comprimento do array for ímpar, a mediana é o número do meio.
//         mediana = numCrescente[mid];
//     }
//     console.log('Mediana:', mediana);


//     // Moda
//     const frequencia = {};
//     numbers.forEach(moda => {
//         frequencia[moda] = (frequencia[moda] || 0) + 1;//contabiliza a frequencia de cada numero
//     });

//     let maxFrequencia = 0;
//     let moda = [];
//     for (let numero in frequencia) {
//         if (frequencia[numero] > maxFrequencia) {//se a frequencia de numeros for maior que 0, temos uma moda!
//             maxFrequencia = frequencia[numero];
//             moda = [Number(numero)];
//         } else if (frequencia[numero] === maxFrequencia) {
//             moda.push(Number(numero));
//         }
//     }

//     if (moda.length === numbers.length) {
//         console.log('Não há moda');
//     } else {
//         console.log('Moda:', moda);
//     }
// }
// // Chamando a função com um array de números
// mediaMedianaModal([37, 58, 12, 91, 25, 63, 84, 49, 71, 69, 58, 91, 12]);

// //questão 18
// function retunSecondWord(palavras) {
//     console.log(palavras[1]);
// }
// retunSecondWord(["drake","josh","fron"])

// //questão 19
// function dCalcResult(a,b,c) {
//     let d = a + (b * c)
//     console.log(d);
// }
// dCalcResult(5,8,3)

// //questão 20 (A Refazer)
// function joguinho(jogador1Escolha,jogador2Escolha) {
   
//     if (
//         (jogador1Escolha === "pedra" && jogador2Escolha === "papel") ||
//         (jogador1Escolha === "papel" && jogador2Escolha === "ataque") ||
//         (jogador1Escolha === "ataque" && jogador2Escolha === "pedra")
//     ) {
//         console.log(`Jogador 2 venceu.`);
//     } else if (
//         (jogador2Escolha === "pedra" && jogador1Escolha === "papel") ||
//         (jogador2Escolha === "papel" && jogador1Escolha === "ataque") ||
//         (jogador2Escolha === "ataque" && jogador1Escolha === "pedra")
//     ) {
//         console.log(`Jogador 1 venceu.`);
//     } else {
//         console.log(`Empate.`);
//         // Em caso de empate, pode-se decidir se alguém ganha ponto ou não
//     }
// }
// joguinho("papel","ataque")

// //questão 21
// function calculoEvento(diaInicio,horaInicio,minutoInicio,segundoInicio,diaFim,horaFim,minutoFim,segundoFim) {
//     let inicioSegundos = (diaInicio * 86400) + (horaInicio * 3600) + (minutoInicio * 60) + segundoInicio;
//     let fimSegundos = (diaFim * 86400) + (horaFim * 3600) + (minutoFim * 60) + segundoFim;
//     let totalSegundos = fimSegundos - inicioSegundos;


//     let dia = Math.floor(totalSegundos / 86400);
//     totalSegundos %= 86400


//     let horas = Math.floor(totalSegundos / 3600);
//     totalSegundos %= 3600


//     let minutos = Math.floor(totalSegundos / 60);


//     let segundos = totalSegundos % 60;


//     console.log(`${dia} Dia(s) `);
//     console.log(`${horas} Hora(s) `);
//     console.log(`${minutos} Minuto(s) `);
//     console.log(`${segundos} Segundo(s) `);
// }
// calculoEvento(12,15,30,0,25,17,0,0);

// //questão 22
// function maiorIdadeCNH(nome,idade) {
//     if(idade >= 18 && idade <= 65){
//         console.log(`${nome} tem ${idade} anos é maior de idade e pode tirar carteira.`);
//     }else if(idade <= 17){
//         console.log(`${nome} tem ${idade} anos é menor de idade e não pode tirar carteira.`);
//     }else if(idade >= 66){
//         console.log(`${nome} tem ${idade} e passou da idade de tirar a carteira`);
//     }
// }
// maiorIdadeCNH("Diogo", 18)

//Agora Interativos
//Q1