import axios from "axios";

async function allExpenses(email, setExpenses, setLoading) {
  try {
    const response = await axios.get(
      // `http://localhost:3000/home/allExpenses?email=${email}`
      `https://expenser-backend-production.up.railway.app/home/allExpenses?email=${email}`
    );

    if (response.data.success) {
      setExpenses(response.data.expense);
      setLoading(true);
    }
  } catch (e) {
    console.log(e);
  }
}

export default allExpenses;
