import React, { useState } from 'react';

import {StyledForm, FormItem, FormLabel, FormCheckbox} from './StyledFormComponents';

import FormPayments from './FormPayments';
import FormType from './FormType';
import Button from '../../Button';

import { getEarlyPaymentAmount, getTaxDeductionAmount, isNumber } from '../../utils';

const Form = () => {
  const [monthSalary, setMonthSalary] = useState('');
  const [earlyPayments, setEarlyPayments] = useState([]);

  const apartmentCost = 2000000;
  let taxDeductionAmount = getTaxDeductionAmount(apartmentCost);

  const handleSalaryChange = evt => {
    if (isNumber(evt.target.value) || !evt.target.value) {
      setMonthSalary(evt.target.value);

      if (evt.target.value < 10000) {
        setEarlyPayments([]);
      } else {
        const tempEarlyPayments = [];
        let i = 1;

        while (taxDeductionAmount) {
          const earlyPaymentAmount = Math.round(getEarlyPaymentAmount(evt.target.value, taxDeductionAmount));

          tempEarlyPayments.push(
            <FormCheckbox key={i + earlyPaymentAmount}>
              <input className="visually-hidden" type="checkbox" name={`payment-${i}`} id={`payment-${i}`}
                     value={earlyPaymentAmount}/>
              <FormLabel htmlFor={`payment-${i}`}>{earlyPaymentAmount} рублей <span>в {i}-ый год</span></FormLabel>
            </FormCheckbox>
          );

          taxDeductionAmount -= earlyPaymentAmount;
          i++;
        }

        setEarlyPayments(tempEarlyPayments)
      }
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log('\n');
    console.log('Input value: ', evt.target.value);
    console.log('Month salary: ', monthSalary);
    console.log('Tax Deduction: ', taxDeductionAmount);
    console.log('Early payments: ', earlyPayments);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel htmlFor="salary">Ваша зарплата в месяц</FormLabel>
        <input type="text" id="salary" name="salary" placeholder="Введите данные" value={monthSalary} onChange={handleSalaryChange}/>
      </FormItem>
      {monthSalary && <FormPayments earlyPayments={earlyPayments} />}
      <FormType />
      <Button type="submit" text="Добавить" theme="red" />
    </StyledForm>
  );
};

export default Form;
