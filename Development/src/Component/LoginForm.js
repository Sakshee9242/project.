import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { Userlogin } from "../App";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Banner from "./Banner";

function LoginForm() {
  const data = {
    name: "Login",
  };
  const { setloginuser, setlogoutuser } = useContext(Userlogin);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({});
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let validation = {};

    if (email !== "" && password !== "") {
      axios.get("http://localhost:4000/users").then((data) => {
        data.data.map((v) => {
          if (v.email == email) {
            if (v.password == password) {
              setlogoutuser(true);

              toast.success("Login Successfull", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });

              setloginuser(v.name);

              setTimeout(() => {
                navigate("/");
              }, 6100);
            }
          }
        });
      });
    }

    if (email == "") {
      validation.email = "Enter Email";
    }
    if (password == "") {
      validation.password = "Enter Password";
    }

    seterrors(validation);
  };
  return (
    <div>
      <Banner myData={data} />
      <div className="Signup p-3">
        <div className="Container">
          <div className="row justify-content-center">
            <div className="col col-lg-4 text-start">
                <div>
                    <h3 className="text-center">Login</h3>
                    <form action="" className="form" onSubmit={handlesubmit}>
                      <div>
                        <label>Email*</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                        <span> {errors.email} </span>
                      </div>
                      <div>
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                        />
                        <span> {errors.password} </span>
                      </div>
                      <div className="text-center">                          
                      <input
                        type="submit"
                        className="btn btn-dark w-100 mt-3"
                        id="signin"
                        value={"Login"}
                      />
                      </div>
                    </form>
                    <div className="text-center mt-2">                       
                    <Link to='/register'>Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
  );
}

export default LoginForm;
