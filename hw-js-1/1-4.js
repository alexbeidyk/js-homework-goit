const orderPieces = 7;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits === 0) {
  message = ACCESS_DENIED;
} else if (balanceCredit <= 0) {
  message = ACCESS_DENIED;
}

console.log(message);