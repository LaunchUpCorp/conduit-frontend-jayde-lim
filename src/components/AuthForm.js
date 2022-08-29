import React from "react";
import InputForm from "./Form";
import {useState} from "react";
import axios from 'axios';

//let axios = require('axios');

function AuthForm (props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitData () {
    const data = {
      "user": {
      username,
      email,
      password
      }
    }

    let register = await axios.post('https://launchup-prisma.herokuapp.com/api/users', data)
    let tokenInfo = sessionStorage.setItem('jwt', register.data.user.token);
  }

  function onHandleChange (data) {
    if (data.name === "Username") {
      setUsername(data.value)
    } else if(data.name === "Email") {
      setEmail(data.value)
    } else {
      setPassword(data.value)
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
            props.fields.map(field => {
              return <InputForm 
                        fields={field} 
                        handleChange={onHandleChange}
                      />
            })
          }
          
          <button type="button" onClick={submitData} className="bg-[#5cb85c] text-white h-16 w-36 rounded-md self-center sm:self-end text-xl">{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm