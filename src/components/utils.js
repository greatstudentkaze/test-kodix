export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

export const formatPrice = price =>
  price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', minimumFractionDigits: 0});

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
