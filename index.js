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

// const answer = prompt("Enter the number of minutes to format");
// const hours = String(Math.floor(answer / 60)).padStart(2, '0') ;
// const minutes = String(answer % 60).padStart(2, '0');

// console.log(`${hours} : ${minutes}`);

//3. //Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const min = 3;
// const max = 12;
// for (let index = max; index >= min; index -= 1) {

//     if (!(index %2))
//     {console.log(index);}
// }

//4. За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

// const min = 2;
// const max = 10;
// let total = 1;
// for (let i = min; i <= max; i += 1){
//     if (!(i % 2)) {
//         total *= i;
//     }
// }
// console.log(total);

// //    if (i % 2 !== 0)
//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера
//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const login = prompt("Hello, please enter your login!");

// if (login === null) {
// 	alert("Authorization has been cancelled");
// } else if (login === "admin") {
// 	const password = prompt("Please enter your password");
// 	if (password === null) {
// 		alert("Authorization has been cancelled");
// 	} else if (password === "adminPassword") {
// 		alert("Hello!");
// 	} else {
// 		alert("Goodbye!");
// 	}
// } else {
// 	alert("Goodbye!");
// }

//6. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [total]."
//Робити перевірку, що користувач ввів саме число, а не довільний рядок не потрібно.

// let total = 0;
// let inputValue;
// while (inputValue !== null) {
// 	inputValue = prompt("Hello, enter please the number");
// 	total += Number(inputValue);
// }
// console.log(`The total sum of the entered numbers is ${total}.`);

// 7. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана
// Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

// let request = prompt("Hello, enter please the number greater then 100.");

// if (request === null) {
//   alert("Goodbye");
// } else if (request <= 100) {
//   do {
//     request = prompt("Hello, enter please the number greater then 100.");
//   } while (request <= 100 && request);
// } else {
//   alert(request);
// }

// ===========================================
// Цикл do..while повторятиметься доки справджуються дві перевірки:

// Перевірка request <= 100 – тобто, що введе число досі менше за 100.
// Перевірка && request рахуватиметься false, коли request матиме значення null або порожній рядок ''. В цьому випадку цикл while теж потрібно буде зупинити.
// Друга перевірка додається тому що, якщо request буде null, тоді перевірка request <= 100 верне true. Отже, без другої перевірки цикл не зупиниться, якщо користувач натисне Скасувати. Необхідні обидві перевірки.
// ===========================================

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
// Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
// alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// let requestNumber = prompt("Hello, enter please the number between 0 and 59");

// if (0 > requestNumber && requestNumber > 59) {
//   alert(`The ${requestNumber} is outside 0 and 59`);
// } else if (0 <= requestNumber && requestNumber <= 15) {
//   alert(`Number ${requestNumber} refers to 1 quarters`);
// } else if (16 <= requestNumber && requestNumber <= 30) {
//   alert(`Number ${requestNumber} refers to 2 quarters`);
// } else if (31 <= requestNumber && requestNumber <= 45) {
//   alert(`Number ${requestNumber} refers to 3 quarters`);
// } else if (46 <= requestNumber && requestNumber <= 59) {
//   alert(`Number ${requestNumber} refers to 4 quarters`);
// }

// 9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// function stringValuesBeginning(string) {
//   if (string.startsWith("a")) {
//     console.log("yes");
//     return "yes";
//   }

//   console.log("no");
//   return "no";
// }

// stringValuesBeginning("a1abcde");

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

// function fillArray(length, value) {
//   const arr = new Array(length).fill(value);
//   //   console.log(arr);
//   return arr;
// }

// fillArray(3, "a");

// 11. Написати функцію, яка буде видаляти з масива усі значення, які приводяться до false
// undefined, null, false, '', 0, NaN
// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// 1 variant ===================

// function removeValue() {
//   let trueArray = [];
//   let falsy;
//   for (let i = 0; i < array.length; i += 1) {
//     falsy = Boolean(array[i]);
//     if (falsy === true) {
//       trueArray.push(array[i]);
//     }
//   }
//   console.log(trueArray);
//   return trueArray;
// }
// removeValue();

// 2 variant ===================

// function removeValue() {
//   let trueArray = [];
//   for (let element of array) {
//     if (Boolean(element) === true) {
//       trueArray.push(element);
//     }
//   }
//   console.log(trueArray);
//   return trueArray;
// }
// removeValue();

// 12. Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові
const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// відсортувати масив
// порівняти довжину нових псевдомасивів
// порівняти елементи нових псевдомасивів між собою
// (з виконанням 2 - х умов: масив 2 містить в собі елемент з масиву 1; елемент з однаковим індексом однакові за вмістом)
// вивести результат

// перерішати!

// const filter = function (arrA, arrB) {
//   let newArrA = [...arrA].sort();
//   let newArrB = [...arrB].sort();
//   console.log(newArrA);
//   console.log(newArrB);

//   if (newArrA.length !== newArrB.length) {
//     console.log("no");
//     return "no";
//   } else {
//     for (let i = 0; i < newArrA.length; i += 1) {
//       for (let j = 0; j < newArrB.length; j += 1) {
//         if (
//           newArrB.includes(newArrA[i]) &&
//           i === j &&
//           newArrA[i] !== newArrB[j]
//         ) {
//           console.log("no");
//           return "no";
//         } else {
//           continue;
//         }
//       }
//     }
//     console.log("yes");
//     return "yes";
//   }
// };

// filter(arr1, arr2);
// filter(arr3, arr4);
// filter(arr5, arr6);
// filter(arr7, arr8);

//  const par1 = [...arrA]
//    .sort((a, b) => String(a).localeCompare(String(b)))
//    .join("");
//  const par2 = [...arrB]
//    .sort((a, b) => String(a).localeCompare(String(b)))
//    .join("");

//  console.log(par1 === par2);