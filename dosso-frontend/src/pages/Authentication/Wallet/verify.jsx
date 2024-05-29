import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import MockAdapter from "axios-mock-adapter"
import { getLocalData } from 'services/global-storage'
import Swal from 'sweetalert2'
const Verify =() => {
    document.title = "Verification"
    const navigate = useNavigate()
    const location = useLocation()
    const paymentdata = location.state
    console.log(paymentdata);
    console.log(paymentdata.data.razorpay_payment_id);
     // Create a new instance of d
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })
  // Create a new instance of the mock adapter
  const mockAdapter = new MockAdapter(axiosInstance)
    useEffect(() => {
      const authuser = JSON.parse(getLocalData("authUser"));
      console.log(authuser.studentname);
      const dataList = [{
        playerId: getLocalData("userId"),
        amount: Number(paymentdata.amount)/10000,
        name: authuser.studentname,
        transactionid: paymentdata.data.razorpay_payment_id,
        paymentType : "Credit",
        transactiontype : "Razorpay",
      }];
        mockAdapter
          .onPost(config.apiUrl + "walletrecharge")
          .reply(200, { success: true })
        axios
          .post(config.apiUrl + "walletrecharge", dataList[0], {})
          .then(response => {
            console.log(JSON.stringify(response.data))
            Swal.fire("Great!", "Amount Added Successfully!", "success").then(
              () => {
                navigate("/myFund") // Redirect to '/other-page'
              }
            )
          })
          .catch(error => {
            // Handle errors here
            console.log("error->", error)
          })
    },[]) 
  return (
    <div>
      <h1>Payment Successfull..!!!!!</h1>
    </div>
  )
}
export default Verify;
