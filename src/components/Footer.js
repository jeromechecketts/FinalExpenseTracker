import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="site-footer pt-3">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='3'>
                        <h5>Customer Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/companies'>Companies</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='4' sm='3'>
                        <h5>Agent Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/tracker'>Tracker</Link>
                            </li>
                            <li>
                                <Link to='/stats'>Stats</Link>
                            </li>
                            <li>
                                <Link to='/eapps'>Quoter / E-Apps</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='2' className="text-center">
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-linkedi'
                            href='https://www.linkedin.com/company/cardinal-senior-benefits/mycompany/'
                        >
                            <i className='fa fa-linkedin' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/cardinalseniorbenefits/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                    </Col>
                    <Col sm='3' className="text-center">
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-855-933-0835
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> Agency@cardinal.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;