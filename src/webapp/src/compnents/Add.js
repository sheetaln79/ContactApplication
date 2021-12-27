import React,{useState,useEffect} from 'react';
import Main from './Main'
import history from '../history';
import {Button,Grid,Paper,TextField,Divider,TextareaAutosize} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from "react-router-dom";
// import data from '../data/data.json';
import ContactForm from './ContactForm';
import {deleteContact,getContactById,saveContact,updateContact} from '../services/ContactService';
import { withRouter } from 'react-router-dom';
import axios from "axios";
// import {Contact} from '../data/Contact';
const BASE_URL = 'http://localhost:8080';

const Add=(props) =>{

  const [contact,setContact] = useState({});

  useEffect(async () => {
    console.log("props.match",props.match.params.id);
    if(props.match.params.id) {
      const id = props.match?.params?.id;
      const result = await getContactById(id);
      /*fetch(`${BASE_URL}/contacts/${id}`)
          .then(res => res.json())
          .then(res => {
            console.log(res);
        setContact(res);
      }).catch(err => console.log(err))*/
      setContact(result);
    }

  },[])

  const handleChange=(contact)=>{
      console.log("on handlechnge",contact);
      setContact(JSON.parse(JSON.stringify(contact)));
  }

  const handleSave=async()=>{
    console.log("on handle save",contact)
    if(!contact.contactId){
      await saveContact(contact);
    }else{
      await updateContact(contact);
    }
    alert("Save Successful!");
  }

  console.log('Add.js rendered again with ' + contact);
  return (

    <div className="App">
        <ContactForm contact={contact} handleChange={handleChange} handleSave={handleSave}/>
    </div>
  );
}

export default withRouter(Add);
