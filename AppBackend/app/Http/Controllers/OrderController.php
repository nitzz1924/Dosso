<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\PhonePe;
class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        // Validate order details (product, amount, etc.)
        $orderData = $request->validate([
            'product_id' => 'required',
            'amount' => 'required|numeric',
        ]);

        // Generate a unique order ID
        $orderId = uniqid();

        // PhonePe configuration
        $phonepe = new PhonePe([
            'merchantId' => env('PHONEPE_MERCHANT_ID'),
            'merchantKey' => env('PHONEPE_MERCHANT_KEY'),
        ]);

        // Create transaction request
        $transactionRequest = [
            'orderId' => $orderId,
            'customerPhone' => $request->get('customer_phone'), // Optional (for pre-filled phone number)
            'amount' => $orderData['amount'] * 100, // Convert to paise
            'currency' => 'INR',
        ];

        try {
            $response = $phonepe->createTransaction($transactionRequest);

            // Store order details and transaction ID in the database
            $order = Order::create([
                'id' => $orderId,
                'product_id' => $orderData['product_id'],
                'amount' => $orderData['amount'],
                'transaction_id' => $response['transactionId'],
            ]);

            // Redirect to PhonePe checkout page
            return redirect($response['redirectUrl']);

        } catch (\Exception $e) {
            // Handle errors (log, display error message)
            return back()->withErrors(['message' => 'Payment processing failed.']);
        }
    }
}
