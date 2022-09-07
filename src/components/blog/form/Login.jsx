import React from 'react';

const Login = () => {
    return (
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title">Авторизация</h2>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <input type="text" name="your_name" id="your_name" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <input type="checkbox" name="remember-me" id="remember-me"*/}
                                {/*           className="agree-term"/>*/}
                                {/*    <label htmlFor="remember-me"*/}
                                {/*           className="label-agree-term"><span><span></span></span>Remember*/}
                                {/*        me</label>*/}
                                {/*</div>*/}
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                           value="Войти"/>
                                </div>
                                <div className="signin-image">
                                    <a href="#" className="signup-image-link">Создать аккаунт</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Login;