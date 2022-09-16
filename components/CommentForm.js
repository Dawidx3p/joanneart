import Link from 'next/link';
import { useState } from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import styles from '../styles/Home.module.scss';
import { createComment } from '../utils/api';

export default function CommentForm({id, refresh}){
    const [isSubmitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    
    const onSubmit = (values) => {
        setSubmitting(true)
        createComment({data:{id, text: values.text, author: values.name, likes: 0}}).then((comment) => {
            refresh()
            if(comment){
                setMessage('komentarz dodany')
            }
            setSubmitting(false);
        })
    }
    const initialValues  = {
        name: '',
        text: '',
    }
    return(
        <section id={styles.contactForm}>
            <Formik 
            initialValues={initialValues}
            validationSchema={yup.object({
                name: yup.string().required('Imię jest wymagane'),
                text: yup.string().required('Nic nie napisałeś w komentarzu'),
            })}
            onSubmit={onSubmit}
            >
                {() => <>
                <Form className={styles.commentForm}>
                    <ErrorMessage name="name">
                        {msg => <span className={styles.error}>{msg}</span>}
                    </ErrorMessage>
                    <label htmlFor='name'>Imię*</label>
                    <Field required autoComplete="name" name="name" type="text"/>
                    <ErrorMessage name="text">
                        {msg => <span className={styles.error}>{msg}</span>}
                    </ErrorMessage>
                    <label htmlFor='text'>Komentarz*</label>
                    <Field as="textarea" name="text" type="text" rows="5"/>
                    <Field name="submit" type="submit" value="Komentuj" disabled={isSubmitting}/>
                    {message}
                </Form>
                </>}
            </Formik>
            <span>* Pole wymagane</span>
    </section>
    )
}