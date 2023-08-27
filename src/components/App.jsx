import { GlobalStyle } from 'GlobalStyle';
import { Layuot } from 'Layout';
import { Component } from 'react';
import { Contacts } from './Contscts/Contscts';
import { InputName } from './Input/Input';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value });
  };

  handleAddContact = () => {
    const { contacts, name, number } = this.state;

    if (
      // Номер та ім'я не повинні бути порожні
      name.trim() !== '' &&
      number.trim() !== '' 
    ) {
      const existingContact = contacts.find(contact => contact.name === name);

      // Якщо контак з таким іменем є, то
      if (existingContact) {
        // Копіюємо масив контактів, замінюючи відповідний контакт
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
          id: nanoid(), // Генеруємо унікальний ID для нового контакту
          name,
          numbers: [number], // Кожний новий контакт має початковий номер
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
    const { contacts, name, number } = this.state;
    return (
      <Layuot>
        <InputName
          name={name}
          number={number}
          onChangeName={this.handleNameChange}
          onChangeNumber={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />

        <Contacts contactInfo={{ contacts }} />
        <GlobalStyle />
      </Layuot>
    );
  }
}
