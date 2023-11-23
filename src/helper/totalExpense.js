import axios from "axios";

async function totalExpense(email, setTotal) {
  try {
    const response = await axios.get(
      `http://localhost:3000/home/totalExpense?email=${email}`
      // `https://expenser-backend-production.up.railway.app/home/totalExpense?email=${email}`,
    );
    setTotal(response.data.expense.totalAmount);
  } catch (e) {
    console.log(e);
  }
}

export default totalExpense;
