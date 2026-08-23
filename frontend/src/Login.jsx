import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please enter your username and password.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#0f4c6d",
      });

      return;
    }

    setLoading(true);

    // Simple normal login
    if (username === "admin" && password === "1234") {
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login successful. Redirecting to your dashboard...",
        timer: 1500,
        showConfirmButton: false,
        background: "#ffffff",
        color: "#172033",
      }).then(() => {
        navigate("/home");
      });
    } else {
      setLoading(false);

      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Invalid username or password.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#0f4c6d",
        background: "#ffffff",
        color: "#172033",
      });
    }
  };

  return (
    <div className="login-page">
      {/* Background Glow */}
      <div className="login-glow glow-one"></div>
      <div className="login-glow glow-two"></div>

      <div className="container-fluid px-3 px-md-4">
        <div className="login-container">
          {/* ================= LEFT BRAND PANEL ================= */}

          <div className="brand-panel">
            <div className="brand-pattern"></div>

            <div className="brand-content">
              <div className="brand-icon">
                <FaBuilding />
              </div>

              <div className="brand-label">UMANG FINE</div>

              <h1 className="brand-title">
                INVESTMENT
                <br />
                <span>SOLUTIONS</span>
              </h1>

              <div className="premium-line"></div>

              <p className="brand-description">
                Smart. Secure. Reliable.
                <br />
                Managing your financial journey
                <br />
                with confidence.
              </p>

              <div className="security-badge">
                <FaShieldAlt />
                <span>SECURE ADMIN PORTAL</span>
              </div>

              <div className="brand-features mt-4">
                <div className="feature-item">
                  <FaCheckCircle />
                  <span>Secure Administration</span>
                </div>

                <div className="feature-item">
                  <FaCheckCircle />
                  <span>Reliable Financial Management</span>
                </div>

                <div className="feature-item">
                  <FaCheckCircle />
                  <span>Professional Dashboard Access</span>
                </div>
              </div>
            </div>

            <div className="brand-footer">
              © 2026 Umang Fine Investment Solutions
            </div>
          </div>

          {/* ================= LOGIN PANEL ================= */}

          <div className="login-card">
            <div className="login-content">
              {/* Header */}

              <div className="text-center mb-4">
                <div className="login-logo">
                  <span>RD</span>
                </div>

                <h2 className="login-title">Welcome Back</h2>

                <p className="login-subtitle">
                  Sign in to access your administration dashboard
                </p>
              </div>

              {/* Login Form */}

              <form onSubmit={login}>
                {/* Username */}

                <div className="mb-4">
                  <label className="premium-label">Username</label>

                  <div className="premium-input">
                    <FaUser className="input-icon" />

                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                    />
                  </div>
                </div>

                {/* Password */}

                <div className="mb-3">
                  <label className="premium-label">Password</label>

                  <div className="premium-input">
                    <FaLock className="input-icon" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Security Row */}

                <div className="security-row">
                  <div className="secure-status">
                    <FaShieldAlt />
                    <span>Protected & Secure</span>
                  </div>

                  <span className="admin-access">ADMIN ACCESS</span>
                </div>

                {/* Login Button */}

                <button
                  type="submit"
                  className="premium-login-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                      ></span>

                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Login Securely</span>

                      <span className="login-arrow">
                        <FaArrowRight />
                      </span>
                    </>
                  )}
                </button>
              </form>

              {/* Footer */}

              <div className="login-footer">
                <div className="footer-divider"></div>

                <div className="footer-brand">
                  <FaShieldAlt />
                  <span>UMANG FINE INVESTMENT SOLUTIONS</span>
                </div>

                <div className="footer-text">
                  Secure Banking Administration Portal
                </div>

                <div className="copyright">© 2026 All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
