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

alert("Ваш дневной бюджет: " + dailyBudget);

console.log(mandatoryExpenseCost);
console.log(typeof(mandatoryExpenseCost));
console.log(appData.moneyData);
console.log(appData.timeData);
console.log(mandatoryExpense == true);
console.log(typeof(expenses));
console.log(typeof(optionalExpenses));
console.log(appData);