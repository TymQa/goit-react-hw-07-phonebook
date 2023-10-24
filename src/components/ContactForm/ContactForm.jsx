import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerInputChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const alredyHas = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alredyHas) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name: name,
      phone: number,
    };

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handlerInputChange}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          onChange={handlerInputChange}
          type="tel"
          name="number"
          value={number}
          placeholder="380-9*-***-**-**"
        />
      </label>

      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
