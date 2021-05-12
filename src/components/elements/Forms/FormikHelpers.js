import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik, useField, FormikProps, setNestedObjectValues } from 'formik'
import * as Yup from 'yup'
import './styles-custom.css'
import {
  Content,
  Button,
  ButtonToolbar,
  // Form as RsuiteForm,
  FormGroup,
  FlexboxGrid,
  ControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Thumb,
} from 'rsuite'
import { v4 as uuid } from 'uuid'

export const FileUpload = props => {
  const { field, form } = props

  const handleChange = e => {
    const file = e.currentTarget.files[0]
    // const reader = new FileReader()
    // const imgTag = document.getElementById('myfile')
    // imgTag.title = file.name
    // reader.onload = function (event) {
    //   imgTag.src = event.target.result
    // }
    // reader.readAsDataURL(file)
    // alert(field.name)
    form.setFieldValue(field.name, file)
  }

  // console.log(form)
  const value = field.value
  return (
    <div>
      <input type={'file'} onChange={o => handleChange(o)} className={'form-control'} />
      {/* <img src={''} alt="" id={'myfile'} /> */}
    </div>
  )
}

export const FieldFileView = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  console.log(field.name)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field {...field} {...props} type="file" component={FileUpload} />
    </div>
  )
}

export const FieldFileInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  // if (field.value == null) {
  //   field.value = ''
  // } // set field to empty string if null is provided

  // console.log(field)
  // console.log(props)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field {...field} {...props} type="file" component={FileUpload} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FieldView = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)

  const [field, meta] = useField(props)
  if (field.value == null) {
    field.value = ''
  } // set fiedl to empty string if null is provided

  return (
    <div className="form-group row">
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="col-sm-10">
        <input disabled className="text-input" {...field} {...props} />
      </div>
    </div>
  )
}

export const FieldTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta, helpers] = useField(props)
  if (field.value == null) {
    field.value = ''
  } // set fieLD to empty string if null is provided

  // console.log(meta)
  // console.log(helpers)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FieldCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  if (field.value == null) {
    field.value = ''
  } // set fiedl to empty string if null is provided
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FieldSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const DisplayFormikState = props => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}>
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)

export const MoreResources = props => (
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>
    <ul>
      <li>
        <a href="https://codesandbox.io/s/q8yRqQMp" target="_blank" rel="noopener">
          Synchronous validation
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io/s/qJR4ykJk" target="_blank" rel="noopener">
          Building your own custom inputs
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io/s/jRzE53pqR" target="_blank" rel="noopener">
          3rd-party input components: React-select
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io/s/QW1rqjBLl" target="_blank" rel="noopener">
          3rd-party input components: Draft.js
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io/s/pgD4DLypy" target="_blank" rel="noopener">
          Accessing Lifecyle Methods (resetting a form externally)
        </a>
      </li>
    </ul>
    <h3 style={{ marginTop: '1rem' }}>Additional Resources</h3>
    <ul>
      <li>
        <a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noopener">
          GitHub Repo
        </a>
      </li>
      <li>
        <a href="https://github.com/jaredpalmer/formik/issues" target="_blank" rel="noopener">
          Issues
        </a>
      </li>
      <li>
        <a href="https://twitter.com/jaredpalmer" target="_blank" rel="noopener">
          Twitter (@jaredpalmer)
        </a>
      </li>
    </ul>
  </div>
)
