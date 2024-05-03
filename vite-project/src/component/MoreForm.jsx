import Reac, { useState } from "react";
function MoreForm() {
  const [firstname, setfirstname] = useState({
    name: "",
    val: ""
  })
  const [lastname, setlastname] = useState({
    name: "",
    val: ""
  })
  const [email, setemail] = useState({
    name: "",
    val: ""
  })
  const [password, setpassword] = useState({
    name: "",
    val: ""
  })
  const [confirmPassword, setconfirmpassword] = useState({
    name: "",
    val: ""
  })
  const firstNameFunction = (e) => {
    setfirstname({ ...firstname, name: e.target.value })
    if (e.target.value.length < 2) {
      setfirstname({ ...firstname, val: "that field must be at least 2 characters." })
    }
    else {
      setfirstname({ ...firstname, val: "" })
    }
  }
  const lastnameFunction = (e) => {
    setlastname({ ...lastname, name: e.target.value })
    if (e.target.value.length < 2) {
      setlastname({ ...lastname, val: "that field must be at least 2 characters." })
    }
    else {
      setlastname({ ...lastname, val: "" })
    }
  }
  const emailFunction = (e) => {
    setemail({ ...email, name: e.target.value })

    if (e.target.value.length < 5) {
      setemail({ ...email, val: "the field must be at least 5 characters." })
    }
    else {
      setemail({ ...email, val: "" })
    }
  }
  const passwordFunction = (e) => {
    setpassword({ ...password, name: e.target.value })
    if (e.target.value.length < 8) {
      setpassword({ ...password, val: "The passwords must match and be at least 8 characters." })
    }
    else {
      setpassword({ ...password, val: "" })
    }
  }
  const confirmPasswordFunction = (e) => {
    setconfirmpassword({ ...password, name: e.target.value })
    if (e.target.value.length < 8) {
      setconfirmpassword({ ...password, val: "The passwords must match and be at least 8 characters." })
    }
    else {
      setconfirmpassword({ ...password, val: "" })
    }
  }
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="" id="" placeholder="search" onChange={firstNameFunction} />
          {firstname.val ? <p>{firstname.val}</p> : ""}
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="" id="" placeholder="search" onChange={lastnameFunction} />
          {lastname.val ? <p>{lastname.val}</p> : ""}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" placeholder="search" onChange={emailFunction} />
          {email.val ? <p>{email.val}</p> : ""}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" placeholder="search" onChange={passwordFunction} />
          {password.val ? <p>{password.val}</p> : ""}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="" id="" placeholder="search" onChange={confirmPasswordFunction} />
          {confirmPassword.val ? <p>{confirmPassword.val}</p> : ""}
        </div>
      </form>
    </div>
  )
}
export default MoreForm
