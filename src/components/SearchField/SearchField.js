import { Wrapper, InputLine } from './SearchField.styled';

export const SearchField = ({ value, onChange }) => {
  return (
    <Wrapper>
      <p>Find contacts by name</p>
      <InputLine
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </Wrapper>
  );
};
