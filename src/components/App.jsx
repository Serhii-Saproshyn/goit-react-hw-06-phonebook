import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const includeName = contacts.find(user => user.name === name);

    if (includeName) {
      alert(`${name} уже есть в списке контактов`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handelChange = e => {
    dispatch(filterReducer(e));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handelChange} />
      <Contacts contacts={filterContacts} onDelete={handleDelete} />
    </div>
  );
};
