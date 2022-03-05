import React from 'react';

const Login = () => {

    const login = (e) =>{
        e.preventDefault()


        let  login = e.target.value;
        let password = e.target.value;

        if (login === "shahboz" && password === "123"){
            localStorage.setItem("logged", true);
            props.history.push()
        }
    }


    return (
        <div className="container">
            <div className="row vh-100 align-items-center">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <label>Login:</label>
                                <input type="text" className="form-control" placeholder="login" name="login"/>
                                <label>Password:</label>
                                <input type="password" className="form-control" placeholder="******" name="password"/>
                                <button type="submit" className="btn btn-success btn-block mt-3">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;