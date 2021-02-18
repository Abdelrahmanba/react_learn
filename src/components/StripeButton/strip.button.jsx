import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const publicKey = "pk_test_51IMJu0L3a5xA2cqCuuP58ORXcKzydG2feFps4exl5Li9K6larlQrdetnaVU6qV2zx2o8j5eHiGC5vNhlWVZNiwIN00aANEh4rF"
    const priceInCents = price * 100;
    return (
        <StripeCheckOut label="CHECKOUT" shippingAddress billingAddress amount={priceInCents} stripeKey={publicKey} />
    )

}

export default StripeCheckoutButton;