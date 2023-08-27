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
    name: '',
    number: '',
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

  handleAddContact = () => {
    const { contacts, name, number } = this.state;

    // Виправлено використання змінних
    if (name.trim() !== '' && number.trim() !== '') {
      const existingContact = contacts.find(contact => contact.name === name);

      if (existingContact) {
        const updatedContacts = contacts.map(contact =>
          contact.name === name
            ? { ...contact, numbers: [...contact.numbers, number] }
            : contact
        );

        this.setState({
          contacts: updatedContacts,
          name: '',
          number: '',
        });
      } else {
        const newContact = {
          id: nanoid(),
          name,
          numbers: [number],
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
    const { contacts, name, number, searchContact } = this.state; // Оголошуємо searchContact тут

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase())
    );

    return (
      <Layuot>
        <InputName
          name={name}
          number={number}
          onChangeName={this.handleNameChange}
          onChangeNumber={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />

        <Contacts contactInfo={{ contacts: filteredContacts }} />
        <SearchField value={searchContact} onChange={this.handleSearchChange} />
        <GlobalStyle />
      </Layuot>
    );
  }
}
