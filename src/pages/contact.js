import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form } from "reacto-form";
import classNames from "classnames";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = (themes) => ({
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
@inject("routingStore", "uiStore")
@observer
class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="title">Contact us</Typography>

        <Form onSubmit={this.handleSubmit}>
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
        </Form>
      </div>
    );
  }
}

export default Contact;
