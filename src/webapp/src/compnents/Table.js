import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import {TableRow,TableHead,TableContainer,TableCell,TableBody} from '@material-ui/core';
import {Paper,Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import {deleteContact,getContactById} from '../services/ContactService';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableContainer:{
    width: '90%',
    marginTop:'4%'
  }
});

const headers =["First Name","Middle Name","Last Name","Action" ]

export default function BasicTable(props) {
  const classes = useStyles();

  
const data = props.data;

  return (
   <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item,index) => (
            <TableCell align="left" key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {data?  ( <TableBody>
          {data.length>0 && data.map((row) => (
            <TableRow key={row.contactId}>
              <TableCell component="th" scope="row" key={row.contactId}>
                {row.firstname}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.middlename}
              </TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  id={row.contactId} 
                  onClick={(e)=>props.handleEdit(row.contactId,e)}
                >
                  Edit
                </Button>
                {'                  '}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  id={row.contactId} 
                  onClick={(e)=>props.handleDelete(row.contactId,e)}
                >
                  Delete 
                </Button>
              </TableCell>
              {/* <TableCell align="left">{row.addresses}</TableCell>
              <TableCell align="left">{row.phoneNumbers}</TableCell>
              <TableCell align="left">{row.dates}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
         ):''}
      </Table>
    </TableContainer>
  );
}
