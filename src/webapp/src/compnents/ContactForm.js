import React,{useState,useEffect} from 'react';
import {Button,Grid,Paper,TextField,Divider,TextareaAutosize,Input,TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    divider:{
        width: '100%',
        margin: '5px',
        borderColor: '#dddddd45'
    },
    header:{
    textAlign: 'left',
    margin: '5px'
    }
  }));


const ContactForm=(props) =>{
    const classes = useStyles();
    const[contact,setContact] =useState(props.contact)

    useEffect(()=>{
        setContact(props.contact)
    },[props.contact])

    const handleChange=(event)=>{
        if(!event.target.value){
            return
        }
        const fieldId=event.target.id;
        if (props.contact) {
            debugger;
            props.contact[fieldId]= ({} && event.target.value) || props.contact[fieldId];
            console.log("contact ********",props.contact)
            props.handleChange(contact);
        }
    }
    const handleChangeAddress=(index,event)=>{
        console.log("on handlechangeaddress",event);
        event.preventDefault();
        if(!event.target.value){
            return
        }
        const fieldId=event.target.id;
        console.log(fieldId);
        if (props.contact) {
            debugger;
            props.contact.addresses[index][fieldId]= ({} && event.target.value) || props.contact.addresses[index][fieldId];
            console.log("address ********",props.contact)
            props.handleChange(contact);
        }

    }
    const handleChangePhoneNumbers=(index,event)=>{
        console.log("on handlechangephone",event);
        event.preventDefault();
        if(!event.target.value){
            return
        }
        const fieldId=event.target.id;
        console.log(fieldId);
        if (props.contact) {
            debugger;
            props.contact.phoneNumbers[index][fieldId]= ({} && event.target.value) || props.contact.phoneNumbers[index][fieldId];
            console.log("phone number ********",props.contact)
            props.handleChange(contact);
        }
    }
    const handleChangeDates=(index,event)=>{
        console.log("on handlechangedates",event);
        event.preventDefault();
        if(!event.target.value){
            return
        }
        const fieldId=event.target.id;
        console.log(fieldId);
        if (props.contact) {
            debugger;
            props.contact.dates[index][fieldId]= ({} && event.target.value) || props.contact.dates[index][fieldId];
            console.log("dates ********",props.contact)
            props.handleChange(contact);
        }
    }

    const handleAddAddress=(event)=>{
        console.log("on handleaddaddress",event);
        const inputState = {
                    typeofaddress: "",
                    streetaddress: "",
                    city: "",
                    state: "",
                    zipcode: ""
                };
        (props.contact.addresses = props.contact.addresses || []).push(inputState);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        event.preventDefault();
    }
    const handleRemoveAddress=(index,event)=>{
        console.log("on handleremoveaddress",index);
        props.contact.addresses.splice(index,1);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        console.log("Hero",contact);
        event.preventDefault();
    }

    const handleAddPhone=(event)=>{
        console.log("on handleaddphone",event);
        const inputState = {
            typeOfNumber: "",
            areaCode: "",
            pnumber: ""
        };
        (props.contact.phoneNumbers = props.contact.phoneNumbers || []).push(inputState);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        event.preventDefault();
    }
    const handleRemovePhone=(index,event)=>{
        console.log("on handleremovephone",index);
        props.contact.phoneNumbers.splice(index,1);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        event.preventDefault();
    }

    const handleAddDate=(event)=>{
        console.log("on handleadddate",event);
        const inputState = {
            typeOfDate: "",
            calenderDate: ""
        };
        (props.contact.dates = props.contact.dates || []).push(inputState);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        event.preventDefault();
    }
    const handleRemoveDate=(index,event)=>{
        console.log("on handleremovedate",index);
        props.contact.dates.splice(index,1);
        setContact(JSON.parse(JSON.stringify(props.contact)));
        event.preventDefault();
    }

    console.log("contact in render",props.contact);
  return (
    <div className="App">
    <Grid container spacing={3}>
        <Grid item xs={6} style={{textAlign: 'end'}}><h3>Contact Form</h3></Grid>
        <Grid item xs={6} style={{textAlign: 'end'}}><Link to="/">
            <Button variant="contained" color="primary">Home</Button>
        </Link>
        </Grid>
    <Grid item xs={12}><h5 className={classes.header}>Name</h5></Grid>
    <Grid item xs={1}>First Name</Grid>
    <Grid item xs={3}>
        <Input
          id="firstname"
          label="First Name"
          value={contact?.firstname}
          name="firstname"
          onChange={(event)=>handleChange(event)}
        />
    </Grid>
    <Grid item xs={1}>Middle Name</Grid>
    <Grid item xs={3}>
        <Input
            id="middlename"
            label="Middle Name"
            value={contact?.middlename}
            name="middlename"
            onChange={(event)=>handleChange(event)}
        />
    </Grid>
    <Grid item xs={1}>Last Name</Grid>
    <Grid item xs={3}>
        <Input
            id="lastname"
            label="Last Name"
            value={contact?.lastname}
            name="lastname"
            onChange={(event)=>handleChange(event)}
        />
    </Grid>
    <Grid item xs={3}></Grid>
    <Divider className={classes.divider}/>

    <Grid item xs={12}><h5 className={classes.header}>Address</h5></Grid>
        {contact?.addresses?.map((item,index)=>(<Grid container item xs={12} key={`item-${index}` } >
                <Grid item xs={3}>Type of Address</Grid>
                <Grid item xs={3}>
                    <Input
                        id="typeofaddress"
                        label="Type of Address"
                        value={item.typeofaddress}
                        onChange={(event)=>handleChangeAddress(index,event)}
                    />
                </Grid>
                <Grid item xs={3}>Street Address</Grid>
                <Grid item xs={3}>
                    <Input
                        id="streetaddress"
                        label="Street Address"
                        value={item.streetaddress}
                        onChange={(event)=>handleChangeAddress(index,event)}
                    />
                </Grid>
                <Grid item xs={3}>City</Grid>
                <Grid item xs={3}>
                    <Input
                        id="city"
                        label="City"
                        value={item.city}
                        onChange={(event)=>handleChangeAddress(index,event)}
                    />
                </Grid>
                <Grid item xs={3}>State</Grid>
                <Grid item xs={3}>
                    <Input
                        id="state"
                        label="State"
                        value={item.state}
                        onChange={(event)=>handleChangeAddress(index,event)}
                    />
                </Grid>
                <Grid item xs={3}>Zip Code</Grid>
                <Grid item xs={3}>
                    <Input
                        id="zipcode"
                        label="Zip Code"
                        value={item.zipcode}
                        onChange={(event)=>handleChangeAddress(index,event)}
                    />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}><IconButton aria-label="delete" onClick={(event)=>handleRemoveAddress(index,event)}>
                    <DeleteIcon />
                </IconButton></Grid>
                <Grid item xs={4}></Grid>
        </Grid>)
        )}
        <Grid item xs={12}><Button variant="outlined" color="primary" onClick={handleAddAddress}>Add Address</Button></Grid>
    <Divider className={classes.divider}/>

    <Grid item xs={12}><h5 className={classes.header}>Phone Numbers</h5></Grid>
        {contact?.phoneNumbers?.map((item,index)=>(<Grid container item xs={12} key={`item-${index}` }>
                <Grid item xs={2}>Type of Number</Grid>
                <Grid item xs={2}>
                    <Input
                        id="typeOfNumber"
                        label="Type of Number"
                        value={item.typeOfNumber}
                        onChange={(event)=>handleChangePhoneNumbers(index,event)}
                    />
                </Grid>
                <Grid item xs={2}>Area Code</Grid>
                <Grid item xs={2}>
                    <Input
                        id="areaCode"
                        label="Area Code"
                        value={item.areaCode}
                        onChange={(event)=>handleChangePhoneNumbers(index,event)}
                    />
                </Grid>
                <Grid item xs={2}>Phone Number</Grid>
                <Grid item xs={2}>
                    <Input
                        id="pnumber"
                        label="Phone Number"
                        value={item.pnumber}
                        onChange={(event)=>handleChangePhoneNumbers(index,event)}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}><IconButton aria-label="delete" onClick={(event)=>handleRemovePhone(index,event)}>
                    <DeleteIcon />
                </IconButton></Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        ))}
        <Grid item xs={12}><Button variant="outlined" color="primary" onClick={handleAddPhone}>Add Phone Number</Button></Grid>

    <Divider className={classes.divider}/>

    <Grid item xs={12}><h5 className={classes.header}>Dates</h5></Grid>
    {contact?.dates?.map((item,index)=>(<Grid container item xs={12} key={`item-${index}` }>
            <Grid item xs={3}>Type of Date</Grid>
            <Grid item xs={3}>
                <Input
                    id="typeOfDate"
                    label="Type of Date"
                    value={item.typeOfDate}
                    onChange={(event)=>handleChangeDates(index,event)}
                />
            </Grid>
            <Grid item xs={3}>Date</Grid>
            <Grid item xs={3}>
                <Input
                    id="calenderDate"
                    type="date"
                    label="Date"
                    value={item.calenderDate}
                    onChange={(event)=>handleChangeDates(index,event)}
                />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}><IconButton aria-label="delete" onClick={(event)=>handleRemoveDate(index,event)}>
                <DeleteIcon />
            </IconButton></Grid>
            <Grid item xs={4}></Grid>
            </Grid>
        ))}
        <Grid item xs={12}><Button variant="outlined" color="primary" onClick={handleAddDate}>Add Date</Button></Grid>
    <Divider className={classes.divider}/>
        <Grid item xs={12}><Button variant="contained" color="primary" onClick={props.handleSave}>Save</Button></Grid>
    </Grid>
    </div>
  );
}

export default ContactForm;
