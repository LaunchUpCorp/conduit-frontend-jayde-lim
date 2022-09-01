import React from "react";
import InputForm from "./Form";
import {useState} from "react";
import axios from 'axios';


function AuthForm (props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const endpointApiUrl = process.env.REACT_APP_ENDPOINT_URL;

  async function submitData () {
    const data = {
      "user": {
      username,
      email,
      password
      }
    }

    const urlForUsers = endpointApiUrl.concat("/users")
  
    let register = await axios.post(urlForUsers, data)
    
    sessionStorage.setItem('jwt', register.data.user.token);
  }

  async function submitSignInData() {
    const data = {
      "user": {
      email,
      password
      }
    }
    const urlForLogIn = endpointApiUrl.concat("/users/login")
  
    let authentication = await axios.post(urlForLogIn, data)
    sessionStorage.setItem('jwt', authentication.data.user.token);
  }

  function onHandleChange (data) {
    switch (data.name) {
      case "Username":
        setUsername(data.value);
        break;
      
      case "Email":
        setEmail(data.value);
        break;

      case "Password":
        setPassword(data.value);
        break;

      default:
        throw new Error("please check handle change data. This data name is not supported by the AuthForm")
    }
  }

  return(
    <div>
      <div className="flex flex-col items-center justify-center py-4 pt-12">
        <p className="text-5xl font-light">{props.title}</p>
        <p className="text-[#5cb85c] pt-2 text-lg my-2">{props.subtitle}</p>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="flex flex-col w-[640px] gap-y-5">
          {
            props.fields.map((field, index) => {
              return <InputForm 
                        key={index}
                        fields={field} 
                        handleChange={onHandleChange}
                      />
            })
          }

          <button type="button" onClick={props.buttonText === "Sign In"? submitSignInData : submitData} className="bg-[#5cb85c] text-white h-16 w-36 rounded-md self-center sm:self-end text-xl">{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm