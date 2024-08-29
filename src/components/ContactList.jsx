import './ContactList.css';

function ContactList({ contacts, onDelete }) {
    return (
      <div>
        <ol className="ol-container">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div className="user-card">
                <p className="contact-list-name">
                  <i class="ri-user-fill"></i>
                  {contact.name}
                </p>
                <p className="contact-list-number">
                  <i class="ri-phone-fill"></i>
                  {contact.number}
                </p>
              </div>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    );
}
export default ContactList