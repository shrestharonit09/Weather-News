import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Loginmodal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      props.onhandleSuccess();
      props.onClose();
    } else {
      toast.error("Invalid username or password");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    setPasswordError("");
    
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      toast.error("User already exists. Please login.");
    } else {
      const newUser = { username, password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("Sign up successful!");
      setIsSignUp(false);
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setPasswordError("");
    
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = storedUsers.findIndex((user) => user.username === username);

    if (userIndex !== -1) {
      storedUsers[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(storedUsers));
      toast.success("Password reset successful!");
      setIsForgotPassword(false);
      setNewPassword("");
      setConfirmPassword("");
      setUsername("");
      setPassword("");
    } else {
      toast.error("User not found");
    }
  };

  if (!props.isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-300 p-8 rounded-lg w-96 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-center w-full">
            {isSignUp ? "Sign Up" : isForgotPassword ? "Reset Password" : "Login"}
          </h2>
          <button className="text-3xl hover:text-red-600" onClick={props.onClose}>&times;</button>
        </div>
        {!isForgotPassword ? (
          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-600">{passwordError}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
        ) : (
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-600">{passwordError}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
              Reset Password
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          {!isForgotPassword && (
            <p>
              {isSignUp ? (
                <span>
                  Already have an account?{" "}
                  <button className="text-blue-500" onClick={() => setIsSignUp(false)}>
                    Login
                  </button>
                </span>
              ) : (
                <span>
                  Create Account?{" "}
                  <button className="text-blue-500" onClick={() => setIsSignUp(true)}>
                    Signup Now
                  </button>
                  <br />
                  
                  <button className="text-blue-500" onClick={() => setIsForgotPassword(true)}>
                  Forget Password?
                  </button>
                </span>
              )}
            </p>
          )}
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Loginmodal;
