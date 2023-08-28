import {
  MainWrapper,
  InputWrapper,
  Wrapper,
  InputLine,
  InputButton,
} from './Input.styled';
import { Component } from 'react';

export class InputName extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value });
  };

  handleAddContact = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;

    if (name.trim() !== '' && number.trim() !== '') {
      onAddContact(name, number);
      document.activeElement.blur();
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    const { onChangeName, onChangeNumber } = this.props;

    return (
      <MainWrapper>
        <InputWrapper>
          <Wrapper>
            <p>Name</p>
            <InputLine
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={evt => {
                this.handleNameChange(evt);
                onChangeName(evt);
              }}
            />
            <p>Number</p>
            <InputLine
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={evt => {
                this.handleNumberChange(evt);
                onChangeNumber(evt);
              }}
            />
          </Wrapper>
          <InputButton type="submit" onClick={this.handleAddContact}>
            Add contact
          </InputButton>
        </InputWrapper>
      </MainWrapper>
    );
  }
}