import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form } from "reacto-form";
import classNames from "classnames";
import Button from "@reactioncommerce/components/Button/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import withSubmitContactForm from "/custom/contact/withSubmitContactForm";

const styles = (theme) => ({
  twoColumns: {
    display: "flex",
    justifyContent: "space-between"
  },
  column: {
    width: "100%"
  },
  field: {
    padding: "0 .5rem"
  }
});

@withStyles(styles, { name: "SkContact" })
@withSubmitContactForm
@inject("routingStore", "uiStore")
@observer
class Contact extends Component {
  constructor() {
    super();

    this.form = {};

    this.state = {
      messageSent: false,
      serverErrorCaught: false
    };
  }

  handleSubmit = async () => {
    this.props.onSubmitContactForm(this.form.state.value)
      .then(({ data }) => {
        this.setState({
          messageSent: true,
          serverErrorCaught: false
        });
      })
      .catch((e) => {
        this.setState({ serverErrorCaught: true });
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
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="title">Contact us</Typography>

        <Form
          ref={(node) => { this.form = node; }}
          onSubmit={this.handleSubmit}
          validator={this.handleValidate}
        >
          <div className={classes.twoColumns}>
            <Field
              className={classNames([classes.column, classes.field])}
              name="fullName"
              label="Full Name"
              labelFor="full-name"
              isRequired
            >
              <TextInput id="full-name" name="fullName" />
              <ErrorsBlock names={["fullName"]} />
            </Field>
            <Field
              className={classNames([classes.column, classes.field])}
              name="email"
              label="E-mail Address"
              labelFor="email"
              type="email"
              isRequired
            >
              <TextInput id="email" name="email" />
              <ErrorsBlock names={["email"]} />
            </Field>
          </div>
          <Field className={classes.field} name="subject" label="Subject" labelFor="subject" isOptional>
            <TextInput id="subject" name="subject" />
            <ErrorsBlock names={["subject"]} />
          </Field>
          <Field className={classes.field} name="message" label="Message" labelFor="message">
            <TextInput id="message" name="message" isRequired shouldAllowLineBreaks />
            <ErrorsBlock names={["message"]} />
          </Field>
          <Button
            onClick={() => { this.form.submit(); }}
            isDisabled={this.state.messageSent}
          >
            {this.state.messageSent ? "Thanks! We'll get back to you as soon as possible." : "Submit"}
          </Button>
          {this.state.serverErrorCaught && <span>
            {"Sorry, an error happened behind the scenes. Our team is looking into it. Please retry later."}
          </span>}
        </Form>
      </div>
    );
  }
}

export default Contact;
