import React from "react";
import { withApollo } from "react-apollo";
import submitContactFormMutation from "./submitContactForm.gql";

export default (Component) => {
  @withApollo
  class SubmitContactForm extends React.Component {
    handleSubmitContactForm = (input) => {
      const { client: apolloClient } = this.props;

      return apolloClient.mutate({
        mutation: submitContactFormMutation,
        variables: {
          input
        }
      });
    };

    render() {
      return (
        <Component
          onSubmitContactForm={this.handleSubmitContactForm}
          {...this.props}
        />
      );
    }
  }

  return SubmitContactForm;
}
