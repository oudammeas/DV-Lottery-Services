// import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'
// import {
//   Content,
//   Button,
//   ButtonToolbar,
//   Form,
//   FlexboxGrid,
//   ControlLabel,
//   RadioGroup,
//   Radio,
//   FormControl,
//   FormGroup,
//   Divider,
// } from 'rsuite'
// import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem'
// import MainLayout from '../../layouts/MainLayout.js/MainLayout'
// import { useTranslation } from 'react-i18next'
// // import { useAuth0 } from '@auth0/auth0-react'
// import { Redirect, Switch, withRouter } from 'react-router'
// import { observer, inject } from 'mobx-react'
// import AuthenticatorPage from '../AuthenticatorPage'
// import JSONView from 'react-json-view'
// // Set up frontend
// import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
// import awsExports from '../../../aws-exports'
// import * as queries from '../../../graphql/queries'
// import * as mutations from '../../../graphql/mutations'
// import {
//   CustomerForm,
//   ContactForm,
//   EducationForm,
//   EmploymentForm,
//   AddressForm,
//   BillingForm,
//   TextField,
//   Form_Group,
//   FieldList,
//   FieldListInitial,
// } from '../../elements/Forms'

// function ProfileEdit(formName, model, updateModel) {
//   switch (formName) {
//     case 'customer':
//       return (
//         <div>
//           <FlexboxGrid justify="space-between">
//             <FlexboxGrid.Item colspan={7}>
//               <CustomerForm model={model} updateModel={updateModel} />
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </div>
//       )
//     case 'address':
//       return (
//         <div>
//           <FlexboxGrid justify="space-between">
//             <FlexboxGrid.Item colspan={7}>
//               <AddressForm model={model} updateModel={updateModel} />
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </div>
//       )
//     case 'education':
//       return (
//         <div>
//           <FlexboxGrid justify="space-between">
//             <FlexboxGrid.Item colspan={7}>
//               <EducationForm model={model} updateModel={updateModel} />
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </div>
//       )
//     case 'employment':
//       return (
//         <div>
//           <FlexboxGrid justify="space-between">
//             <FlexboxGrid.Item colspan={7}>
//               <EmploymentForm model={model} updateModel={updateModel} />
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </div>
//       )
//     case 'contact':
//       return (
//         <div>
//           <FlexboxGrid justify="space-between">
//             <FlexboxGrid.Item colspan={7}>
//               <ContactForm model={model} updateModel={updateModel} />
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </div>
//       )
//     default:
//       console.log('formName not provided')
//   }
// }

// export { ProfileEdit }
