import Header from "../components/Header";

function Daily() {
  //   const [user, setUser] = useState(null);

  return (
    <>
      <div className="w-full min-h-[100svh] flex flex-col">
        <Header />
        <div className="grow bg-[#242424]"></div>
      </div>
    </>
  );
}

export default Daily;

// Home.propTypes = {
//   total: PropTypes.number,
//   setTotal: PropTypes.func,
// };
