import React from 'react';

import { StyledFormPayments, FormLabel, FormCheckbox } from '../StyledFormComponents';
import { getEarlyPaymentAmount, getTaxDeductionAmount } from '../../../utils';

const FormPayments = ({ monthSalary }) => {
  const apartmentCost = 2000000;
  const earlyPayments = [];
  let taxDeductionAmount = getTaxDeductionAmount(apartmentCost);

  if (monthSalary < 10000) {
    earlyPayments.length = 0;
  } else {
    let i = 1;

    while (taxDeductionAmount) {
      const earlyPaymentAmount = Math.round(getEarlyPaymentAmount(monthSalary, taxDeductionAmount));

      earlyPayments.push(
        <FormCheckbox key={i + earlyPaymentAmount}>
          <input className="visually-hidden" type="checkbox" name={`payment-${i}`} id={`payment-${i}`}
                 value={earlyPaymentAmount}/>
          <FormLabel htmlFor={`payment-${i}`}>{earlyPaymentAmount} рублей <span>в {i}-ый год</span></FormLabel>
        </FormCheckbox>
      );

      taxDeductionAmount -= earlyPaymentAmount;
      i++;
    }
  }

  return (
    <StyledFormPayments>
      <FormLabel as="legend">Итого можете внести в качестве досрочных:</FormLabel>
      {earlyPayments.length > 0 ? earlyPayments : '0 рублей (Ваша зарпалат должна быть не менее 10000 рублей) :('}
    </StyledFormPayments>
  );
};

export default FormPayments;
