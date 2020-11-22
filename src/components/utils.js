export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

export const formatCurrency = (price, words) => words[price % 10 === 1 && price % 100 !== 11 ?
  0 : price % 10 >= 2 && price % 10 <= 4 && (price % 100 < 10 || price % 100 >= 20) ? 1 : 2];

export const formatPrice = (price, formatCurrency) =>
  price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', minimumFractionDigits: 0})
    .replace(/₽/, formatCurrency(price, ['рубль', 'рубля', 'рублей']));


export const getTaxDeductionAmount = apartmentCost => apartmentCost > 2000000 ? 260000 : apartmentCost * 0.13;

export const getEarlyPaymentAmount = (monthSalary, taxDeduction) =>
  taxDeduction > (monthSalary * 12) * 0.13 ? (monthSalary * 12) * 0.13 : taxDeduction;

export const getEarlyPayments = (monthSalary, taxDeduction, getEarlyPaymentAmount) => {
  if (!monthSalary) return [];

  const maxEarlyPayment = Math.round(getEarlyPaymentAmount(monthSalary, taxDeduction)),
    maxEarlyPaymentCount = Math.trunc(taxDeduction / maxEarlyPayment),
    lastPayment = Math.round(taxDeduction - maxEarlyPayment * maxEarlyPaymentCount);

  const earlyPayments = Array(maxEarlyPaymentCount);
  earlyPayments.fill(maxEarlyPayment);
  if (lastPayment) earlyPayments.push(lastPayment);

  return earlyPayments;
};
