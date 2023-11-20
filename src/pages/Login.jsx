import { Link } from "react-router-dom";

function Login() {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="w-full h-[100dvh] md:min-h-screen flex items-center justify-center bg-[#202020]">
      <div
        className={
          onMobile
            ? "w-full h-full flex flex-col items-center justify-center bg-white py-[10%] md:py-2 space-y-6"
            : "w-full sm:w-[80%] lg:w-[60%] h-full sm:h-[80%] flex flex-col items-center justify-center bg-white py-[10%] space-y-6 sm:space-y-12 sm:rounded-2xl"
        }
      >
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-full flex flex-col items-center sm:flex-row">
          <div className="w-full flex flex-col items-center pb-4">
            <div className="w-[80%] flex flex-col space-y-2">
              <div>
                <input
                  type="email"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                  placeholder="Email address"
                />
                <div className="flex justify-end px-1 text-blue-500 text-lg">
                  Forgot password?
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white text-xl">
                Login
              </div>
              {onMobile ? (
                <>
                  <div className="flex justify-center space-x-1">
                    <span>Don&apos;t you have an account?</span>
                    <Link to={"/signup"} className="font-bold text-green-600">
                      Signup
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lg flex justify-center space-x-1">
                    <span>Don&apos;t you have an account?</span>
                    <Link to={"/signup"} className="font-bold text-green-600">
                      Signup
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
