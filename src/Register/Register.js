import { ErrorMessage, Field, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import * as Yup from 'yup';
import "./Register.scss"

function Register() {
    const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const mouth = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",]
    const year = [2023, 2022, 2021, 2020, 2019]
    const [first, setfirst] = useState([])
    useEffect(() => { setfirst(day) }, [])
    const [ay, setay] = useState([])
    useEffect(() => { setay(mouth) }, [])
    const [old, setold] = useState([])
    useEffect(() => { setold(year) }, [])
    return (

            <Formik
                initialValues={{ firstName: '', lastName: "", number_mail: "" }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(25, 'Must be 15 characters or less')
                        .required(`senin adin nedir?`),
                    lastName: Yup.string()
                        .max(25, 'Must be 15 characters or less')
                        .required(`Soyadiniz nedir?.`),
                    number_mail: Yup.string()
                        .max(25, 'Must be 15 characters or less')
                        .required(`Daxil etdiyiniz e-poçt ünvani və ya mobil telefon nömrəsi heç bir hesabla əlaqəli deyil.`),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='Register_form'>
                    <div className='form_name'>
                        <div className='form_name_input'>
                        <Field name="firstName" type="text" placeholder='adiniz' className="input_name" />
                        <p className='p1'><ErrorMessage name="firstName" /></p>
                        </div>
                        
                        <div className='form_name_input'>
                        <Field name="lastName" type="text" placeholder='soyadiniz'  className="input_name"/>
                        <p><ErrorMessage name="lastName" /></p>
                        </div>
                        
                    </div>
                    <div className='register_mail'>
                        <Field name="number_mail" type="text" placeholder="Mobil telefon nömrəsi və ya e-poçt  ünvan" />
                        <p><ErrorMessage name="number_mail" /></p>
                    </div>
                    <div>
                        <p></p>
                        <div>
                            <div>
                                <select name='time'>
                                    {first.map((opt, i) => <option key={i}>{opt}</option>)}
                                </select>
                                <p><ErrorMessage name="time" /></p>
                            </div>
                            <div>
                                <select name='time'>
                                    {ay.map((opt, i) => <option key={i}>{opt}</option>)}
                                </select>
                                <p><ErrorMessage name="time" /></p>
                            </div>
                            <div>
                                <select name='time'>
                                    {old.map((opt, i) => <option key={i}>{opt}</option>)}
                                </select>
                                <p><ErrorMessage name="time" /></p>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>


    )
}

export default Register