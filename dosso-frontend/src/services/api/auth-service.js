import {
  getLocalData,
  removeLocalData,
  storeLocalData,
} from "../global-storage"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import config from "config/config"
const login = (username, password) => {
  // Create a new instance of axios
  const axiosInstance = axios.create()
  // Create a new instance of the mock adapter
  const mockAdapter = new MockAdapter(axiosInstance)
  return new Promise((resolve, reject) => {
    // Mock the HTTP request\
    const data = { username: username, password: password }
    console.log("Data : ", data)
    mockAdapter
      .onPost(config.apiUrl+"studentlogin")
      .reply(200, { success: true })
    axios
      .post(config.apiUrl+"studentlogin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log(
          "Login New Data : ",
          JSON.stringify(response.data.data.data.id)
        )
        storeLocalData("accessToken", response.data.data.data.id)
        storeLocalData("userId", response.data.data.data.id)
        storeLocalData("authUser", JSON.stringify(response.data.data.data.data))
        resolve(response.data.data.data.id)
        console.log("login User", response.data)
      })
      .catch(error => {
        // Handle errors here
        console.log("error->", error)
      })
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
  return new Promise((resolve, reject) => {})
}
const logout = () => {
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl+"studentlogout",{
      headers: {
        "Content-Type": "application/json",
      },
    },
      )
      .then(response => {
        console.log("logout")
        removeLocalData("accessToken")
        removeLocalData("authUser")
        removeLocalData("userId")
        removeLocalData("auth_token")
        resolve(response)
      })
      .catch(error => {
        console.error("Error logging out:", error)
      })
  })
}
export const authenticationService = {
  login,
  signup,
  logout,
}
