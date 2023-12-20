import axios from "axios";
import { url } from "./onMobile";

async function addExpense(expenseType, amount, description, email, setTotal) {
  const expenseData = {
    expenseType,
    amount,
    description,
    email,
  };
  try {
    const response = await axios.post(`${url()}/home/addExpense`, expenseData);
    if (response.data.success) {
      setTotal(response.data.result.totalAmount);
      window.location.href = "/";
    }
  } catch (e) {
    console.log(e);
  }
}

export default addExpense;
