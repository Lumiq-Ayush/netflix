import React, { useState} from "react";
import axios from "axios";
import Dasboard from "./Dashboard"

const LoginComponent = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [sucessFullyLogin, setSuccessfullyLogin] = useState();


  const onChange = (event, type) => {
    if (type === "PASS") {
      setPassword(event.target.value);
    } else if (type === "ID") {
      setId(event.target.value);
    }
  };

  const loginHandle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/login?id=${id}&password=${password}`
      );
      console.log(response.data);
      if (response.data.message === "Login Details Match") {
      setSuccessfullyLogin(true);
      }
      else{
        alert('ID and password are not valid')
        setSuccessfullyLogin(false);
      }
    } catch (error) {
      console.error("Get Response", error);
    }
  };
  
  return (
    
    <div>
    {sucessFullyLogin ? (<Dasboard />):(
      <div className="login-form" >
        <div className="login-header">
          <h3>
            Login to Your Account
          </h3>
          <p>
            Enter your username & password to login
          </p>
        </div>
        <table>
          <tbody>
            <tr >
              <td>Enter Your ID :</td>
              <td>
                <input className="login-input"
                  type="Number"
                  value={id}
                  onChange={(e) => onChange(e, "ID")}
                />
              </td>
            </tr>
            <tr>
              <td>Enter your Password:<span> </span></td>
              <td>
                <input className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => onChange(e, "PASS")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className = "login-button" type="button" onClick={loginHandle}>
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

export default LoginComponent;

