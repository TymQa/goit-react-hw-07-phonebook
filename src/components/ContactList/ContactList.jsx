import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation'; // Assuming this is your action creator
import { getContacts, getFilter } from 'redux/selector';

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    return contacts.items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    );
  };
  const contactsList = filterContacts();

  return (
    <ul className={css.list}>
      {contactsList.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li className={css.item} key={id}>
            <span className={css.name}>{name} :</span>
            <span className={css.nameNumber}>{phone}</span>
            <button className={css.delete_btn} type="button" onClick={() => handleDeleteContact(id)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
