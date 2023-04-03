import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
// import { validateContactForm } from "../utils/validateContactForm";

import "react-datepicker/dist/react-datepicker.css";

const DailyStatForm = ({ handleStatsShow, handleApptProgress, handlePresentationProgress, handleDoorKnockProgress, handleHourProgress }) => {
    const [date, setDate] = useState(new Date());

    const handleSubmit = (values, { resetForm }) => {
        handleApptProgress(values.appointments);
        console.log('appointments: ', values.appointments);
        handlePresentationProgress(values.presentations);
        handleDoorKnockProgress(values.doorKnocks);
        handleHourProgress(values.hours);
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        handleStatsShow();
        resetForm();
    };

    const handleDateChange = (date) => {
        setDate(date);
    };

    const getOptions = (numOptions) => {
        return [...Array(numOptions)].map((_, i) => (
          <option key={i} value={i}>{i}</option>
        ));
      };

    return (
        <>
        <h1>Daily Stats</h1>
            <Formik
                initialValues={{
                    appointments: '',
                    presentations: '',
                    doorKnocks: '',
                    hours: '',
                    date
                }}
                onSubmit={handleSubmit}
                // validate={validateContactForm}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor="date" md='2'>
                            Date
                        </Label>
                        <Col md='10'>
                            <DatePicker 
                                selected={date}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy"
                                className="form-control"
                                id="date"
                                name="date"
                            />
                            <ErrorMessage name='date'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
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
                                {getOptions(15)}
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
                                {getOptions(10)}
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
                                {getOptions(20)}
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
                                {getOptions(14)}
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
                            <Button type="button" color="danger" onClick={handleStatsShow} style={{ marginLeft: '10px' }}>
                                Cancel
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </>
    );
};

export default DailyStatForm;