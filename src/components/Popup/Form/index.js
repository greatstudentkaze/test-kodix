import React, { useState } from 'react';

import { StyledForm, FormItem, FormLabel, FormInputError, CalculateButton } from './StyledFormComponents';

import FormPayments from './FormPayments';
import FormType from './FormType';
import Button from '../../Button';

import { isNumber, getEarlyPaymentAmount, getTaxDeductionAmount, getEarlyPayments } from '../../utils';

const Form = () => {
  const [monthSalary, setMonthSalary] = useState('');
  const [earlyPayments, setEarlyPayments] = useState([]);
  const [isShowInputError, setIsShowInputError] = useState(false);

  const apartmentCost = 2000000;
  let taxDeductionAmount = getTaxDeductionAmount(apartmentCost);

  const handleCalculateBtnClick = () =>
    setEarlyPayments(getEarlyPayments(monthSalary, taxDeductionAmount, getEarlyPaymentAmount));

  const handleSalaryChange = evt => {
    const salaryInput = evt.target;

    if (isNumber(salaryInput.value) || !salaryInput.value) {
      setMonthSalary(salaryInput.value);
      setEarlyPayments([]);

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
    const form = evt.target,
      salaryInput = form.salary;

    if (!salaryInput.value) {
      setEarlyPayments([]);

      salaryInput.classList.add('error');
      setIsShowInputError(true);
    } else {
      salaryInput.classList.remove('error');
      setIsShowInputError(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel htmlFor="salary">Ваша зарплата в месяц</FormLabel>
        <input type="text" id="salary" name="salary" placeholder="Введите данные" value={monthSalary} onChange={handleSalaryChange}/>
        {isShowInputError && <FormInputError>Поле обязательно для заполнения</FormInputError>}
        <CalculateButton
          title="Зарплата должна быть не менее 10 000 рублей"
          onClick={handleCalculateBtnClick}
          disabled={monthSalary < 10000}>Рассчитать</CalculateButton>
      </FormItem>
      {earlyPayments.length !== 0 && <FormPayments earlyPayments={earlyPayments} />}
      <FormType />
      <Button type="submit" text="Добавить" theme="red" />
    </StyledForm>
  );
};

export default Form;
