import React from 'react'

export default function Login() {
    return (
        <>
            <section className="dashboard-banner">
                <div className="container">
                    <div className="row">
                        <h1>MY Account</h1>
                    </div>
                </div>
            </section>
            <section className='login-form'>
                <div className="container">
                    <div className="row">
                        <h1>Login</h1>
                        <div className="login">
                            <form action="post">
                                <label htmlFor="Username">Username or email address *</label>
                                <input type="text" />
                                <label htmlFor=">Password">Password *</label>
                                <input type="text" />
                            </form>
                            <div>
                                <button> Log In </button>
                                <input type="checkbox" className='ms-3'/>
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                            <a href="#">Lost your password?</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
