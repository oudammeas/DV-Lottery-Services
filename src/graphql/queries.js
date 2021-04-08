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
        name
        price
        description
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
        name
        price
        description
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
export const listRelationships = /* GraphQL */ `
  query ListRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        type
        dependent_id
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        date
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
        amount
        date
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
      degree
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
        degree
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
        degree
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
export const getEmployment = /* GraphQL */ `
  query GetEmployment($id: ID!) {
    getEmployment(id: $id) {
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
export const listEmployments = /* GraphQL */ `
  query ListEmployments(
    $filter: ModelEmploymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEmployments = /* GraphQL */ `
  query SyncEmployments(
    $filter: ModelEmploymentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployments(
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
        current
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const getBilling = /* GraphQL */ `
  query GetBilling($id: ID!) {
    getBilling(id: $id) {
      id
      billing_balance
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
export const listBillings = /* GraphQL */ `
  query ListBillings(
    $filter: ModelBillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        billing_balance
        due_date
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
        billing_balance
        due_date
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
