import {
  MainWrapper,
  InpuWrapper,
  Wrapper,
  InputLine,
  InputButton,
} from './InputName.styled';

export const InputName = ({ name, onChange, onAddContact }) => {
  const handleAddContact = () => {
    if (name.trim() !== '') {
      onAddContact(name);
    }
  };

  return (
    <MainWrapper>
      <h1>Phonebook</h1>
      <InpuWrapper>
        <Wrapper>
          <p>Name</p>
          <InputLine
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onChange}
          />
        </Wrapper>
        <InputButton type="button" onClick={handleAddContact}>
          Add contact
        </InputButton>
      </InpuWrapper>
    </MainWrapper>
  );
};
