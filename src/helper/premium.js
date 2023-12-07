import axios from "axios";

// const user = localStorage.getItem("user");

const loadRazorpay = async () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);
  // script.onload = () => {
  //   console.log("Razorpay script loaded!");
  // };
};

const displayRazorpay = async (setPremiumStatus) => {
  try {
    if (window.Razorpay) {
      const response = await axios.get(
        "http://localhost:3000/payment"
        // "https://expenser-backend-production.up.railway.app/payment"
      );
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
          await axios.post(
            // "http://localhost:3000/payment",
            "https://expenser-backend-production.up.railway.app/payment",
            {
              user: "a",
              status: "success",
              paymentId: response.razorpay_payment_id,
              orderId,
            }
          );

          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
          await getPremiumStatus(setPremiumStatus);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Razorpay is not loaded yet. Please wait a moment and try again.");
    }
  } catch (e) {
    console.log(e);
  }
};

const getPremiumStatus = async (setPremiumStatus) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/payment/status?user=${"a"}`
      `https://expenser-backend-production.up.railway.app/payment/status?user=${"a"}`
    );

    if (response.data.success) {
      setPremiumStatus("Show Leaderboard");
    } else {
      setPremiumStatus("Upgrade");
    }
  } catch (e) {
    console.log(e);
  }
};

export { loadRazorpay, displayRazorpay, getPremiumStatus };
