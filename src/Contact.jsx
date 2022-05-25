import React,{useRef} from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';


const Contact = () => {
    const[fullName,setFullName]= useState("")
    const[email,setEmail]= useState("")
    const[number,setNumber]= useState("")
    const[message,setMessage]= useState("")




    const form = useRef();
    const sendEmail = (event) => {



    
        emailjs.sendForm('service_3n3gsf6', 'template_uhdwjgq', form.current, 'wf5K8lh0x-lr8tX1p')
          .then((result) => {
              console.log(result.text);
              event.preventDefault();
              setFullName("");
              setEmail("");
              setNumber("");
              setMessage("");
              alert("Success")
          }, (error) => {
              console.log(error.text);
              alert("Failed to login")
          });
          
      };
    


  return (
    <>
        <div className="my-5">
           <h1 className="text-center">Contact Us</h1> 
        </div> 
        <div className="container container_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                     <form ref={form} onSubmit={sendEmail}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input name='name' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" onChange={event => setFullName("")}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={event => setEmail("")}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input name="number" type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" onChange={event => setNumber("")}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={event => setMessage("")}
                            ></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
