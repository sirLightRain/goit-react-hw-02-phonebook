import {
  MainWrapper,
  InputWrapper,
  Wrapper,
  InputLine,
  InputButton,
} from './Input.styled';

export const InputName = ({
  name,
  number,
  onChangeName,
  onChangeNumber,
  onAddContact,
}) => {
  const handleAddContact = () => {
    if (name.trim() !== '' && number.trim() !== '') {
      onAddContact(name);
      // Зняти фокус після кліку
      document.activeElement.blur();
    }
  };

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
            onChange={onChangeName}
          />
          <p>Number</p>
          <InputLine
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChangeNumber}
          />
        </Wrapper>
        <InputButton type="button" onClick={handleAddContact}>
          Add contact
        </InputButton>
      </InputWrapper>
    </MainWrapper>
  );
};
