export const validateContactForm = (values) => {
    const { firstName, lastName, phoneNum, email } = values;
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.'
    } else if (firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less.'
    }

    if (!lastName) {
        errors.lastName = 'Required';
    } else if (lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.'
    } else if (lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less.'
    }

    const reg = /^\d+$/;

    if (!reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.'
    } else if (phoneNum.length < 10) {
        errors.phoneNum = 'Phone number must contain at least 10 digits (Area Code) + 7 digit number'
    } else if (phoneNum.length > 15) {
        errors.phoneNum = 'Phone number length is too long.  Recheck number, shouldn\'t be more than 15 digits (MAX (includes Intl Call Code))'
    }

    if (!email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};