import Reac, { useState } from "react";
function HookForm() {
  const [name, setname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [Password, setpassword] = useState()
  const [confirmPassword, setconfirmpassword] = useState("")
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="" id="" onChange={e => setname(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="" id="" onChange={e => setlastname(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" onChange={e => setemail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" onChange={e => setpassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="" id="" onChange={e => setconfirmpassword(e.target.value)} />
        </div>
        <h2>First Name: {name}</h2>
        <h2>Last Name : {lastname}</h2>
        <h2>Email:{email}</h2>
        <h2>Password: "Password"</h2>
        <h2>Confirm Password:"password"</h2>
      </form>
    </div>
  )
}
export default HookForm
