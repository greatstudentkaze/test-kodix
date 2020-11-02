import React, { useState } from 'react';

import { StyledForm, FormItem, FormLabel } from './StyledFormComponents';

import FormPayments from './FormPayments';
import FormType from './FormType';
import Button from '../../Button';

import { isNumber } from '../../utils';

const Form = () => {
  const [monthSalary, setMonthSalary] = useState('');

  const handleSalaryChange = evt => {
    if (isNumber(evt.target.value) || !evt.target.value) {
      setMonthSalary(evt.target.value);
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel htmlFor="salary">Ваша зарплата в месяц</FormLabel>
        <input type="text" id="salary" name="salary" placeholder="Введите данные" value={monthSalary} onChange={handleSalaryChange}/>
      </FormItem>
      {monthSalary && <FormPayments monthSalary={monthSalary} />}
      <FormType />
      <Button type="submit" text="Добавить" theme="red" />
    </StyledForm>
  );
};

export default Form;
