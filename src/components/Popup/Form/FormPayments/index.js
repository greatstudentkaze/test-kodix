import React from 'react';

import { StyledFormPayments, FormLabel, FormCheckbox } from '../StyledFormComponents';

const FormPayments = () => (
  <StyledFormPayments>
    <FormLabel as="legend">Итого можете внести в качестве досрочных:</FormLabel>
    <FormCheckbox>
      <input className="visually-hidden" type="checkbox" name="first-payment" id="first-payment" value="78000" defaultChecked />
      <FormLabel htmlFor="first-payment">78 000 рублей <span>в 1-ый год</span></FormLabel>
    </FormCheckbox>
  </StyledFormPayments>
);

export default FormPayments;
