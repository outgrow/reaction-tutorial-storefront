import React from "react";
import { mount } from "enzyme";
import Button from "@reactioncommerce/components/Button/v1";
import ErrorsBlock from "@reactioncommerce/components/ErrorsBlock/v1";
import Field from "@reactioncommerce/components/Field/v1";
import ContactForm from "./ContactForm";

test("expect fields to be rendered", () => {
  const wrapper = mount(<ContactForm />);

  expect(wrapper.find(Field).length).toEqual(4);
});

test("expect server error blocks to be rendered", () => {
  const wrapper = mount(
    <ContactForm
      serverErrors={[{
        name: "server",
        message: "This is an error."
      }]}
    />
  );

  expect(wrapper.find(ErrorsBlock).length).toEqual(5);
  expect(wrapper.find(ErrorsBlock).last().text()).toEqual("This is an error.");
});

test("expect success message to be shown when message sent", () => {
  const wrapper = mount(<ContactForm messageSent/>);

  expect(wrapper.find(Button).prop("disabled")).toEqual(true);
});
