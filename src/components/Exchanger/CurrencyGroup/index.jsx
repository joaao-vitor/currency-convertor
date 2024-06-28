import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export default function InputGroup({ currValue, onChangeCurr, currencies, qtValue, onChangeQt, disabled }) {
  const currenciesList = currencies.map(currency => <MenuItem key={currency} value={currency}>{currency}</MenuItem>)

  return (
    <Box component='div' sx={{ mt: 3, display: 'flex', gap: 2, flexDirection: {md: 'row', xs: 'column'}}}>
      <FormControl variant='outlined'>
        <InputLabel id="start-currency-select-label">Moeda</InputLabel>
        <Select
          labelId="start-currency-select-label"
          id="currency-select"
          value={currValue}
          label="Moeda"
          onChange={onChangeCurr}
          sx={{ minWidth: '100px' }}
        >
          {currenciesList}
        </Select>
      </FormControl>
      <TextField disabled={disabled} value={qtValue} onChange={onChangeQt} label='Quantia' type='number' variant="outlined" />
    </Box>
  )
}
