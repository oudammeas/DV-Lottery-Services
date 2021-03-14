import React from 'react'
import PropTypes from 'prop-types'
import { Schema } from 'rsuite'
import {
  Content,
  Panel,
  Button,
  ButtonToolbar,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  RadioGroup,
  FlexboxGrid,
  Col,
  Divider,
  Icon,
  Timeline,
} from 'rsuite'

/// rsuite form stuff

/// form schema:

// const { StringType, NumberType, ArrayType, DateType, ObjectType, BooleanType } = Schema.Types
const { StringType, NumberType } = Schema.Types

// customerModel
const customerModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// contactModel
const contactModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// educationModel
const educationModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// permanentAddressModel
const permanentAddressModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// currentEmploymentModel
const currentEmploymentModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// pastEmploymentModel
const pastEmploymentModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

// billingModel
const billingModel = Schema.Model({
  firstname_kh: StringType().isRequired('This field is required.'),
  number_of_dependent: NumberType(),
})

export const form_group = [
  // customer
  {
    model: customerModel,
    name: 'customer',
    title: 'Biological Information',
    fields: [
      { name: 'firstname_kh', label: 'First Name (Khmer)', type: 'input' },
      { name: 'lastname_kh', label: 'Last Name (Khmer)', type: 'input' },
      { name: 'firstname', label: 'First Name (English)', type: 'input' },
      { name: 'lastname', label: 'Last Name (English)', type: 'input' },
      { name: 'date_of_birth', label: 'Date of Birth', type: 'date' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        selects: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
      },
      { name: 'marital_status', label: 'Marital Status', type: 'input' },
      { name: 'number_of_dependent', label: 'Number of Dependent', type: 'number' },
      { name: 'portrait', label: 'Photo Portrait', type: 'image', prop: 'width=48px height=48px' },
      { name: 'portrait_file', label: 'Upload Photo Portrait', type: 'file' },
      { name: 'passport_num', label: 'Passport No.', type: 'input' },
      { name: 'passport_file', label: 'Upload Passport', type: 'file' },
      { name: 'passport_issue_date', label: 'Issue Date', type: 'input' },
      { name: 'passport_expiration_date', label: 'Expiration Date', type: 'input' },
      { name: 'national_identification_num', label: 'National ID No.', type: 'input' },
      { name: 'national_identification_file', label: 'Upload National ID', type: 'file' },
      { name: 'driver_license_num', label: 'Driver License No.', type: 'input' },
      { name: 'driver_license_file', label: 'Upload Driver License', type: 'file' },
      { name: 'marriage_certificate_num', label: 'Marriage Certificate No.', type: 'input' },
      { name: 'marriage_certificate_file', label: 'Upload Marriage Certificate', type: 'file' },
    ],
  },
  // contact
  {
    model: contactModel,
    name: 'contact',
    title: 'Contact Information',
    fields: [
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone_num', label: 'Phone No.', type: 'tel' },
      { name: 'website', label: 'Website', type: 'string' },
    ],
  },
  // education
  {
    model: educationModel,
    name: 'education',
    title: 'Education Information',
    fields: [
      { name: 'degree', label: 'Highest Educational Level', type: 'input' },
      { name: 'degree_file', label: 'File', type: 'input' },
      { name: 'institution', label: 'Institution Name', type: 'input' },
      { name: 'date_start', label: 'Start Date', type: 'date' },
      { name: 'date_end', label: 'Graduation Date', type: 'date' },
    ],
  },
  // Permanent Address
  {
    model: permanentAddressModel,
    name: 'address',
    title: 'Address',
    fields: [
      { name: 'street_1', label: 'House No.', type: 'input' },
      { name: 'street_2', label: 'Village', type: 'input' },
      { name: 'commune', label: 'Commune', type: 'input' },
      { name: 'city', label: 'City', type: 'input' },
      { name: 'province', label: 'Province', type: 'input' },
      { name: 'postal_code', label: 'Post Code', type: 'input' },
      { name: 'country', label: 'Country', type: 'input' },
    ],
  },
  // Current Employment
  {
    model: currentEmploymentModel,
    name: 'currentEmployment',
    title: 'Current Employment',
    fields: [
      { name: 'title', label: 'Position', type: 'input' },
      { name: 'employer', label: 'Employer', type: 'input' },
      { name: 'date_start', label: 'Start Date', type: 'date' },
      { name: 'date_end', label: 'End Date', type: 'date' },
    ],
  },
  // Past Employment
  {
    model: pastEmploymentModel,
    name: 'pastEmployment',
    title: 'Current Employment',
    fields: [
      { name: 'title', label: 'Position', type: 'input' },
      { name: 'employer', label: 'Employer', type: 'input' },
      { name: 'date_start', label: 'Start Date', type: 'date' },
      { name: 'date_end', label: 'End Date', type: 'date' },
    ],
  },
  // Billing Information
  {
    model: billingModel,
    name: 'billing',
    title: 'Billing Information',
    fields: [
      { name: 'billing_balance', label: 'Blance', type: 'input' },
      { name: 'due_date', label: 'Employer', type: 'input' },
    ],
  },
]

export const TextField = props => {
  const { controlId, name, label, accepter, ...rest } = props
  return (
    <FormGroup controlId={controlId}>
      <ControlLabel>{label} </ControlLabel>
      <FormControl name={name} accepter={accepter} {...rest} />
    </FormGroup>
  )
}
