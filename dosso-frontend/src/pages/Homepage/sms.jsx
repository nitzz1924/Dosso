import React from 'react';
import axios from 'axios';
function sendSms() {
    const url = 'https://sms.jaipursmshub.in/api_v2/message/send';
    const data = {
        sender_id: 'DOSSOS',
        mobile_no: '6375475956',
        dlt_template_id: '1207171714044829349',
        message: 'Welcome to Dosso21! Use 235321 to complete your registration. This code is valid for 10 minutes.\n Dosso21 Services Private Limited'
    };

    axios.post(url, new URLSearchParams(data), {
        headers: {
            'Authorization': 'Bearer o9eYsyt3_musEsKcMTobrfvWl3Eies0LyieQfvKXW_iuRPtnCZEwC7nh3H3Rf7XC',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const Sms = () => {
    return (
        <div className='page-content'>
            <button onClick={sendSms}>Send SMS</button>
        </div>
    );
}

export default Sms;
