import React from 'react';

import { Input, Label, Container } from '../styles.js'

const TextField = ({ value, label, onChange }) => {
    const [valor, setValor] = React.useState();

    const handleOnChange = (event) => {
        const value = event.target.value;
        setValor(value);

    onChange?.(value)
  }

  return (
    <Container>
      <Label>{'Desafio'}</Label>
      <Input value={value} onChange={handleOnChange} placeholder={'Digite um valor'}/>
    </Container>
  )
}

export default TextField