import React from 'react';
import { Formik } from 'formik';


class FormikComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  initialValue = {
    firstName: '',
    phonenumber: '',
    email: '',
    points: '',
    comments: '',
  };

  validate = (value) => {
    var errors = {};
    if (value.firstName === '') errors.firstName = 'Required';
    if (value.phonenumber === '') errors.phonenumber = 'Required';
    if (value.email === '') errors.email = 'Required';
    if (value.points === '') errors.points = 'Required';
    return errors;
  };

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <h3> Feedback Form </h3>
        <Formik
          initialValues={this.initialValue}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label> First Name </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.firstName && errors.firstName}
                </span>
              </div>
              <br />
              <div>
                <label> Phone Number </label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={values.phonenumber}
                 // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.phonenumber && errors.phonenumber}
                </span>
              </div>
              <br />
              <div>
                <label> Email </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.email && errors.email}
                </span>
              </div>
              <br />
              <div>
                <label> Points </label>
                <input
                  type="radio"
                  name="points"
                  value="one"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                1
                <input
                  type="radio"
                  name="points"
                  value="two"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                2
                <input
                  type="radio"
                  name="points"
                  value="three"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                3
                <input
                  type="radio"
                  name="points"
                  value="four"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                4
                <input
                  type="radio"
                  name="points"
                  value="five"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                5
              </div>
              <br />
              <span style={{ color: 'red' }}>
                {touched.points && errors.points}
              </span>
              <div>
              <label>Comments</label>
                <textarea 
                name="comments" 
                value={values.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                >
                  

               

                </textarea>



               
              </div>
              <br />
              <button type="submit"> Submit </button> &nbsp;
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default FormikComponent;
