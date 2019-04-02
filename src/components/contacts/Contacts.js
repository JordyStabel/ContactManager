import React, { Fragment, Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    // Call the mapped getContacts function which is the GET_CONTACTS from the reducer
    // Then automatically puts those contacts into the props of this component
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// Map the state from contact, which holds the contacts,
// to the props of this contacts component
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts } // Pass along the imported 'getContacts' function from contactsActions
)(Contacts);
