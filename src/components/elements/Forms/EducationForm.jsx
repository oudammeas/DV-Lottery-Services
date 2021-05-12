import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from 'formik'
import {
  MoreResources,
  DisplayFormikState,
  FieldCheckbox,
  FieldSelect,
  FieldTextInput,
  FieldView,
  FieldFileInput,
  FieldFileView,
} from './FormikHelpers'
import * as Yup from 'yup'
import { Button, FlexboxGrid, Form as RsuiteForm } from 'rsuite'
import { propStyle } from 'aws-amplify-react'

const FormView = () => {
  return (
    <div>
      <FieldView label="Degree" name="degree" type="text" placeholder="" />
      <FieldView label="Institution" name="institution" type="text" placeholder="" />
      <FieldView label="Start Date" name="date_start" type="date" placeholder="" />
      <FieldView label="Finish Date" name="date_end" type="date" placeholder="" />
      <FieldFileInput label="Upload Degree" name="degree_file" type="file" placeholder="" />
    </div>
  )
}

const FormInput = () => {
  return (
    <div>
      <FieldTextInput label="Degree" name="degree" type="text" placeholder="" />
      <FieldTextInput label="Institution" name="institution" type="text" placeholder="" />
      <FieldTextInput label="Start Date" name="date_start" type="date" placeholder="" />
      <FieldTextInput label="Finish Date" name="date_end" type="date" placeholder="" />
      <FieldFileInput label="Upload Degree" name="degree_file" type="file" placeholder="" />
    </div>
  )
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({}),
  enableReinitialize: true,
  mapPropsToStatus: props => {
    return {
      edit: props?.edit || false,
    }
  },
  validateOnChange: true,
  mapPropsToValues: props => props.model,
  mapValuesToPayload: x => x,
  handleSubmit: (payload, { props, ...actions }) => {
    // console.log(payload)
    setTimeout(function () {
      // alert(JSON.stringify(payload, null, 3))
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

  // handleAttachments = async ({ target }) => {
  //   this.setState({
  //     uploadError: '',
  //   })
  //   if (!target.files.length) {
  //     return false
  //   }

  //   try {
  //     const attachments = await Promise.all(
  //       // `files` is a FileList object - an "array-like" object, like NodeList, so we have to convert to an array before iteration
  //       Array.from(target.files).map(async (_, idx) =>
  //         // We need to retrieve the actual file item from the FilesList
  //         this.readAttachment(target.files.item(idx)),
  //       ),
  //     )

  //     this.setState({
  //       attachments,
  //     })
  //   } catch (e) {
  //     this.setState({
  //       uploadError: e,
  //     })
  //   }
  // }

  // readAttachment = async file => {
  //   const reader = new FileReader()

  //   return new Promise((res, rej) => {
  //     reader.onload = function () {
  //       const resultData = reader.result
  //       return res(resultData)
  //     }

  //     reader.onerror = function () {
  //       return rej('Oops! Error reading file: ', file.name)
  //     }

  //     reader.readAsDataURL(file)
  //   })
  // }

  render() {
    // notice how touched will reset when the user changes
    // console.log(this.props.touched)
    return (
      <div>
        <h3>Education Info</h3>
        <Form id={this.props.form_id}>
          {this._renderAction()}
          {this?.props?.status?.edit ? <div> {this._renderFormInput()}</div> : this._renderFormView()}
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

export const EducationForm = formikEnhancer(MyForm)
// ;<Formik>
//   {({ errors, touched, setFieldValue }) => (
//     <Form id={this.props.form_id}>
//       {this._renderAction()}
//       {this?.props?.status?.edit ? this._renderFormInput() : this._renderFormView()}
//     </Form>
//   )}
// </Formik>
