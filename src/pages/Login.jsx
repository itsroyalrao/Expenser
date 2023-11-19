function Login() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-[#202020]">
      <div className="w-full h-full flex flex-col items-center bg-white py-[5%] space-y-4">
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-[80%] flex flex-col space-y-1">
          <input type="email" className="w-full px-3 py-2 border-2 rounded-lg" placeholder="Email address" />
          <input type="email" className="w-full px-3 py-2 border-2 rounded-lg" placeholder="Password" />
          <div className="px-1 py-1 text-blue-400">Forgot password?</div>
          <div className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
