/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      name
      price
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cases {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      name
      price
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cases {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      name
      price
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cases {
        nextToken
        startedAt
      }
    }
  }
`;
export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $input: CreateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    createRelationship(input: $input, condition: $condition) {
      id
      type
      dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $input: UpdateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    updateRelationship(input: $input, condition: $condition) {
      id
      type
      dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $input: DeleteRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    deleteRelationship(input: $input, condition: $condition) {
      id
      type
      dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      amount
      date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      amount
      date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      amount
      date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
      id
      degree
      degree_file {
        bucket
        region
        key
      }
      institution
      date_start
      date_end
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
      id
      degree
      degree_file {
        bucket
        region
        key
      }
      institution
      date_start
      date_end
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
      id
      degree
      degree_file {
        bucket
        region
        key
      }
      institution
      date_start
      date_end
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createEmployment = /* GraphQL */ `
  mutation CreateEmployment(
    $input: CreateEmploymentInput!
    $condition: ModelEmploymentConditionInput
  ) {
    createEmployment(input: $input, condition: $condition) {
      id
      title
      employer
      date_start
      date_end
      customerID
      current
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployment = /* GraphQL */ `
  mutation UpdateEmployment(
    $input: UpdateEmploymentInput!
    $condition: ModelEmploymentConditionInput
  ) {
    updateEmployment(input: $input, condition: $condition) {
      id
      title
      employer
      date_start
      date_end
      customerID
      current
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployment = /* GraphQL */ `
  mutation DeleteEmployment(
    $input: DeleteEmploymentInput!
    $condition: ModelEmploymentConditionInput
  ) {
    deleteEmployment(input: $input, condition: $condition) {
      id
      title
      employer
      date_start
      date_end
      customerID
      current
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      email
      phone_num
      website
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      email
      phone_num
      website
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      email
      phone_num
      website
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
      id
      type
      status
      priority_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CaseServices {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
      id
      type
      status
      priority_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CaseServices {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
      id
      type
      status
      priority_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CaseServices {
        nextToken
        startedAt
      }
    }
  }
`;
export const createBilling = /* GraphQL */ `
  mutation CreateBilling(
    $input: CreateBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    createBilling(input: $input, condition: $condition) {
      id
      total
      due_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateBilling = /* GraphQL */ `
  mutation UpdateBilling(
    $input: UpdateBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    updateBilling(input: $input, condition: $condition) {
      id
      total
      due_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteBilling = /* GraphQL */ `
  mutation DeleteBilling(
    $input: DeleteBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    deleteBilling(input: $input, condition: $condition) {
      id
      total
      due_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      street_1
      street_2
      commune
      city
      province
      postal_code
      country
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      street_1
      street_2
      commune
      city
      province
      postal_code
      country
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      street_1
      street_2
      commune
      city
      province
      postal_code
      country
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file {
        bucket
        region
        key
      }
      national_identification_num
      national_identification_file {
        bucket
        region
        key
      }
      passport_num
      passport_file {
        bucket
        region
        key
      }
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file {
        bucket
        region
        key
      }
      number_of_dependent
      portrait_file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Relationships {
        nextToken
        startedAt
      }
      Payments {
        nextToken
        startedAt
      }
      Educations {
        nextToken
        startedAt
      }
      Employments {
        nextToken
        startedAt
      }
      Contact {
        nextToken
        startedAt
      }
      Cases {
        nextToken
        startedAt
      }
      Billings {
        nextToken
        startedAt
      }
      Addresses {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file {
        bucket
        region
        key
      }
      national_identification_num
      national_identification_file {
        bucket
        region
        key
      }
      passport_num
      passport_file {
        bucket
        region
        key
      }
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file {
        bucket
        region
        key
      }
      number_of_dependent
      portrait_file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Relationships {
        nextToken
        startedAt
      }
      Payments {
        nextToken
        startedAt
      }
      Educations {
        nextToken
        startedAt
      }
      Employments {
        nextToken
        startedAt
      }
      Contact {
        nextToken
        startedAt
      }
      Cases {
        nextToken
        startedAt
      }
      Billings {
        nextToken
        startedAt
      }
      Addresses {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file {
        bucket
        region
        key
      }
      national_identification_num
      national_identification_file {
        bucket
        region
        key
      }
      passport_num
      passport_file {
        bucket
        region
        key
      }
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file {
        bucket
        region
        key
      }
      number_of_dependent
      portrait_file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Relationships {
        nextToken
        startedAt
      }
      Payments {
        nextToken
        startedAt
      }
      Educations {
        nextToken
        startedAt
      }
      Employments {
        nextToken
        startedAt
      }
      Contact {
        nextToken
        startedAt
      }
      Cases {
        nextToken
        startedAt
      }
      Billings {
        nextToken
        startedAt
      }
      Addresses {
        nextToken
        startedAt
      }
    }
  }
`;
export const createCaseService = /* GraphQL */ `
  mutation CreateCaseService(
    $input: CreateCaseServiceInput!
    $condition: ModelCaseServiceConditionInput
  ) {
    createCaseService(input: $input, condition: $condition) {
      id
      caseID
      serviceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      service {
        id
        name
        price
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateCaseService = /* GraphQL */ `
  mutation UpdateCaseService(
    $input: UpdateCaseServiceInput!
    $condition: ModelCaseServiceConditionInput
  ) {
    updateCaseService(input: $input, condition: $condition) {
      id
      caseID
      serviceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      service {
        id
        name
        price
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteCaseService = /* GraphQL */ `
  mutation DeleteCaseService(
    $input: DeleteCaseServiceInput!
    $condition: ModelCaseServiceConditionInput
  ) {
    deleteCaseService(input: $input, condition: $condition) {
      id
      caseID
      serviceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      service {
        id
        name
        price
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        type
        status
        priority_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
