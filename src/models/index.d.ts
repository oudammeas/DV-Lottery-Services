import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Service {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly cases?: (CaseService | null)[] | null;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

export declare class CaseService {
  readonly id: string;
  readonly case: Case;
  readonly service: Service;
  constructor(init: ModelInit<CaseService>);
  static copyOf(source: CaseService, mutator: (draft: MutableModel<CaseService>) => MutableModel<CaseService> | void): CaseService;
}

export declare class Case {
  readonly id: string;
  readonly type?: string | null;
  readonly status?: string | null;
  readonly priority_date?: string | null;
  readonly customerID?: string | null;
  readonly CaseServices?: (CaseService | null)[] | null;
  constructor(init: ModelInit<Case>);
  static copyOf(source: Case, mutator: (draft: MutableModel<Case>) => MutableModel<Case> | void): Case;
}

export declare class Relationship {
  readonly id: string;
  readonly type?: string | null;
  readonly dependent_id?: string | null;
  readonly customerID?: string | null;
  constructor(init: ModelInit<Relationship>);
  static copyOf(source: Relationship, mutator: (draft: MutableModel<Relationship>) => MutableModel<Relationship> | void): Relationship;
}

export declare class Payment {
  readonly id: string;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly customerID?: string | null;
  readonly Case?: Case | null;
  constructor(init: ModelInit<Payment>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

export declare class Education {
  readonly id: string;
  readonly degree?: string | null;
  readonly degree_file?: S3Object | null;
  readonly institution?: string | null;
  readonly date_start?: string | null;
  readonly date_end?: string | null;
  readonly customerID?: string | null;
  constructor(init: ModelInit<Education>);
  static copyOf(source: Education, mutator: (draft: MutableModel<Education>) => MutableModel<Education> | void): Education;
}

export declare class Employment {
  readonly id: string;
  readonly title?: string | null;
  readonly employer?: string | null;
  readonly date_start?: string | null;
  readonly date_end?: string | null;
  readonly customerID?: string | null;
  readonly current?: boolean | null;
  constructor(init: ModelInit<Employment>);
  static copyOf(source: Employment, mutator: (draft: MutableModel<Employment>) => MutableModel<Employment> | void): Employment;
}

export declare class Contact {
  readonly id: string;
  readonly email?: string | null;
  readonly phone_num?: string | null;
  readonly website?: string | null;
  readonly customerID?: string | null;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

export declare class Billing {
  readonly id: string;
  readonly total?: number | null;
  readonly due_date?: string | null;
  readonly customerID?: string | null;
  constructor(init: ModelInit<Billing>);
  static copyOf(source: Billing, mutator: (draft: MutableModel<Billing>) => MutableModel<Billing> | void): Billing;
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
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
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
  readonly Relationships?: (Relationship | null)[] | null;
  readonly Payments?: (Payment | null)[] | null;
  readonly Educations?: (Education | null)[] | null;
  readonly Employments?: (Employment | null)[] | null;
  readonly Contact?: (Contact | null)[] | null;
  readonly Cases?: (Case | null)[] | null;
  readonly Billings?: (Billing | null)[] | null;
  readonly Addresses?: (Address | null)[] | null;
  readonly portrait_file?: S3Object | null;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}