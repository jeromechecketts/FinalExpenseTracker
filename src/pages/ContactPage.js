import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container className="mt-5">
            <Row className="row-content align-items-center">
                <Col sm='4'>
                    <h3>Our Address</h3>
                    <address>
                        300 E Davis St. #149
                        <br />
                        McKinney, TX 75069
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+18559330835'
                    >
                        <i className="fa fa-phone" /> 1-855-933-0835
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:Agency@cardinal.com'
                    >
                        <i className='fa fa-envelope-o' /> Agency@cardinal.com
                    </a>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs='12' className="mb-2 mt-5">
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;