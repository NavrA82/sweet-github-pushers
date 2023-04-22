//1. Використовуючи функцію if...else,
//напишіть код, яий буде запитувати:
//"кWhat is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"
const answer = prompt("кWhat is the official name of JavaScript?");
if (answer === "ECMAScript") {
	alert("True!");
} else {
	alert("Don't you know? ECMAScript!");
}
