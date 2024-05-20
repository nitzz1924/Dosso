import React from 'react'
import { Container, Row, Col } from "reactstrap";

const Refundpolicy = () => {
    document.title = "Refund Policy";

    return (
        <div>
            <div className="page-content mb-3">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg="8" className="card p-4 rounded">
                            <h1 className='text-center'>Refund Policy</h1>
                            <p>At Dosso21, we prioritize customer satisfaction and strive to ensure that you are delighted with your purchases. However, we understand that occasionally circumstances arise where a refund may be necessary. We have outlined our refund policy below to guide you through this process.</p>

                            <h4>1. Eligibility for Refunds</h4>
                            <p>We offer refunds under the following circumstances:</p>
                            <ul>
                                <li>
                                    <strong>Product Defects:</strong> If the item you received is defective or damaged, you are eligible for a full refund or a replacement, provided you notify us within [number] days of receiving the product.
                                </li>
                                <li>
                                    <strong>Non-Delivery:</strong> If you have not received your purchased item within the specified delivery period, you may request a refund. Please allow a reasonable time frame for delivery before initiating the refund process.
                                </li>
                            </ul>

                            <h4>2. How to Request a Refund</h4>
                            <p>To request a refund, please follow these steps:</p>
                            <ul>
                                <li>Contact our customer support team at [contact email/phone number] within the specified time frame mentioned above.</li>
                                <li>Provide your order number and details of the issue, including any supporting evidence such as photographs of the defective product.</li>
                                <li>Our support team will assess your request and guide you through the refund process accordingly.</li>
                            </ul>

                            <h4>3. Refund Process</h4>
                            <p>Once your refund request is approved, we will initiate the refund process. The time it takes for the refunded amount to be credited to your account may vary depending on your payment method and financial institution. We will notify you via email once the refund has been processed.</p>

                            <h4>4. Exclusions</h4>
                            <p>Please note that certain items may not be eligible for refunds, including:</p>
                            <ul>
                                <li>Products that have been used, altered, or damaged by the customer.</li>
                                <li>Items returned without their original packaging or tags.</li>
                                <li>Digital products or services that have been accessed or used.</li>
                            </ul>

                            <h4>5. Contact Us</h4>
                            <p>If you have any questions or concerns regarding our refund policy, please feel free to contact us at [contact email/phone number]. Our customer support team is available to assist you and ensure your satisfaction.</p>

                            <h4>6. Policy Updates</h4>
                            <p>Dosso21 reserves the right to update or modify this refund policy at any time without prior notice. Any changes to the policy will be reflected on this page.</p>

                            <p>By making a purchase on Dosso21, you acknowledge and agree to abide by the terms of this refund policy.</p>

                            <p><strong>Last updated:</strong> 02/05/2024</p>

                            <p>Thank you for choosing Dosso21. We appreciate your trust in us.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Refundpolicy