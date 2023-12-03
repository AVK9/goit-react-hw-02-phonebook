import { Component } from 'react';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'

export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  formSubmitHandler = data => {
    const { name, number } = data;
    console.log('data :>> ', data);


    // this.setState.contacts.push({ data });

        this.setState(prev => (
      prev.contacts.push(data)
    ));

  }

  render() {
  
    return (
      <>
        <Title text="Phonebook" />
        <ContactForm onSubmit={this.formSubmitHandler}
        />
        <Title text="Contacts" />
        <ContactList contacts={this.state.contacts}
        />
      </>
    )
  };
};

