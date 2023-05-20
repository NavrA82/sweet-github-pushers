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

//7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

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

// 12. Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові
// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 1000,
//   poly: 1600,
//   ajax: 1470,
// };

// function getTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	const values = Object.values(salaries);
// 	for (let value of values) {
// 		totalSalary += value;
// 	}
// 	return totalSalary;
// }
// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let total = 0;
//   for (let stone of stones) {
//     if (stone.name === stonesName) {
//       total += stone.price * stone.quantity;
//     }
//   }
//   return total;
// }
// console.log(calcTotalPrice(stones, "emerald"));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     this.prop1 = Number(a);
//     this.prop2 = Number(b);
//   },
//   sum() {
//     if (isNaN(this.prop1) || isNaN(this.prop2)) {
//       console.log("invalid value");
//       return null;
//     }
//     return this.prop1 + this.prop2;
//   },
//   mult() {
//     if (isNaN(this.prop1) || isNaN(this.prop2)) {
//       console.log("invalid value");
//       return null;
//     }
//     return this.prop1 * this.prop2;
//   },
// };

// calculator.read(2, 4);
// console.log(calculator.sum());
// console.log(calculator.mult());

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}

// function updateObject(object, key) {
//   const newObject = { ...object };
//   delete newObject[key];
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b"));

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// function updateObject(object, ...keys) {
//   const newObject = { ...object };
//   for (let key of keys) {
//     delete newObject[key];
//   }
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));

// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// {
// // const account = {
//поточний баланс рахунку
// balance: 0,
//Історія трансакцій
// transactions: [],
//Метод приймає суму та тип трансакції
//створює об'єкт трансакції за зразком {id, type, amount}
//додає його у масив трансакцій
//в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
// createTransaction(type, amount) {
// },
//Метод приймає суму трансакції і відповідає за додавання суми до балансу.
// deposit(amount) {
// },
//Метод приймає суму трансакції і відповідає за віднімання суми до балансу.
//Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
// withdraw(amount) {
// },
//Метод повертає поточний баланс
// getBalance() {

// },
//Метод шукає та повертає об'єкт трансакції по id
// getTransactionDetails(idForSearch) {

// },
//Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
// getTotalSumByType(type) {

//     },
//   }
//   account.createTransaction('deposit', 120)
//   account.createTransaction('deposit', 100)
//   account.createTransaction('withdraw', 200)

//   console.log('balance', account.balance)
//   console.log('transactions', account.transactions)
//   console.log('getTotalSumByType', account.getTotalSumByType('withdraw'))
//   console.log('getTransactionDetails', account.getTransactionDetails(2))
// }

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає callback функцію
//greet(name) - це коллбек, яка приймає ім'я і логує в консолі
//рядок "Hi, <name>"
//Реалізуй перевірку, що prompt не пустий

// function letMeSeeYourName(callback) {
//   const message = prompt("Як тебе звуть?");
//   if (message === null) {
//     alert("Ви не ввели ім'я!");
//     return;
//   }
//   greet(message);
// }

// function greet(name) {
//   console.log(`Hi, ${name}`);
// }

// letMeSeeYourName(greet);

// Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//  const newProduct = {
//   name,
//   price,
//   id: Date.now(),
//  }
//  callback(newProduct);
// };

// function showProduct(product) {
//  console.log(product);
// };
// makeProduct("Banana", 65, showProduct);

//  Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const shef1 = makeShef("Олег");
// shef1("борщ");
// shef1("вареники");
// const shef2 = makeShef("Ігор");
// shef2("шкварки");

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка лічить і виводе в консоль кількість своїх викликів
//

// function makeCounter() {
//   let total = 0;
//   return function getResult() {
//     total += 1
//     console.log(total)
//   }
// };
// const counter1 = makeCounter();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();

// Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// function savePassword(password) {
//   return function checkPassword() {
//     const ask = prompt("Enter your password");
//     console.log(ask === password);
//   };
// }

// const constValue = savePassword("qwerty");

// constValue();

// 4. Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }
// product.showPrice()

// 5. Виправте код, щоб він працював
// function callAction(action) {
//     action()
// }

// const item = {
//     getQuantity() {
//         console.log(this.quantity)
//     },
//     quantity: 5,
// }

// callAction(item.getQuantity.bind(item));

// 10. Напиши функцию конструктор User для создания пользователя со следующими свойствами
// a. userName - имя, строка
// b. age - возраст, число
// c. numbersOfPost - количество постов, число
// d. User ожидает 1 параметр - объект настроек с одноименными свойствами

// Добавь метод getInfo(), который возвращает строку:
// `Пользователю ${} ${} лет и у него ${} публикаций.`
const User = function ({ userName, age, numbersOfPost } = {}) {
	this.userName = userName;
	this.age = age;
	this.numbersOfPost = numbersOfPost;
	this.getInfo = function () {
		console.log(
			`Пользователю ${userName} ${age} лет и у него ${numbersOfPost} публикаций.`
		);
	};
};
const mike = new User({ userName: "Mike", age: 18, numbersOfPost: 25 });
mike.getInfo();
