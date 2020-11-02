import React from 'react';

import { StyledFormPayments, FormLabel } from '../StyledFormComponents';

const FormPayments = ({ earlyPayments }) => {

  return (
    <StyledFormPayments>
      <FormLabel as="legend">Итого можете внести в качестве досрочных:</FormLabel>
      {earlyPayments.length > 0 ? earlyPayments : '0 рублей :('}
    </StyledFormPayments>
  );
};

export default FormPayments;
