let money = +prompt('Ваш бюджет на месяц?', ['В рублях']);
let time = prompt('Введите дату в формате YYYY-DD-MM', ['2020-13-05']);
let mandatoryExpense = prompt('Введите обязательную статью расходов на этот месяц');

if (mandatoryExpense != false) {
    var mandatoryExpenseCost = + prompt("Сколько это будет стоить?");
} else {
    alert("Вы не указали статью расходов");
};

let expenses = new Object();
let optionalExpenses = new Array();
let income = new Array();
let savings = false;

let appData = {
    moneyData: money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings,
};

let dailyBudget = (money + mandatoryExpenseCost) / 30;

alert("Ваш дневной бюджет: " + dailyBudget + " рублей.");

console.log(mandatoryExpenseCost);
console.log(appData.moneyData);
console.log(appData.timeData);
console.log(mandatoryExpense == true);
console.log(appData);

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     alert('Маловато!');
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (num; num < 56; num++) {
//     if (num == 54) {
//         continue
//     }
//     console.log(num);
// };