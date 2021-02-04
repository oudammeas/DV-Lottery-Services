import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Payment {
  readonly id: string;
  readonly payment_amount?: number;
  readonly payment_date?: string;
  readonly customerID: string;
  readonly Case?: Case;
  constructor(init: ModelInit<Payment>);
  static copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

export declare class Case {
  readonly id: string;
  readonly type?: string;
  readonly status?: string;
  readonly customerID: string;
  readonly Services?: (Service | null)[];
  constructor(init: ModelInit<Case>);
  static copyOf(source: Case, mutator: (draft: MutableModel<Case>) => MutableModel<Case> | void): Case;
}

export declare class Service {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly caseID: string;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

export declare class Billing {
  readonly id: string;
  readonly current_balance?: number;
  readonly current_due_date?: string;
  readonly current_overdraft_date?: string;
  constructor(init: ModelInit<Billing>);
  static copyOf(source: Billing, mutator: (draft: MutableModel<Billing>) => MutableModel<Billing> | void): Billing;
}

export declare class PastEmployment {
  readonly id: string;
  readonly title?: string;
  readonly employer?: string;
  readonly date_start?: string;
  readonly date_end?: string;
  readonly customerID: string;
  constructor(init: ModelInit<PastEmployment>);
  static copyOf(source: PastEmployment, mutator: (draft: MutableModel<PastEmployment>) => MutableModel<PastEmployment> | void): PastEmployment;
}

export declare class CurrentEmployment {
  readonly id: string;
  readonly title?: string;
  readonly employer?: string;
  readonly date_start?: string;
  readonly customerID: string;
  constructor(init: ModelInit<CurrentEmployment>);
  static copyOf(source: CurrentEmployment, mutator: (draft: MutableModel<CurrentEmployment>) => MutableModel<CurrentEmployment> | void): CurrentEmployment;
}

export declare class Education {
  readonly id: string;
  readonly degree?: string;
  readonly degree_file?: string;
  readonly institution?: string;
  readonly date_start?: string;
  readonly date_finish?: string;
  readonly customerID: string;
  constructor(init: ModelInit<Education>);
  static copyOf(source: Education, mutator: (draft: MutableModel<Education>) => MutableModel<Education> | void): Education;
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
  readonly customerID: string;
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

export declare class Dependent {
  readonly id: string;
  readonly type?: string;
  readonly dependent_id?: string;
  readonly customerID: string;
  constructor(init: ModelInit<Dependent>);
  static copyOf(source: Dependent, mutator: (draft: MutableModel<Dependent>) => MutableModel<Dependent> | void): Dependent;
}

export declare class Contact {
  readonly id: string;
  readonly email?: string;
  readonly password?: string;
  readonly phone_num?: string;
  readonly website?: string;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

export declare class Customer {
  readonly id: string;
  readonly firstname_kh?: string;
  readonly lastname_kh?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly date_of_birth?: string;
  readonly gender?: string;
  readonly portrait_file?: string;
  readonly driver_license_num?: string;
  readonly driver_license_file?: string;
  readonly number_of_dependent?: string;
  readonly national_identification_num?: string;
  readonly national_identification_file?: string;
  readonly passport_issue_date?: string;
  readonly passport_expiration_date?: string;
  readonly passport_file?: string;
  readonly marital_status?: string;
  readonly marriage_certificate_num?: string;
  readonly marriage_certificate_file?: string;
  readonly passport_num?: string;
  readonly Contact?: Contact;
  readonly Dependents?: (Dependent | null)[];
  readonly Addresses?: (Address | null)[];
  readonly Educations?: (Education | null)[];
  readonly CurrentEmployments?: (CurrentEmployment | null)[];
  readonly PastEmployments?: (PastEmployment | null)[];
  readonly Cases?: (Case | null)[];
  readonly Billing?: Billing;
  readonly Payments?: (Payment | null)[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}