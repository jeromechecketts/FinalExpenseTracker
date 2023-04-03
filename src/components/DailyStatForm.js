import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { validateContactForm } from "../utils/validateContactForm";

const DailyStatForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    const getOptions = (numOptions) => {
        return [...Array(numOptions)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ));
      };

    return (
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
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default DailyStatForm;