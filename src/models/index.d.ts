import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Service {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly cases?: (CaseService | null)[];
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
  readonly type?: string;
  readonly status?: string;
  readonly priority_date?: string;
  readonly customerID?: string;
  readonly CaseServices?: (CaseService | null)[];
  constructor(init: ModelInit<Case>);
  static copyOf(source: Case, mutator: (draft: MutableModel<Case>) => MutableModel<Case> | void): Case;
}

export declare class Relationship {
  readonly id: string;
  readonly type?: string;
  readonly dependent_id?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Relationship>);
  static copyOf(source: Relationship, mutator: (draft: MutableModel<Relationship>) => MutableModel<Relationship> | void): Relationship;
}

export declare class Payment {
  readonly id: string;
  readonly amount?: number;
  readonly date?: string;
  readonly customerID?: string;
  readonly Case?: Case;
  constructor(init: ModelInit<Payment>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

export declare class Education {
  readonly id: string;
  readonly degree?: string;
  readonly degree_file?: S3Object;
  readonly institution?: string;
  readonly date_start?: string;
  readonly date_end?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Education>);
  static copyOf(source: Education, mutator: (draft: MutableModel<Education>) => MutableModel<Education> | void): Education;
}

export declare class Employment {
  readonly id: string;
  readonly title?: string;
  readonly employer?: string;
  readonly date_start?: string;
  readonly date_end?: string;
  readonly customerID?: string;
  readonly current?: boolean;
  constructor(init: ModelInit<Employment>);
  static copyOf(source: Employment, mutator: (draft: MutableModel<Employment>) => MutableModel<Employment> | void): Employment;
}

export declare class Contact {
  readonly id: string;
  readonly email?: string;
  readonly phone_num?: string;
  readonly website?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

export declare class Billing {
  readonly id: string;
  readonly total?: number;
  readonly due_date?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Billing>);
  static copyOf(source: Billing, mutator: (draft: MutableModel<Billing>) => MutableModel<Billing> | void): Billing;
}

export declare class Address {
  readonly id: string;
  readonly street_1?: string;
  readonly street_2?: string;
  readonly commune?: string;
  readonly city?: string;
  readonly province?: string;
  readonly postal_code?: string;
  readonly country?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

export declare class Customer {
  readonly id: string;
  readonly firstname_kh?: string;
  readonly lastname_kh?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly date_of_birth?: string;
  readonly gender?: string;
  readonly driver_license_num?: string;
  readonly driver_license_file?: S3Object;
  readonly national_identification_num?: string;
  readonly national_identification_file?: S3Object;
  readonly passport_num?: string;
  readonly passport_file?: S3Object;
  readonly passport_issue_date?: string;
  readonly passport_expiration_date?: string;
  readonly marital_status?: string;
  readonly marriage_certificate_num?: string;
  readonly marriage_certificate_file?: S3Object;
  readonly number_of_dependent?: number;
  readonly Relationships?: (Relationship | null)[];
  readonly Payments?: (Payment | null)[];
  readonly Educations?: (Education | null)[];
  readonly Employments?: (Employment | null)[];
  readonly Contact?: (Contact | null)[];
  readonly Cases?: (Case | null)[];
  readonly Billings?: (Billing | null)[];
  readonly Addresses?: (Address | null)[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}