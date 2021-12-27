import React,{useEffect,useState} from 'react';
import SearchAppBar from './search'
import EnhancedTable from './Table';
import {deleteContact, getContact, searchContact} from '../services/ContactService';
import {useHistory} from 'react-router-dom';

const Main=() =>{
  const [data,setData]=useState([]);
  const [search,setSearch]=useState("");
  let history = useHistory();
  
  useEffect(async()=>{
    const contact = await getContact();
    // console.log("got result",contact);
    setData(contact);
  },[])

  const handleEdit = async(id,event) =>{
    // console.log("handle edit",id,event.target);
    history.push(`/add/${id}`);
  }
  const handleDelete = async(id,event) =>{
    // console.log("handle delete",id,event.target);
    const result = id && await deleteContact(id);
    alert("Delete Successful!");
    result && setData(result);
  }

  const handleSearch = async(event) => {
    const contact = await searchContact(search);
    setData(contact);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
       <SearchAppBar handleSearch={handleSearch} handleChange={handleChange} search={search}/>
       <EnhancedTable handleEdit={handleEdit} handleDelete={handleDelete} data={data}/>
      </header>
    </div>
  );
}

export default Main;
