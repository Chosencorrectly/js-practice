let num = 50;

if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Многовато!")
} else {
    console.log("Верно!")
}

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Многовато");
        break;
    case num > 80:
        console.log("Все еще многовато!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}