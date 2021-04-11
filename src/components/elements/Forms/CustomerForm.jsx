import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from 'formik'
import {
  MoreResources,
  DisplayFormikState,
  FieldCheckbox,
  FormFactory,
  FieldSelect,
  FieldTextInput,
  FieldView,
} from './FormikHelpers'
import { Form_Group } from './Forms'
import * as Yup from 'yup'
import { Button, FlexboxGrid, Form as RsuiteForm } from 'rsuite'
import { propStyle } from 'aws-amplify-react'
import { action } from 'mobx'

const FormView = () => {
  return (
    <div>
      <FieldView label="Firstname (KH)" name="firstname_kh" type="text" placeholder="" />
      <FieldView label="Lastname (KH)" name="lastname_kh" type="text" placeholder="" />
      <FieldView label="Firstname" name="firstname" type="text" placeholder="" />
      <FieldView label="Lastname" name="lastname" type="text" placeholder="" />
      <FieldView label="Date of Birth" name="date_of_birth" type="date" placeholder="" />
      <FieldView label="Gender" name="gender" placeholder="0" />
      <FieldView label="Marital Status" name="marital_status" type="text" placeholder="" />
      <FieldView label="Number of Dependent" name="number_of_dependent" type="number" placeholder="" />
      <FieldView label="Portrait File" name="portrait_file" type="file" placeholder="" />
      <FieldView label="Passport No." name="passport_num" type="text" placeholder="" />
      <FieldView label="Passport File" name="passport_file" type="file" placeholder="" />
      <FieldView label="Passport Issue Date" name="passport_issue_date" type="date" placeholder="" />
      <FieldView label="Passport Expiration Date" name="passport_expiration_date" type="date" placeholder="" />
      <FieldView label="National ID No." name="national_identification_num" type="text" placeholder="" />
      <FieldView label="National File" name="national_identification_file" type="file" placeholder="" />
      <FieldView label="Driver Licesne No." name="driver_license_num" type="text" placeholder="" />
      <FieldView label="Driver Licesne File" name="driver_license_file" type="file" placeholder="" />
      <FieldView label="Marriage Certificate No." name="marriage_certificate_num" type="text" placeholder="" />
      <FieldView label="Marriage Certificate File" name="marriage_certificate_file" type="file" placeholder="" />
    </div>
  )
}

const FormInput = () => {
  return (
    <div>
      <FieldTextInput label="Firstname (KH)" name="firstname_kh" type="text" placeholder="" />
      <FieldTextInput label="Lastname (KH)" name="lastname_kh" type="text" placeholder="" />
      <FieldTextInput label="Firstname" name="firstname" type="text" placeholder="" />
      <FieldTextInput label="Lastname" name="lastname" type="text" placeholder="" />
      <FieldTextInput label="Date of Birth" name="date_of_birth" type="date" placeholder="" />
      <FieldSelect label="Gender" name="gender" placeholder="">
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
    </div>
  )
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstname: Yup.string(),
    number_of_dependent: Yup.number().min(0),
  }),
  enableReinitialize: true,
  mapPropsToStatus: props => {
    return {
      edit: props?.edit || false,
    }
  },
  mapPropsToValues: props => props.model,
  mapValuesToPayload: x => x,
  handleSubmit: (payload, { props, ...actions }) => {
    setTimeout(function () {
      alert(JSON.stringify(payload, null, 2))
      actions.setSubmitting(false)
      props.updateModel(payload)
      actions.setStatus({
        edit: false,
      })
    }, 1000)
  },
  displayName: 'MyForm',
})

class MyForm extends React.Component {
  editOnClick = event => {
    event.preventDefault()
    const data = !this?.props?.status?.edit
    this.props.setStatus({
      edit: data,
    })
  }

  cancelOnClick = event => {
    event.preventDefault()
    this.props.resetForm()
    this.props.setStatus({
      edit: false,
    })
  }

  _renderAction() {
    return (
      <div className="form-statusbar">
        {this?.props?.status?.edit ? (
          <div>
            <Button appearance="primary" type="submit" form={this.props.form_id} style={{ marginBottom: '8px' }}>
              Save
            </Button>
            <Button appearance="ghost" onClick={this.cancelOnClick} style={{ marginBottom: '8px', marginLeft: '8px' }}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button appearance="ghost" onClick={this.editOnClick} style={{ marginBottom: '8px' }}>
            Edit
          </Button>
        )}
      </div>
    )
  }

  _renderFormView = () => {
    return <FormView />
  }

  _renderFormInput = () => {
    return <FormInput />
  }

  render() {
    // notice how touched will reset when the user changes
    // console.log(this.props.touched)
    return (
      <div>
        <h3>Personal Info</h3>
        <Form id={this.props.form_id}>
          {this._renderAction()}
          {this?.props?.status?.edit ? this._renderFormInput() : this._renderFormView()}
        </Form>
        {/* <h4>Current value</h4>
        <div>
          <pre>
            <code>{JSON.stringify(this.props.model, null, 2)}</code>
          </pre>
        </div> */}
      </div>
    )
  }
}

export const CustomerForm = formikEnhancer(MyForm)
