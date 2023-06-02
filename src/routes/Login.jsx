import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          console.log(error)
        })

    }

  return (
    <div className="mt-60 md:mt-32">
      <h1 className="text-center text-black/90 text-2xl my-12">Login</h1>
      <form
        onSubmit={handleFormSubmit}
        className="signup-form bg-brownish md:w-[30%] py-8 rounded-sm h-auto px-2 mx-auto
        flex flex-col justify-between shadow shadow-brownish/70"
      >
        <div className="email-section mb-8">
          <label htmlFor="email" className="text-white /70">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            className="w-full p-2 rounded-sm focus:outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-section mb-8">
          <label htmlFor="password" className="text-white /70">
            Password
          </label>
          <input
            type="password"
            required
            id="password"
            className="w-full p-2 rounded-sm focus:outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-section mb-8">
          <button
            type="submit"
            className="bg-black/50 rounded-md tracking-wider font-bold w-1/2 mx-[20%]
              py-3 px-6 text-center hover:bg-black/90 hover:transition-all text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login