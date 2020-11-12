console.log('Exercicio 1');
let multiplicar = [9, 9, 1, 80, 55, 94, 7, 19, 4, 73, 43, 71, 60, 91, 94, 72, 53, 38, 35, 55, 62, 39, 2, 3, 94]
for (let i = 0; i < multiplicar.length; i++) {
    let a = multiplicar[i] * 2;
    console.log(a);
    document.write("," + a)
}



console.log('---------------------------------------------------------------------');
console.log('Exercicio 2');
let multiplo = [17, 6, 6, 8, 4, 79, 5, 30, 4, 3, 2, 1, 1, 7, 10, 3, 42, 2, 2, 9, 90, 4]
for (let i = 0; i < multiplo.length; i++) {
    if (multiplo[i] % 3 == 0) {
        let m = multiplo[i];
        console.log(m);
    }
}


console.log('---------------------------------------------------------------------');
console.log('Exercicio 3');
let soma = [2, 18, 98, 18, 96, 97, 71, 34, 11, 4, 4, 36, 21, 17, 5, 44, 30, 12, 93, 2, 15, 6, 90, 29, 48]
const total = soma.reduce((total, currentElement) => total + currentElement)
console.log(total);
document.getElementById('ex3').innerHTML = 'Exercicio 3: ' + total



console.log('---------------------------------------------------------------------');
console.log('Exercicio 4');
for (i = 1; i <= 100; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log('---------------------------------------------------------------------');
console.log('Exerciccio 5');
let person = [
    {
        id: 1,
        name: "João",
    },
    {
        id: 2,
        name: "Maria",
    },
    {
        id: 3,
        name: "Paulo",
    },
    {
        id: 4,
        name: "Fabio",
    },
    {
        id: 5,
        name: "João",
    },
    {
        id: 6,
        name: "Paulo",
    },
]

console.log(person);
const teste1 = person.filter((elem, index, self) => self.findIndex(item => item.name === elem.name) === index)
console.log(teste1);



console.log('---------------------------------------------------------------------');
console.log('Exercicio 6');
let array = []
let x = 25
let a = 0
let b = 1
let f = 1

for (let i = 0; i < x; i++) {
    array.push(f)
    f = a + b
    a = b
    b = f

}
console.log(array);
