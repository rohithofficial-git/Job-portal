import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    // For now, this is a placeholder action
    toast.success("Password reset link sent to your email! (mock)");
    setEmail("");
  };

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/careerconnect-black.png" alt="logo" />
            <h3>Reset your password</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <button type="submit" onClick={handleForgotPassword}>
              Send Reset Link
            </button>
            <Link to={"/login"}>Back to Login</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="forgot-password" />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
