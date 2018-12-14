import React from "react";
import { Form } from "reacto-form";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@reactioncommerce/components/Button/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import TextInput from "@reactioncommerce/components/TextInput/v1";

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

const ContactForm = ({ classes, messageSent, onSetRef, onSubmit, onSubmitClick, onValidate, serverErrors }) => (
  <Form
    ref={onSetRef}
    onSubmit={onSubmit}
    validator={onValidate}
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
      onClick={onSubmitClick}
      isDisabled={messageSent}
    >
      {messageSent ? "Thanks! We'll get back to you as soon as possible." : "Submit"}
    </Button>
    <ErrorsBlock names={["server"]} errors={serverErrors} />
  </Form>
);

export default withStyles(styles, { name: "SkContact" })(ContactForm);
