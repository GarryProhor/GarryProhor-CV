import React from 'react';

const Registration = () => {
    return (
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Регистрация</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">

                                    <input type="text" name="name" id="name" placeholder="Name"/>
                                </div>
                                <div className="form-group">

                                    <input type="email" name="email" id="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">

                                    <input type="password" name="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">

                                    <input type="password" name="re_pass" id="re_pass"
                                           placeholder="Repeat password"/>
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                           value="Зарегистрировать"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <a href="#" className="signup-image-link">У меня уже есть аккаунт</a>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Registration;