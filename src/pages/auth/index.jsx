import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [phone, setPhone] = useState("+998 ");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.startsWith("998")) {
            value = "+998 " + value.slice(3);
        } else {
            value = "+998 " + value;
        }
        if (value.length <= 17) {
            setPhone(value);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Login formasi yuborildi.");
        } else {
            console.log("Ro'yxatdan o'tish formasi yuborildi.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-toggle">
                <button
                    onClick={() => setIsLogin(true)}
                    className={isLogin ? "active" : ""}
                >
                    Email orqali
                </button>
                <p>|</p>
                <button
                    onClick={() => setIsLogin(false)}
                    className={!isLogin ? "active" : ""}
                >
                    Tel raqam orqali
                </button>
            </div>

            <div className="form-container">
                <h2>{isLogin ? "Kirish" : "Kirish"}</h2>
                <form onSubmit={handleSubmit}>
                    {isLogin ? (
                        <>
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Parol</label>
                                <div className="password-input-container">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="icon-btn" />
                                        ) : (
                                            <FaEye className="icon-btn" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="input-group">
                                <label>Tel raqam </label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="phone-input"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Parol</label>
                                <div className="password-input-container">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="icon-btn" />
                                        ) : (
                                            <FaEye className="icon-btn" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    <button className="register" type="submit">
                        {isLogin ? "Kirish" : "Kirish"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
