export const Contacts = ({ contactInfo: { contacts } }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}> - {contact}</li>
        ))}
      </ul>
    </div>
  );
};
