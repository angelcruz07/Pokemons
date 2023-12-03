import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'  
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import Balance from './components/Balance'

//Calular interes compuesto
const compoundInterest = (deposit, contribution, years, rate) => {
    let total =  deposit
    for( let i = 0; i < years; i++ ) {
      total = (total + contribution) * (rate + 1)
    }
    return Math.round(total)
}


const formatter = new Intl.NumberFormat('en-US', {
  styled: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2 , 
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState('')
    const handleSubmit = ({ deposit, contribution, years, rate}) =>  {
      const value = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
      setBalance(formatter.format(value))
    }
  return (
    <Container>
      <Section>
        <Formik
          initialValues = {{
            deposit: '', 
            contribution: '',
            years: '',
            rate: '',}}
          onSubmit ={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Campo Obligatorio').typeError('Deber ser un numero'),
            contribution: Yup.number().required('Campo Obligatorio').typeError('Deber ser un numero'),
            years: Yup.number().required('Campo Obligatorio').typeError('Deber ser un numero'),
            rate: Yup.number().required('Campo Obligatorio').typeError('Deber ser un numero').min(0, 'El valor minimo es 0').max(1, 'El valor maximo es 1'),
            })} >
         
        <Form>
          <Input name="deposit" label="Deposito inicial"/>
          <Input name="contribution" label="Contribucion anual"/>
          <Input name="years" label="Años"/>
          <Input name="rate" label="Interes estimado"/>
          <Button type="submit">Calcular</Button>
        </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: $ {balance}</Balance> : null}
      </Section>
    </Container>
  )
}

export default App
