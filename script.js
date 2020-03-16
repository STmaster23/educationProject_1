let money = prompt ("Ваш бюджет на месяц?", " ");
let time = prompt ("Введите дату в формате YYYY-MM-DD", " ");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let firstQuest = prompt("Введите обязательную статью расходов в этом месяце", " ");
let secondQuest = prompt("Во сколько обойдется?", " ");

appData.expenses.firstQuest = secondQuest;

console.log(money);
console.log(time);
console.log(firstQuest);
console.log(secondQuest);


alert(appData.budget/30);