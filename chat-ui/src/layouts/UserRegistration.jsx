import React from 'react'

import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import TextInput from "../utils/customFromControls/TextInput";



export default function UserRegistration() {
    const initialValues = { name: "", lastName: "" , email: "" , password: "" };

    const schema = Yup.object({
      name: Yup.string().required("Ad alanı boş bırakılamaz"),
      lastName: Yup.string().required("Soyad alanı boş bırakılamaz"),
      email: Yup.string().required("Email bilgisi zorunludur"),
      password: Yup.string().required("Lütfen şifre oluşturunuz")
     // unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    });
  
    return (
        
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit = {(values)=>{
            console.log(values)
        }}
        >
         
          <Form className="ui form" >
            <div>
                <img width="300" height="250"  src="https://www.btgunlugu.com/wp-content/uploads/2020/08/Logo.jpg"></img>
                <h1>

                </h1>
            </div>
            <TextInput name="name" placeholder="Kullanıcı adı"/>
            <TextInput name="lastName" placeholder="Kullanıcı Soyadı  "/>
            <TextInput name="email" placeholder="Email@Email.com  "/>
            <TextInput name="password" placeholder="Şifre  "/>
            <Button color="silver" type="submit">Kaydol</Button>
            
          </Form>
        </Formik>
    );
}
