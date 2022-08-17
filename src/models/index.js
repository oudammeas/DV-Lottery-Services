// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, CaseService, Case, Relationship, Payment, Education, Employment, Contact, Billing, Address, Customer, S3Object } = initSchema(schema);

export {
  Service,
  CaseService,
  Case,
  Relationship,
  Payment,
  Education,
  Employment,
  Contact,
  Billing,
  Address,
  Customer,
  S3Object
};