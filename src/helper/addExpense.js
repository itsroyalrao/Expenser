import axios from "axios";

async function addExpense(expenseType, amount, description, email, setTotal) {
  console.log(expenseType, amount, description, email);
  const expenseData = {
    expenseType,
    amount,
    description,
    email,
  };
  try {
    const response = await axios.post(
      `http://localhost:3000/home/addExpense`,
      // `https://expenser-backend-production.up.railway.app/home/addExpense`,
      expenseData
    );
    setTotal(response.data.result.totalAmount);
  } catch (e) {
    console.log(e);
  }
}

export default addExpense;
