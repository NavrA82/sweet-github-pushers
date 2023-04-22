//1. Використовуючи функцію if...else,
//напишіть код, яий буде запитувати:
//"кWhat is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

// const answer = prompt("кWhat is the official name of JavaScript?");
// if (answer === "ECMAScript") {
// 	alert("True!");
// } else {
// 	alert("Don't you know? ECMAScript!");
// }


// 2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

const answer = prompt("Enter the number of minutes to format");
const hours = String(Math.floor(answer / 60)).padStart(2, '0') ;
const minutes = String(answer % 60).padStart(2, '0');

console.log(`${hours} : ${minutes}`);
