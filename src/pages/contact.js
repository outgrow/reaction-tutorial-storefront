import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import ContactForm from "/custom/contact/ContactFormContainer";

@inject("routingStore", "uiStore")
@observer
class Contact extends Component {
  render() {
    return (
      <div>
        <Typography variant="title">Contact us</Typography>

        <ContactForm />
      </div>
    );
  }
}

export default Contact;
