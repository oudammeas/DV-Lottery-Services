/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
      id
      service_name
      service_price
      service_description
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
      id
      service_name
      service_price
      service_description
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
      id
      service_name
      service_price
      service_description
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
export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship {
    onCreateRelationship {
      id
      relationship_type
      relationship_dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship {
    onUpdateRelationship {
      id
      relationship_type
      relationship_dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship {
    onDeleteRelationship {
      id
      relationship_type
      relationship_dependent_id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment {
    onCreatePayment {
      id
      payment_amount
      payment_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        case_type
        case_status
        case_priority_date
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment {
    onUpdatePayment {
      id
      payment_amount
      payment_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        case_type
        case_status
        case_priority_date
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment {
    onDeletePayment {
      id
      payment_amount
      payment_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Case {
        id
        case_type
        case_status
        case_priority_date
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
      id
      education_degree
      degree_file
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
      id
      education_degree
      degree_file
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
      id
      education_degree
      degree_file
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
export const onCreatePastEmployment = /* GraphQL */ `
  subscription OnCreatePastEmployment {
    onCreatePastEmployment {
      id
      title
      employer
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
export const onUpdatePastEmployment = /* GraphQL */ `
  subscription OnUpdatePastEmployment {
    onUpdatePastEmployment {
      id
      title
      employer
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
export const onDeletePastEmployment = /* GraphQL */ `
  subscription OnDeletePastEmployment {
    onDeletePastEmployment {
      id
      title
      employer
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
export const onCreateCurrentEmployment = /* GraphQL */ `
  subscription OnCreateCurrentEmployment {
    onCreateCurrentEmployment {
      id
      title
      employer
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
export const onUpdateCurrentEmployment = /* GraphQL */ `
  subscription OnUpdateCurrentEmployment {
    onUpdateCurrentEmployment {
      id
      title
      employer
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
export const onDeleteCurrentEmployment = /* GraphQL */ `
  subscription OnDeleteCurrentEmployment {
    onDeleteCurrentEmployment {
      id
      title
      employer
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
      id
      contact_email
      contact_phone_num
      contact_website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
      id
      contact_email
      contact_phone_num
      contact_website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
      id
      contact_email
      contact_phone_num
      contact_website
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCase = /* GraphQL */ `
  subscription OnCreateCase {
    onCreateCase {
      id
      case_type
      case_status
      case_priority_date
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
export const onUpdateCase = /* GraphQL */ `
  subscription OnUpdateCase {
    onUpdateCase {
      id
      case_type
      case_status
      case_priority_date
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
export const onDeleteCase = /* GraphQL */ `
  subscription OnDeleteCase {
    onDeleteCase {
      id
      case_type
      case_status
      case_priority_date
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
export const onCreateBilling = /* GraphQL */ `
  subscription OnCreateBilling {
    onCreateBilling {
      id
      billing_current_balance
      billing_current_due_date
      billing_current_overdue_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBilling = /* GraphQL */ `
  subscription OnUpdateBilling {
    onUpdateBilling {
      id
      billing_current_balance
      billing_current_due_date
      billing_current_overdue_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBilling = /* GraphQL */ `
  subscription OnDeleteBilling {
    onDeleteBilling {
      id
      billing_current_balance
      billing_current_due_date
      billing_current_overdue_date
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file
      national_identification_num
      national_identification_file
      passport_num
      passport_file
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file
      number_of_dependent
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
      PastEmployments {
        nextToken
        startedAt
      }
      CurrentEmployments {
        nextToken
        startedAt
      }
      Contact {
        id
        contact_email
        contact_phone_num
        contact_website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      owner
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file
      national_identification_num
      national_identification_file
      passport_num
      passport_file
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file
      number_of_dependent
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
      PastEmployments {
        nextToken
        startedAt
      }
      CurrentEmployments {
        nextToken
        startedAt
      }
      Contact {
        id
        contact_email
        contact_phone_num
        contact_website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      owner
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
      id
      firstname_kh
      lastname_kh
      firstname
      lastname
      date_of_birth
      gender
      driver_license_num
      driver_license_file
      national_identification_num
      national_identification_file
      passport_num
      passport_file
      passport_issue_date
      passport_expiration_date
      marital_status
      marriage_certificate_num
      marriage_certificate_file
      number_of_dependent
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
      PastEmployments {
        nextToken
        startedAt
      }
      CurrentEmployments {
        nextToken
        startedAt
      }
      Contact {
        id
        contact_email
        contact_phone_num
        contact_website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      owner
    }
  }
`;
export const onCreateCaseService = /* GraphQL */ `
  subscription OnCreateCaseService {
    onCreateCaseService {
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
        service_name
        service_price
        service_description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        case_type
        case_status
        case_priority_date
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
export const onUpdateCaseService = /* GraphQL */ `
  subscription OnUpdateCaseService {
    onUpdateCaseService {
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
        service_name
        service_price
        service_description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        case_type
        case_status
        case_priority_date
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
export const onDeleteCaseService = /* GraphQL */ `
  subscription OnDeleteCaseService {
    onDeleteCaseService {
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
        service_name
        service_price
        service_description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      case {
        id
        case_type
        case_status
        case_priority_date
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
