export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

export const getTaxDeductionAmount = apartmentCost => apartmentCost > 2000000 ? 260000 : apartmentCost * 0.13;

export const getEarlyPaymentAmount = (monthSalary, taxDeduction) =>
  taxDeduction > (monthSalary * 12) * 0.13 ? (monthSalary * 12) * 0.13 : taxDeduction;

export const getEarlyPayments = (monthSalary, taxDeduction, getEarlyPaymentAmount) => {
  const maxEarlyPayment = +getEarlyPaymentAmount(monthSalary, taxDeduction).toFixed(1),
    maxEarlyPaymentCount = Math.trunc(taxDeduction / maxEarlyPayment),
    lastPayment = +(taxDeduction - maxEarlyPayment * maxEarlyPaymentCount).toFixed(1);

  const earlyPayments = Array(maxEarlyPaymentCount);
  earlyPayments.fill(maxEarlyPayment);
  if (lastPayment) earlyPayments.push(lastPayment);

  return earlyPayments;
};
