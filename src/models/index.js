// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, CaseService, Case, Relationship, Payment, Education, PastEmployment, CurrentEmployment, Contact, Billing, Address, Customer } = initSchema(schema);

export {
  Service,
  CaseService,
  Case,
  Relationship,
  Payment,
  Education,
  PastEmployment,
  CurrentEmployment,
  Contact,
  Billing,
  Address,
  Customer
};