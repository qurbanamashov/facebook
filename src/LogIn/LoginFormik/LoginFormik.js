import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./LoginFormik.scss"

function LoginFormik() {
  return (
    <Formik
       initialValues={{ firstName: '', password: '',}}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(25, 'Must be 15 characters or less')
           .required(`Daxil etdiyiniz e-poçt ünvani və ya mobil telefon nömrəsi heç bir hesabla əlaqəli deyil.`),
         password: Yup.string()
           .max(30, 'Must be 20 characters or less')
           .required('Siz səhv parol daxil etmisiniz. Şifrəni unutmusan?'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form className='formik_singin'>
         <Field name="firstName" type="text" placeholder='E-poçt ünvani və ya telefon nömrəsi'/>
         <p><ErrorMessage name="firstName" /></p>
         

         <Field name="password" type="password"  placeholder='Parol'/>
         <p><ErrorMessage name="password" /></p>
         
         <button type="submit">Submit</button>
       </Form>
     </Formik>
  )
}

export default LoginFormik