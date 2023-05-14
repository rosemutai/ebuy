
const SignUp = () => {
  return (
    <div className="signup">
      <h1 className="Create an account">
        <form className="signup-form">
          <div className="email-section">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="username-section">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>

          <div className="email-section">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>

          <div className="email-section">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>

          <div className="email-section">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
        </form>
      </h1>
    </div>
  );
}

export default SignUp