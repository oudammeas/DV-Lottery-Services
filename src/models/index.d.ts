import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CaseServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CaseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RelationshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EducationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmploymentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BillingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Service {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class CaseService {
  readonly id: string;
  readonly caseID: string;
  readonly serviceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CaseService, CaseServiceMetaData>);
  static copyOf(source: CaseService, mutator: (draft: MutableModel<CaseService, CaseServiceMetaData>) => MutableModel<CaseService, CaseServiceMetaData> | void): CaseService;
}

export declare class Case {
  readonly id: string;
  readonly type?: string | null;
  readonly status?: string | null;
  readonly priority_date?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Case, CaseMetaData>);
  static copyOf(source: Case, mutator: (draft: MutableModel<Case, CaseMetaData>) => MutableModel<Case, CaseMetaData> | void): Case;
}

export declare class Relationship {
  readonly id: string;
  readonly type?: string | null;
  readonly dependent_id?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Relationship, RelationshipMetaData>);
  static copyOf(source: Relationship, mutator: (draft: MutableModel<Relationship, RelationshipMetaData>) => MutableModel<Relationship, RelationshipMetaData> | void): Relationship;
}

export declare class Payment {
  readonly id: string;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Payment, PaymentMetaData>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment, PaymentMetaData>) => MutableModel<Payment, PaymentMetaData> | void): Payment;
}

export declare class Education {
  readonly id: string;
  readonly degree?: string | null;
  readonly degree_file?: S3Object | null;
  readonly institution?: string | null;
  readonly date_start?: string | null;
  readonly date_end?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Education, EducationMetaData>);
  static copyOf(source: Education, mutator: (draft: MutableModel<Education, EducationMetaData>) => MutableModel<Education, EducationMetaData> | void): Education;
}

export declare class Employment {
  readonly id: string;
  readonly title?: string | null;
  readonly employer?: string | null;
  readonly date_start?: string | null;
  readonly date_end?: string | null;
  readonly customerID?: string | null;
  readonly current?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Employment, EmploymentMetaData>);
  static copyOf(source: Employment, mutator: (draft: MutableModel<Employment, EmploymentMetaData>) => MutableModel<Employment, EmploymentMetaData> | void): Employment;
}

export declare class Contact {
  readonly id: string;
  readonly email?: string | null;
  readonly phone_num?: string | null;
  readonly website?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}

export declare class Billing {
  readonly id: string;
  readonly total?: number | null;
  readonly due_date?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Billing, BillingMetaData>);
  static copyOf(source: Billing, mutator: (draft: MutableModel<Billing, BillingMetaData>) => MutableModel<Billing, BillingMetaData> | void): Billing;
}

export declare class Address {
  readonly id: string;
  readonly street_1?: string | null;
  readonly street_2?: string | null;
  readonly commune?: string | null;
  readonly city?: string | null;
  readonly province?: string | null;
  readonly postal_code?: string | null;
  readonly country?: string | null;
  readonly customerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Customer {
  readonly id: string;
  readonly firstname_kh?: string | null;
  readonly lastname_kh?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly date_of_birth?: string | null;
  readonly gender?: string | null;
  readonly driver_license_num?: string | null;
  readonly driver_license_file?: S3Object | null;
  readonly national_identification_num?: string | null;
  readonly national_identification_file?: S3Object | null;
  readonly passport_num?: string | null;
  readonly passport_file?: S3Object | null;
  readonly passport_issue_date?: string | null;
  readonly passport_expiration_date?: string | null;
  readonly marital_status?: string | null;
  readonly marriage_certificate_num?: string | null;
  readonly marriage_certificate_file?: S3Object | null;
  readonly number_of_dependent?: number | null;
  readonly portrait_file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}