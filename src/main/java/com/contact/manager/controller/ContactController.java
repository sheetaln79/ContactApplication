package com.contact.manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contact.manager.dto.ContactDto;
import com.contact.manager.entity.Contact;
import com.contact.manager.service.ContactService;

@RestController
@RequestMapping("/contacts")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact test(@RequestBody ContactDto contact){
        return  contactService.test(contact);
    }
    
    @GetMapping
    public List<Contact> fetchAllContact(){

    	return  contactService.fetchAllContact();
    }
    
    @PutMapping
    public Contact updateContact(@RequestBody Contact contact) {
    	return contactService.updateContact(contact);
    }
    
    @DeleteMapping("/{id}")
    public List<Contact> deleteContact(@PathVariable int id){
    	return contactService.deleteContactById(id);
    }
    
    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable int id){
    	return contactService.getContactById(id);
    }

    @GetMapping("/0/{search}")
    public List<Contact> getSearchContact(@PathVariable String search) {
        return contactService.findContact(search);
    }
}
