import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";

import MessageModal from "./../layouts/MessageModal";



import { Container, Grid, Label, Button, Checkbox, Form } from 'semantic-ui-react'
import UserService from "../services/userService";
export default function ProductAdd() {


  const [open, setOpen] = useState(false);

  let authService = new UserService();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    id: "",
    password: ""

  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),

  });
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    authService.addUser(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <Container className="content">
      <Headline content="Netaş Chat Sign up" />

      <Grid >
        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="10">
            
            <img src="data:image/png;base64,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"/>
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                  name="name"
                  label="Name"
                  onChange={(event, data) => handleChange("name", data.value)}
                  value={formik.values.name}
                />
                <Form.Input
                  name="lastName"
                  label="Last Name"
                  onChange={(event, data) => handleChange("lastName", data.value)}
                  value={formik.values.lastName}
                />

                <Form.Input
                  name="email"
                  label="Email"
                  onChange={(event, data) => handleChange("email", data.value)}
                  value={formik.values.email}
                />
                <Form.Input
                  name="id"
                  label="Id"
                  onChange={(event, data) => handleChange("id", data.value)}
                  value={formik.values.id}
                />
                <Form.Input
                  name="password"
                  label="Password"
                  onChange={(event, data) => handleChange("password", data.value)}
                  value={formik.values.password}
                />
             



                <Button circular fluid type="submit" color="silver" content="Sign In" />
                
              </Form>
            </Formik>
          </Grid.Column>
          <Grid.Column width="3" />
        </Grid.Row>
      </Grid>

      <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="An activation e-mail has been sent !" />
    </Container>
  )
}
