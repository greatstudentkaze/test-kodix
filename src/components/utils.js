export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

export const getTaxDeductionAmount = apartmentCost => apartmentCost > 2000000 ? 260000 : apartmentCost * 0.13;

export const getEarlyPaymentAmount = (monthSalary, taxDeduction) =>
  taxDeduction > (monthSalary * 12) * 0.13 ? (monthSalary * 12) * 0.13 : taxDeduction;

export const getEarlyPayments = (monthSalary, taxDeduction, getEarlyPaymentAmount) => {
  const earlyPayments = [];

  while (taxDeduction) {
    const earlyPaymentAmount = getEarlyPaymentAmount(monthSalary, taxDeduction);

    earlyPayments.push(earlyPaymentAmount);
    taxDeduction -= earlyPaymentAmount;
  }

  return earlyPayments;
};
