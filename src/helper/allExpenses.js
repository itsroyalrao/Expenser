import axios from "axios";
import { url } from "./onMobile";

async function allExpenses(email, setExpenses, setLoading) {
  try {
    const response = await axios.get(
      `${url()}/home/allExpenses?email=${email}`
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
