package com.contact.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.contact.manager.entity.Contact;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {
    List<Contact> findByFirstnameAndLastname(String fname,String lname);
    List<Contact> findByFirstnameContainingOrLastnameContainingOrMiddlenameContaining(String firstname,String lastname,String middlename);
    List<Contact> findByAddressesTypeofaddressContainingOrAddressesStreetaddressContainingOrAddressesCityContainingOrAddressesStateContainingOrAddressesZipcodeContaining(String type,String street,String city,String state,String zip);
    List<Contact> findByPhoneNumbersTypeOfNumberContainingOrPhoneNumbersAreaCodeContainingOrPhoneNumbersPnumberContaining(String s,String area,String ph);
    List<Contact> findByDatesTypeOfDateContainingOrDatesCalenderDateContaining(String type,String date);

    /* List<Contact> findByAddressesStateLike(String s);

    List<Contact> findByAddressesZipcode(String s);

    @Transactional
    @Query("SELECT distinct(c) FROM Contact c, Address a WHERE c.firstname LIKE %:s% OR c.middlename LIKE %:s% " +
            "OR c.lastname LIKE %:s% OR a.typeofaddress LIKE %:s% OR a.streetaddress LIKE %:s% OR a.city LIKE %:s% OR a.state LIKE %:s%")
    List<Contact> findContact2(String s);

    @Transactional
    @Query("SELECT distinct(c) FROM Contact c, Address a WHERE c.addresses LIKE %:s% OR a.typeofaddress LIKE %:s% OR a.streetaddress LIKE %:s% OR a.city LIKE %:s% OR a.state LIKE %:s%")
    List<Contact> findContact(String s); */

}
