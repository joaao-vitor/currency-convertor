import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'
import { Delete } from '@mui/icons-material';

export default function Historic({ toggleDrawer }) {

    const historic = [
        {
            id: 1,
            date: new Date(),
            startQt: 30.5,
            endQt: 5.4,
            startCurrency: 'BRL',
            endCurrency: 'USD',
            tax: 3.0443,
        },
        {
            id: 2,
            date: new Date(),
            startQt: 20.5,
            endQt: 5.4,
            startCurrency: 'BRL',
            endCurrency: 'CAD',
            tax: 3.0443,
        },
        {
            id: 3,
            date: new Date(),
            startQt: 20.5,
            endQt: 5.4,
            startCurrency: 'BRL',
            endCurrency: 'RUS',
            tax: 3.0443,
        }
    ]

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const formatHour = (date) => {
        const hour = date.getHours().toString().padStart(2, 0);
        const minute = date.getMinutes().toString().padStart(2, 0);

        return `${hour}:${minute}`
    }

    const deleteFromHistoric = () => { }
    return (

        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell align="left">Hora</TableCell>
                            <TableCell align="left">Valor Informado</TableCell>
                            <TableCell align="left">Valor Convertido</TableCell>
                            <TableCell align="left">Taxa</TableCell>
                            <TableCell align="left">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        ({
                            historic.map(h => <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {formatDate(h.date)}
                                </TableCell>
                                <TableCell align="left">{formatHour(h.date)}</TableCell>
                                <TableCell align="left">{h.startCurrency} {h.startQt}</TableCell>
                                <TableCell align="left">{h.endCurrency} {h.endQt}</TableCell>
                                <TableCell align="left">{h.tax}</TableCell>
                                <TableCell align="left"><IconButton onClick={deleteFromHistoric()}><Delete /></IconButton></TableCell>
                            </TableRow>)
                        })

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
