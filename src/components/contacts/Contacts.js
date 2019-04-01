import React, { Fragment, Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // deleteContact = id => {
  //   const { contacts } = this.state;

  //   // Create a copy of the 'state contacts' object,
  //   // but filter out the contact where the id ISN'T the given id
  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({ contacts: newContacts });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  //deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
