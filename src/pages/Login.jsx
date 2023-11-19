function Login() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-[#202020]">
      <div className="w-full h-full flex flex-col items-center bg-white py-[10%] space-y-6">
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-[80%] flex flex-col">
          <input type="email" className="w-full px-3 py-2 border-2 rounded-lg" placeholder="Email address" />
          <div className="flex justify-end px-1 text-blue-400">Forgot password?</div>
          <input type="email" className="w-full px-3 py-2 border-2 rounded-lg" placeholder="Password" />
          <div className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white mt-4">Login</div>
        </div>

        <hr className="w-[90%] border-t-2 border-gray-300" />

      </div>
    </div>
  );
}

export default Login;
