import { GlobalStyle } from 'GlobalStyle';
import { Layuot } from 'Layout';
import { Component } from 'react';
import { Contacts } from './Contscts/Contscts';
import { InputName } from './InputName/InputName';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleAddContact = () => {
    const { contacts, name } = this.state;

    if (name.trim() !== '' && !contacts.includes(name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, name],
        name: '',
      }));
    }
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <Layuot>
        <InputName
          name={name}
          onChange={this.handleNameChange}
          onAddContact={this.handleAddContact}
        />
        <Contacts contactInfo={{ contacts }} />
        <GlobalStyle />
      </Layuot>
    );
  }
}
