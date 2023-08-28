import { GlobalStyle } from 'GlobalStyle';
import { Layuot } from 'Layout';
import { Component } from 'react';
import { Contacts } from './Contscts/Contscts';
import { InputName } from './Input/Input';
import { nanoid } from 'nanoid';
import { SearchField } from './SearchField/SearchField';

export class App extends Component {
  state = {
    contacts: [],

    searchContact: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value });
  };

  handleSearchChange = evt => {
    this.setState({ searchContact: evt.target.value });
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({
      contacts: updatedContacts,
    });
  };

  handleAddContact = () => {

    const { contacts, name, number } = this.state;

    if (name.trim() !== '' && number.trim() !== '') {
      const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingContact) {
        // Перевіряємо чи ім'я дублюється і виводимо алерт
        alert(`Контакт з іменем "${name}" вже існує. Введіть інше ім'я.`);
      } else {
        const newContact = {
          id: nanoid(),
          name,
          numbers: [number], // Початковий номер
        };

        this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
          name: '',
          number: '',
        }));
      }
    }
  };

  render() {
    const { contacts, name, number, searchContact } = this.state; 

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase())
    );

    return (
      <Layuot>
        <h1>Phonebook</h1>
        <InputName
          name={name}
          number={number}
          onChangeName={this.handleNameChange}
          onChangeNumber={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />
        <SearchField value={searchContact} onChange={this.handleSearchChange} />
        <h1>Contacts</h1>
        <Contacts
          contactInfo={{ contacts: filteredContacts }}
          onDeleteContact={this.handleDeleteContact}
        />
        <GlobalStyle />
      </Layuot>
    );
  }
}
