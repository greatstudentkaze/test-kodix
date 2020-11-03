import React from 'react';

import { StyledFormPayments, FormLabel, FormCheckbox } from '../StyledFormComponents';
import { formatPrice } from '../../../utils';

const FormPayments = ({ earlyPayments }) => (
  <StyledFormPayments>
    <FormLabel as="legend">Итого можете внести в&nbsp;качестве досрочных:</FormLabel>
    {earlyPayments.map((payment, i) =>
      <FormCheckbox key={i + payment}>
        <input className="visually-hidden" type="checkbox" name={`payment-${i + 1}`} id={`payment-${i + 1}`}
               value={payment}/>
        <FormLabel htmlFor={`payment-${i + 1}`}>{formatPrice(payment)} <span>в {i + 1}-ый год</span></FormLabel>
      </FormCheckbox>
    )}
  </StyledFormPayments>
);

export default FormPayments;
