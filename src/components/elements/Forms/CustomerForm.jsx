import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from 'formik'
import { MoreResources, DisplayFormikState, FieldCheckbox, FieldSelect, FieldTextInput } from './FormikHelpers'
import * as Yup from 'yup'
import { Button, FlexboxGrid, Form as RsuiteForm } from 'rsuite'
import { propStyle } from 'aws-amplify-react'

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstname: Yup.string(),
  }),
  enableReinitialize: true,
  mapPropsToValues: props => props.model,
  mapValuesToPayload: x => x,
  handleSubmit: (payload, bag) => {
    setTimeout(function () {
      alert(JSON.stringify(payload, null, 2))
      bag.setSubmitting(false)
      bag.props.updateModel(payload)
    }, 1000)
  },
  displayName: 'MyForm',
})

class MyForm extends React.Component {
  render() {
    // notice how touched will reset when the user changes
    // console.log(this.props.touched)
    return (
      <div>
        <h3>Personal Info</h3>
        <Form>
          <FieldTextInput label="Firstname (KH)" name="firstname_kh" type="text" placeholder="" />
          <FieldTextInput label="Lastname (KH)" name="lastname_kh" type="text" placeholder="" />
          <FieldTextInput label="Firstname" name="firstname" type="text" placeholder="" />
          <FieldTextInput label="Lastname" name="lastname" type="text" placeholder="" />
          <FieldTextInput label="Date of Birth" name="date_of_birth" type="date" placeholder="" />
          <FieldSelect label="Gender" name="gender" placeholder="0">
            <option value="">--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </FieldSelect>
          <FieldSelect label="Marital Status" name="marital_status" type="text" placeholder="">
            <option value="">--</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </FieldSelect>
          <FieldTextInput label="Number of Dependent" name="number_of_dependent" type="number" placeholder="" />
          <FieldTextInput label="Portrait File" name="portrait_file" type="file" placeholder="" />
          <FieldTextInput label="Passport No." name="passport_num" type="text" placeholder="" />
          <FieldTextInput label="Passport File" name="passport_file" type="file" placeholder="" />
          <FieldTextInput label="Passport Issue Date" name="passport_issue_date" type="date" placeholder="" />
          <FieldTextInput label="Passport Expiration Date" name="passport_expiration_date" type="date" placeholder="" />
          <FieldTextInput label="National ID No." name="national_identification_num" type="text" placeholder="" />
          <FieldTextInput label="National File" name="national_identification_file" type="file" placeholder="" />
          <FieldTextInput label="Driver Licesne No." name="driver_license_num" type="text" placeholder="" />
          <FieldTextInput label="Driver Licesne File" name="driver_license_file" type="file" placeholder="" />
          <FieldTextInput label="Marriage Certificate No." name="marriage_certificate_num" type="text" placeholder="" />
          <FieldTextInput label="Marriage Certificate File" name="marriage_certificate_file" type="file" placeholder="" />
          <br />
          <Button type="reset" appearance="ghost">
            Reset
          </Button>{' '}
          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export const CustomerForm = formikEnhancer(MyForm)
