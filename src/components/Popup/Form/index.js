import React from 'react';

import { StyledForm, FormItem, FormLabel } from './StyledFormComponents';

import FormPayments from './FormPayments';
import FormType from './FormType';
import Button from '../../Button';

const Form = () => (
  <StyledForm>
    <FormItem>
      <FormLabel htmlFor="salary">Ваша зарплата в месяц</FormLabel>
      <input type="text" id="salary" name="salary" placeholder="Введите данные"/>
    </FormItem>
    <FormPayments />
    <FormType />
    <Button type="submit" text="Добавить" theme="red" />
  </StyledForm>
);

export default Form;
