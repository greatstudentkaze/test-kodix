import React from 'react';

import { StyledFormType, FormLabel, FormRadio } from '../StyledFormComponents';

const FormType = () => (
  <StyledFormType>
    <FormLabel as="legend">Что уменьшаем?</FormLabel>
    <FormRadio>
      <input className="visually-hidden" type="radio" id="payment" name="type" value="payment" defaultChecked />
      <label htmlFor="payment">Платеж</label>
    </FormRadio>
    <FormRadio>
      <input className="visually-hidden" type="radio" id="time" name="type" value="time" />
      <label htmlFor="time">Срок</label>
    </FormRadio>
  </StyledFormType>
);

export default FormType;
