// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Payment, Case, Service, Billing, PastEmployment, CurrentEmployment, Education, Address, Dependent, Contact, Customer } = initSchema(schema);

export {
  Payment,
  Case,
  Service,
  Billing,
  PastEmployment,
  CurrentEmployment,
  Education,
  Address,
  Dependent,
  Contact,
  Customer
};