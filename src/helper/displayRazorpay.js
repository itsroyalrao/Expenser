import axios from "axios";

const loadRazorpay = async () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);
  script.onload = () => {
    console.log("Razorpay script loaded!");
  };
};

const displayRazorpay = async () => {
  if (window.Razorpay) {
    const response = await axios.get("http://localhost:3000/payment");
    const orderId = response.data.order.id;
    const amount = response.data.amount;

    const options = {
      key: "rzp_test_Ve5p1kxj1KyjSf",
      amount: amount,
      currency: "INR",
      name: "Xpenser",
      description: "Purchase description",
      image: "icons/expenses.png",
      order_id: response,
      handler: async function (response) {
        await axios.post("http://localhost:3000/payment", {
          status: "success",
          paymentId: response.razorpay_payment_id,
          orderId,
        });

        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } else {
    alert("Razorpay is not loaded yet. Please wait a moment and try again.");
  }
};

export { loadRazorpay, displayRazorpay };
