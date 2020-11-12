const countryName = "яМайКа";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message = NO_DELIVERY;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case CHINA:
      country === "Китай";
      break;
    case AUSTRALIA:
      country === "Австралия";
      break;
    case INDIA:
      country === "Индия";
      break;
    case JAMAICA:
      country === "Ямайка";
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (country === "Китай") {
  price = 100;
  message = `Доставка в ${CHINA} будет стоить ${price} кредитов`;
} else if (country === "Австралия") {
  price = 170;
  message = `Доставка в ${AUSTRALIA} будет стоить ${price} кредитов`;
} else if (country === "Индия") {
  price = 80;
  message = `Доставка в ${INDIA} будет стоить ${price} кредитов`;
} else if (country === "Ямайка") {
  price = 120;
  message = `Доставка в ${JAMAICA} будет стоить ${price} кредитов`;
}
console.log(message);