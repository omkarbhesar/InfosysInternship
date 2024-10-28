
import './Registration.css'; // Import your CSS file

const Registration = () => {
  

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Registration</h2>
        <form >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            
            required
          />
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
           
            required
          />
          
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            placeholder="Enter your mobile number"
            
            required
          />
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            
            required
          />
          
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            
            required
          />
          
          <button type="submit" id='signup'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;