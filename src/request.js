import axios from 'axios'
import commonStore from './stores/commonStore'
import { apiUrl } from './config'
import { apiPath } from './constant'

const requests = {
  get: (url, header = false) => {
    if (header) {
      return axios({
        method: `get`,
        url: `${apiUrl}${url}`,
        headers: {
          Pragma: 'no-cache',
          Authorization: `Bearer ${commonStore.token}`,
        },
      })
    }
    return axios({
      method: `get`,
      url: `${apiUrl}${url}`,
    })
  },
  post: (url, body, header = false) => {
    if (header) {
      return axios({
        method: `post`,
        url: `${apiUrl}${url}`,
        headers: {
          Authorization: `Bearer ${commonStore.token}`,
        },
        data: body,
      })
    }
    return axios({
      method: `post`,
      url: `${apiUrl}${url}`,
      data: body,
    })
  },
  delete: (url, header = false) => {
    if (header) {
      return axios({
        method: `delete`,
        url: `${apiUrl}${url}`,
        headers: {
          Authorization: `Bearer ${commonStore.token}`,
        },
      })
    }
    return axios({
      method: `delete`,
      url: `${apiUrl}${url}`,
    })
  },
  put: (url, body, header = false) => {
    if (header) {
      return axios({
        method: `put`,
        url: `${apiUrl}${url}`,
        headers: {
          Authorization: `Bearer ${commonStore.token}`,
        },
        data: body,
      })
    }
    if (body) {
      return axios({
        method: `put`,
        url: `${apiUrl}${url}`,
        data: body,
      })
    }
    return axios({
      method: `put`,
      url: `${apiUrl}${url}`,
    })
  },
}

// -------------- EXAMPLE ----------------------------------------
// const AuthRequest = {
//   changePassword: (token, newPassword) =>
//     requests.post(`${apiPath.API_RESET_PASSWORD}`, {
//       tokenId: token,
//       newPassword: newPassword,
//     }),
//   checkResetPasswordToken: token =>
//     requests.post(`${apiPath.API_RESET_PASSWORD_TOKEN}`, {
//       tokenId: token,
//     }),
//   login: (username, password) =>
//     requests.post(`${apiPath.API_LOGIN}`, {
//       username: username,
//       password: password,
//     }),
//   forgetPassword: email =>
//     requests.post(`${apiPath.API_FORGOT_PASSWORD}`, {
//       email: email,
//     }),
//   logout: () => requests.get(`${apiPath.API_LOGOUT}`, true),
// }

// const CompanyRequest = {
//   updateInfo: (id, body) => requests.put(`/api/company/${id}`, body, true),
//   getAll: params => requests.get(`/api/company${params}`, true),
//   create: body => requests.post(`/api/company`, body, true),
//   getBuyerDetail: buyerId => requests.get(`${apiPath.API_GET_BUYER_DETAIL}?buyerId=${buyerId}`, true),
//   updateBuyerDetail: (buyerId, body) => requests.put(`${apiPath.API_UPDATE_BUYER_DETAIL}${buyerId}`, body, true),
// }

// const FormRequest = {
//   createForm: data => requests.post(`${apiPath.API_BUYER_CREATE_FORM}`, data, true),
//   updateFormDetail: (formId, data) => requests.put(`${apiPath.API_BUYER_UPDATE_FORM}${formId}`, data, true),
//   deleteForm: formId => requests.delete(`${apiPath.API_DELETE_FORM}/${formId}`, true),
// }

// const SupportRequest = {
//   getContactBuyer: () => requests.get(`${apiPath.API_SUPPORT_GET_CONTACT_BUYER}`, true),
//   updateContact: (contactId, body) => requests.put(`${apiPath.API_SUPPORT_UPDATE_CONTACT}/${contactId}`, body, true),
//   createFaq: body => requests.post(`${apiPath.API_SUPPORT_CREATE_FAQ}`, body, true),
//   deleteFaq: faqId => requests.delete(`${apiPath.API_SUPPORT_DELETE_FAQ}/${faqId}`, true),
// }

// export {
//   AuthRequest,
//   CompanyRequest,
//   FormRequest,
//   SupportRequest,
// }

// -------------- EXAMPLE ----------------------------------------
