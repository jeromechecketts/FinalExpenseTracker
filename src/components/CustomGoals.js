import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from "react";
// import { validateContactForm } from "../utils/validateContactForm";

const CustomGoals = ({ handleApptChange, handlePresentationChange, handleDoorKnockChange, handleHourChange, handleGoalsCancel }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        handleApptChange(values.appointments);
        handlePresentationChange(values.presentations);
        handleDoorKnockChange(values.doorKnocks);
        handleHourChange(values.hours);
        handleGoalsCancel();
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 10000); // show for 10 seconds
    };

    const getOptions = (numOptions) => {
        return [...Array(numOptions)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ));
      };

    return (
        <>
        <h1>Custom Goals</h1>
        {submitted ? (
            <div className="alert alert-success mt-3" role="alert">
                Your custom goals have been updated!
            </div>
        ) : (
            <Formik
                initialValues={{
                    appointments: '',
                    presentations: '',
                    doorKnocks: '',
                    hours: '',
                }}
                onSubmit={handleSubmit}
                // validate={validateContactForm}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor="appointments" md='2'>
                            Appointments
                        </Label>
                        <Col md='10'>
                            <Field 
                                className='form-control' 
                                name='appointments' 
                                as='select'
                                placeholder='Appointments'
                            >
                                <option value={''}>Select an Option</option>
                                {getOptions(30)}
                            </Field>
                            <ErrorMessage name='appointments'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="presentations" md='2'>
                            Presentations
                        </Label>
                        <Col md='10'>
                            <Field 
                                className='form-control' 
                                name='presentations'
                                as='select'
                                placeholder='Presentations'
                            >
                                <option value={''}>Select an Option</option>
                                {getOptions(20)}
                            </Field>
                            <ErrorMessage name='presentations'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="doorKnocks" md='2'>
                            Door Knocks
                        </Label>
                        <Col md='10'>
                            <Field 
                                className='form-control' 
                                name='doorKnocks'
                                as='select'
                                placeholder='Door Knocks'
                            >
                                <option value={''}>Select an Option</option>
                                {getOptions(40)}
                            </Field>
                            <ErrorMessage name='doorKnocks'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="hours" md='2'>
                            Hours
                        </Label>
                        <Col md='10'>
                            <Field 
                                className='form-control' 
                                name='hours'
                                as='select'
                                placeholder='Hours'
                            >
                                <option value={''}>Select an Option</option>
                                {getOptions(60)}
                            </Field>
                            <ErrorMessage name='hours'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2}} className='mb-3'>
                                <Button type="submit" color="primary" style={{ marginRight: '10px' }}>
                                    Submit
                                </Button>
                                <Button type='button' color='danger' onClick={handleGoalsCancel} style={{ marginRight: '10px', marginLeft: '10px' }}>
                                    Cancel
                                </Button>
                                <Button type="reset" color="secondary" style={{ marginLeft: '10px' }}>
                                    Reset
                                </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
            )}
        </>
    );
};

export default CustomGoals;