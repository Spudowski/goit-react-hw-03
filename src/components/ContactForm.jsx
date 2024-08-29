import './ContactForm.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

function ContactForm({ addContact }) {

    const validationSchema = Yup.object({
      name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required!"),
      number: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required!"),
    });

    const initailValues = {
        name: '',
        number: ''
    }

    return (
        <Formik
            initialValues={initailValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                addContact(values);
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="number">Phone number</label>
                        <Field type="text" id="number" name="number" />
                        <ErrorMessage name="number" component="div" className="error" />
                    </div>

                    <button type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    );
};
export default ContactForm