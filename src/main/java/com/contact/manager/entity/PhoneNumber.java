package com.contact.manager.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="phone_number")
public class PhoneNumber implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Phone_id")
    private Integer phId;

    @Column(name = "Phone_type")
    private String typeOfNumber;

    @Column(name = "Area_code")
    private String areaCode;

    @Column(name = "Number")
    private String pnumber;
}
