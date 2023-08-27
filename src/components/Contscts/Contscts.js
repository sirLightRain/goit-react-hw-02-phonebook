import { Wrapper, ContactInfo, DeleteButton } from './Contscts.styled';

export const Contacts = ({ contactInfo: { contacts }, onDeleteContact }) => {
  return (
    <div>

      <Wrapper>
        {contacts.map(contact => (
          <ContactInfo key={contact.id}>
            - {contact.name}: {contact.numbers.join(', ')}
            <DeleteButton type="button" onClick={() => onDeleteContact(contact.id)}>
              DELETE
            </DeleteButton>
          </ContactInfo>
        ))}
      </Wrapper>
    </div>
  );
};
