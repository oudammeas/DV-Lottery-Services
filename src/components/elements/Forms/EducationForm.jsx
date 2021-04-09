import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from 'formik'
import { MoreResources, DisplayFormikState, FieldCheckbox, FieldSelect, FieldTextInput } from './FormikHelpers'
import * as Yup from 'yup'
import { Button, FlexboxGrid, Form as RsuiteForm } from 'rsuite'
import { propStyle } from 'aws-amplify-react'

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({}),
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
        <h3>Education</h3>
        <Form>
          <FieldTextInput label="Degree" name="degree" type="text" placeholder="" />
          <FieldTextInput label="Institution" name="institution" type="text" placeholder="" />
          <FieldTextInput label="Start Date" name="date_start" type="date" placeholder="" />
          <FieldTextInput label="Finish Date" name="date_end" type="date" placeholder="" />
          <FieldTextInput label="Upload Degree" name="degree_file" type="file" placeholder="" />
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

export const EducationForm = formikEnhancer(MyForm)
