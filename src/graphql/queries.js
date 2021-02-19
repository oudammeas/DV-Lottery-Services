/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRelationship = /* GraphQL */ `
  query GetRelationship($id: ID!) {
    getRelationship(id: $id) {
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
export const listRelationships = /* GraphQL */ `
  query ListRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRelationships = /* GraphQL */ `
  query SyncRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        payment_amount
        payment_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        payment_amount
        payment_date
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
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
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEducations = /* GraphQL */ `
  query SyncEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPastEmployment = /* GraphQL */ `
  query GetPastEmployment($id: ID!) {
    getPastEmployment(id: $id) {
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
export const listPastEmployments = /* GraphQL */ `
  query ListPastEmployments(
    $filter: ModelPastEmploymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPastEmployments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPastEmployments = /* GraphQL */ `
  query SyncPastEmployments(
    $filter: ModelPastEmploymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPastEmployments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCurrentEmployment = /* GraphQL */ `
  query GetCurrentEmployment($id: ID!) {
    getCurrentEmployment(id: $id) {
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
export const listCurrentEmployments = /* GraphQL */ `
  query ListCurrentEmployments(
    $filter: ModelCurrentEmploymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurrentEmployments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCurrentEmployments = /* GraphQL */ `
  query SyncCurrentEmployments(
    $filter: ModelCurrentEmploymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCurrentEmployments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
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
export const syncCases = /* GraphQL */ `
  query SyncCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBilling = /* GraphQL */ `
  query GetBilling($id: ID!) {
    getBilling(id: $id) {
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
export const listBillings = /* GraphQL */ `
  query ListBillings(
    $filter: ModelBillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBillings = /* GraphQL */ `
  query SyncBillings(
    $filter: ModelBillingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBillings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCaseServices = /* GraphQL */ `
  query SyncCaseServices(
    $filter: ModelCaseServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCaseServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        caseID
        serviceID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
