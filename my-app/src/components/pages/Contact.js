import React from "react";
import { useState } from 'react';
import { validateEmail} from "../../Utilities/helpers";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
        const {target} = e;
        const inputName = target.name;
        const inputValue = target.value;
        if (inputName === "name") {
            setName (inputValue)
        } else if (inputName === "email") {
            setEmail (inputValue)
        } else setMessage (inputValue)
       }

       const handleSubmit = (e) => {
           e.preventDefault() 
           
           //script to send email would go here.

           if (!validateEmail(email)) {
               window.alert("Please enter a valid email address.");
           } else { setName(""); setMessage(""); setEmail("");   
            window.alert("I will be in contact with you soon.");
        }
        }



    return (
<div className="md:container md:mx-auto">
<form class="w-full max-w-lg">
     <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Your Name
             </label>
      <input name="name" onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input name="email" onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
    
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea name="message" onChange={handleChange}  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
    
    </div>
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button onClick={handleSubmit} class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
</div>

)};

export default Contact;