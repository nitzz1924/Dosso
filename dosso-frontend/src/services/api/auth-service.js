import {
  getLocalData,
  removeLocalData,
  storeLocalData,
} from "../global-storage"
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
const login = (username, password) => {
  // Create a new instance of axios
  const axiosInstance = axios.create();
  // Create a new instance of the mock adapter
  const mockAdapter = new MockAdapter(axiosInstance);
  return new Promise((resolve, reject) => {
    // Mock the HTTP request\
    const data = { 'username': username, 'password': password }
    mockAdapter.onPost('https://admin.dosso21.com/api/studentlogin').reply(200, { success: true });
    axios.post('https://admin.dosso21.com/api/studentlogin', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        storeLocalData("accessToken", response.data.id)
        storeLocalData("userId", response.data.userId)
        storeLocalData("authUser", JSON.stringify(response.data.user))
        resolve(response.data.id)
        console.log("login User", response.data)
      })
      .catch((error) => {
        // Handle errors here
        console.log("error->", error);
      });
  })
}
const signup = (
  contactName,
  contactNumber,
  password,
  email,
  username,
  isTermsAgreed,
  userType
) => {
  const data = {
    contactName,
    contactNumber,
    password,
    email,
    username,
    isTermsAgreed,
    userType,
  }
  //console.log(data)
  return new Promise((resolve, reject) => {

  })
}
const logout = () => {
  return new Promise((resolve, reject) => {

  })
}
export const authenticationService = {
  login,
  signup,
  logout,
}
