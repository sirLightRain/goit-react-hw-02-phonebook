export const Contacts = ({ contactInfo: { contacts } }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.numbers.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};
