import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import { ref, push, child, update } from "firebase/database";

const SignUp = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);



  const resetForm = () => {
    setEmail('')
    setUsername('')
    setPhone('')
    setPassword('')
    setConfirmPassword('')
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()
    try {
      let userObj = {
      email,
      username,
      phone,
      password,
      confirmPassword
    }

    const newPostKey = push(child(ref(database), 'posts')).key
    const updates = {}
    updates['/' + newPostKey] = userObj

    setSuccessMessage('Account created successfully!');
    resetForm()
    console.log(userObj)
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
    navigate('/')
    return update(ref(database), updates);
      
    } catch (error) {
      setError(true)
    }
    
  }

  return (
    <div className="signup mt-60 md:mt-32 pb-24 h- ">
      <h1 className="Create an account text-center text-black/90 text-2xl my-12">
        Create An Account
      </h1>

      {successMessage && (
        <div className="success w-1/2 mx-auto p-3 bg-brownish/70 text-center mb-3 text-black">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="success w-1/2 mx-auto p-3 border border-red-400 text-center mb-3 text-black">
          There was a problem, please try again later!
        </div>
      )}

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

        <div className="username-section mb-8">
          <label htmlFor="username" className="text-white">
            Username
          </label>
          <input
            type="text"
            required
            id="username"
            className="w-full p-2 rounded-sm focus:outline-0"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="email-section mb-8">
          <label htmlFor="email" className="text-white">
            Phone
          </label>
          <input
            type="tel"
            className="w-full p-2 rounded-sm focus:outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

        <div className="password-section mb-8">
          <label htmlFor="confirmpassword" className="text-white /70">
            Confirm Password
          </label>
          <input
            type="password"
            required
            id="confirmpassword"
            className="w-full p-2 rounded-sm focus:outline-0"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="btn-section mb-8">
          <button
            type="submit"
            className="bg-black/50 rounded-md tracking-wider font-bold w-1/2 mx-[20%]
              py-3 px-6 text-center hover:bg-black/90 hover:transition-all text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp