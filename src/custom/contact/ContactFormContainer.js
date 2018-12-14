import React, { Component } from "react";
import withSubmitContactForm from "./withSubmitContactForm";
import ContactForm from "./ContactForm";

@withSubmitContactForm
class ContactFormContainer extends Component {
  constructor() {
    super();

    this.form = {};

    this.state = {
      messageSent: false,
      serverErrors: []
    };
  }

  handleSubmit = async () => {
    this.props.onSubmitContactForm(this.form.state.value)
      .then(({ data }) => {
        this.setState({
          messageSent: true,
          serverErrors: []
        });
      })
      .catch((e) => {
        this.setState({
          serverErrors: [{
            name: "server",
            message: "Sorry, an error happened behind the scenes. Our team is looking into it. Please retry later."
          }]
        });
      });
  };

  handleValidate = async (fields) => {
    const errors = [];

    if (!fields.email || !fields.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      errors.push({
        message: "E-mail needs to be a valid e-mail address.",
        name: "email"
      });
    }

    if (!fields.fullName || fields.fullName.length <= 0) {
      errors.push({
        message: "Full name is mandatory.",
        name: "fullName"
      });
    }

    if (!fields.message || fields.message.length <= 0) {
      errors.push({
        message: "Message is mandatory.",
        name: "message"
      });
    }

    return errors;
  };

  render() {
    return (
      <ContactForm
        messageSent={this.state.messageSent}
        onSetRef={(node) => { this.form = node; }}
        onSubmit={this.handleSubmit}
        onSubmitClick={() => { this.form.submit(); }}
        onValidate={this.handleValidate}
        serverErrors={this.state.serverErrors}
      />
    );
  }
}

export default ContactFormContainer;
