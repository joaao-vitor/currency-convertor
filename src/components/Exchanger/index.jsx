import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import InputGroup from './CurrencyGroup';

export default function Exchanger() {
    const currencies = ['BRL', 'USD', 'CAD'];

    const [startQt, setStartQt] = useState(0);
    const [endQt, setEndQt] = useState(0);

    const [startCurrency, setStartCurrency] = useState('');
    const [endCurrency, setEndCurrency] = useState('');

    const changeStartQt = (event) => setStartQt(event.target.value);

    const changeStartCurrency = (event) => setStartCurrency(event.target.value);
    const changeEndCurrency = (event) => setEndCurrency(event.target.value);

    const toggleCurrency = () => {
        const oldStart = startCurrency;
        setStartCurrency(endCurrency);
        setEndCurrency(oldStart);
    };
    return (
        <>
            <Box component="section" sx={{ p: 2, m: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Faça sua conversão
                </Typography>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <InputGroup
                        currValue={startCurrency}
                        onChangeCurr={changeStartCurrency}
                        currencies={currencies}
                        qtValue={startQt}
                        onChangeQt={changeStartQt}
                    />
                    <IconButton sx={{ mt: 3 }} onClick={toggleCurrency}>
                        <SwapHorizIcon />
                    </IconButton>

                    <InputGroup
                        currValue={endCurrency}
                        onChangeCurr={changeEndCurrency}
                        currencies={currencies}
                        qtValue={endQt}
                        disabled={true}
                    />

                </Box>
                <Box component='div' display={'flex'} sx={{ flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                    {endQt > 0 && (
                        <>
                            <Typography variant='h5' sx={{ fontWeight: 500 }}>{startCurrency} {startQt} = {endCurrency} <span style={{ color: 'green' }}>{endQt}</span></Typography>
                            <Typography sx={{ fontWeight: 300 }}>Taxa de conversão utilizada: 0.5432</Typography>
                        </>
                    )}
                </Box>
            </Box>
        </>
    );
}
