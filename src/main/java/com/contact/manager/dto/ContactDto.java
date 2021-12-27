package com.contact.manager.dto;

import java.util.List;

import com.contact.manager.entity.Address;
import com.contact.manager.entity.Dates;
import com.contact.manager.entity.PhoneNumber;

import lombok.Data;

@Data
public class ContactDto {

	private int id;
    private String firstname;
    private String middlename;
    private String lastname;
    private List<Address> addresses;
    private List<PhoneNumber> phoneNumbers;
    private List<Dates> dates;
}
