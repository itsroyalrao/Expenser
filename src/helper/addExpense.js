import axios from "axios";

async function addExpense(expenseType, amount, description, email, setTotal) {
  const expenseData = {
    expenseType,
    amount,
    description,
    email,
  };
  try {
    const response = await axios.post(
      // `http://localhost:3000/home/addExpense`,
      `https://expenser-backend-production.up.railway.app/home/addExpense`,
      expenseData
    );
    if (response.data.success) {
      setTotal(response.data.result.totalAmount);
      window.location.href = "/";
    }
  } catch (e) {
    console.log(e);
  }
}

export default addExpense;
