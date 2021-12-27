package com.contact.manager.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="contact")
public class Contact implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Contact_id")
    private Integer contactId;

    @Column(name = "Fname")
    private String firstname;

    @Column(name = "Mname")
    private String middlename;

    @Column(name = "Lname")
    private String lastname;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Address> addresses = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private List<PhoneNumber> phoneNumbers = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private List<Dates> dates= new ArrayList<>();

    

}
