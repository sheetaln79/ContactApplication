import Main from './Main'
import history from '../history';
import {Button,Grid,Paper} from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Add() {
    const classes = useStyles();
    const dates=[
        {
         
            "typeOfDate": "Bday",
            "calenderDate": "22-10-1997"
        },
        {
           
            "typeOfDate": "Aday",
            "calenderDate": "31-03-1994"
        }
    ];

   const phoneNumbers= [
        {
         
            "typeOfNumber": "Home",
            "areaCode": 91,
            "pnumber": 9834504961
        },
        {
            
            "typeOfNumber": "Work",
            "areaCode": 91,
            "pnumber": 9834175014
        }
    ]

    const handleClick=()=>{
        history.push('/')
    }
  return (
    <div className="App">
    <Button variant="contained" color="primary" onClick={handleClick}>
         Go Back
    </Button>
    <Grid container spacing={3}>
    <Grid item xs={3}>
          <Paper className={classes.paper}>First Name : firstname</Paper>
    </Grid>
    <Grid item xs={3}>
        <Paper className={classes.paper}>Middle Name : middlename</Paper>
    </Grid>
    <Grid item xs={3}>
          <Paper className={classes.paper}>Last Name</Paper>
    </Grid>
    <Grid item xs={3}>
          <Paper className={classes.paper}>lastname</Paper>
    </Grid>
   
        {dates.map((date)=>(
            <>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{date.typeOfDate}</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{date.calenderDate}</Paper>
            </Grid>
        </>
        ))}
    
        {/* <Paper>Phone Numbers</Paper> */}
        {phoneNumbers.map((item)=>(
            <>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{item.typeOfNumber}</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>{item.areaCode}-{item.pnumber}</Paper>
            </Grid>
        </>
        ))}
       
    </Grid>
    </div>
  );
}

export default Add;
