import React, { useState } from 'react';

import { StyledForm, FormItem, FormLabel, FormInputError } from './StyledFormComponents';

import FormPayments from './FormPayments';
import FormType from './FormType';
import Button from '../../Button';

import { isNumber } from '../../utils';

const Form = () => {
  const [monthSalary, setMonthSalary] = useState('');
  const [isShowInputError, setIsShowInputError] = useState(false);

  const handleSalaryChange = evt => {
    const salaryInput = evt.target;

    if (isNumber(salaryInput.value) || !salaryInput.value) {
      setMonthSalary(salaryInput.value);

      if (!salaryInput.value) {
        salaryInput.classList.add('error');
        setIsShowInputError(true);
      } else {
        salaryInput.classList.remove('error');
        setIsShowInputError(false);
      }
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;

    if (!monthSalary) {
      form.salary.classList.add('error');
      setIsShowInputError(true);
    } else {
      form.salary.classList.remove('error');
      setIsShowInputError(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel htmlFor="salary">Ваша зарплата в месяц</FormLabel>
        <input type="text" id="salary" name="salary" placeholder="Введите данные" value={monthSalary} onChange={handleSalaryChange}/>
        {isShowInputError && <FormInputError>Поле обязательно для заполнения</FormInputError>}
      </FormItem>
      {monthSalary && <FormPayments monthSalary={monthSalary} />}
      <FormType />
      <Button type="submit" text="Добавить" theme="red" />
    </StyledForm>
  );
};

export default Form;
