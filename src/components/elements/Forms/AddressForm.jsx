import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from 'formik'
import { MoreResources, DisplayFormikState, FieldCheckbox, FieldSelect, FieldTextInput, FieldView } from './FormikHelpers'
import * as Yup from 'yup'
import { Button, FlexboxGrid, Form as RsuiteForm } from 'rsuite'
import { propStyle } from 'aws-amplify-react'

const FormView = () => {
  return (
    <div>
      <FieldView label="House No." name="street_1" type="text" placeholder="" />
      <FieldView label="Village" name="street_2" type="text" placeholder="" />
      <FieldView label="Commune" name="commune" type="text" placeholder="" />
      <FieldView label="City" name="city" type="text" placeholder="" />
      <FieldView label="Province" name="province" type="text" placeholder="" />
      <FieldView label="Postal Code" name="postal_code" type="text" placeholder="" />
      <FieldView label="Country" name="country" type="text" placeholder="" />
    </div>
  )
}

const FormInput = () => {
  return (
    <div>
      <FieldTextInput label="House No." name="street_1" type="text" placeholder="" />
      <FieldTextInput label="Village" name="street_2" type="text" placeholder="" />
      <FieldTextInput label="Commune" name="commune" type="text" placeholder="" />
      <FieldTextInput label="City" name="city" type="text" placeholder="" />
      <FieldTextInput label="Province" name="province" type="text" placeholder="" />
      <FieldTextInput label="Postal Code" name="postal_code" type="text" placeholder="" />
      <FieldTextInput label="Country" name="country" type="text" placeholder="" />
    </div>
  )
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    street_1: Yup.string(),
    street_2: Yup.string(),
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
        <h3>Address Info</h3>
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

export const AddressForm = formikEnhancer(MyForm)
