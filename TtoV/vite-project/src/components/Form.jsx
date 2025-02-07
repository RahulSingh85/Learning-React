import React , {useState} from 'react'

function Form() {

      // const [text , setText] = useState('')

    // function hendleChange(e){
    //     setText(e. target.value)
    //     console.log(e)
    // }

    const [name , setName] = useState({firstName : '' , lastName : ''})
    const [username , setuserName]  = useState({userName : ''})
    const [password , setPassword] = useState({password : ''})
    const [confirmpassword , setConfirmpassword] = useState({confirmpassword : ''})
    const [error,setError] = useState(null);

    

    
  return (
    <div>
        <form>
            {/* <input type = "text" value= 'Scaler'/> //this will only for read the text and not for changing the text  */}
            {/* this will can be chamge the text */}
            {/* <input onChange={(e)=> setText(e.target.value)} type = "text" value= {text}/>  */}
            
            <label> First Name </label>

            <input onChange={(e) => setName({...name , firstName : e.target.value})} type = "text" value={name.firstName} placeholder="First Name" required/>
            <label> Last Name </label>
            <input onChange={(e) => setName({...name , lastName : e.target.value })} type = "text" value={name.lastName} placeholder="Last Name"/>
            <label> User Name </label>
            <input onChange={(e) => setuserName({...username , userName : e.target.value })} type = "text" value={username.userName} placeholder="User Name"/>
            <label> Password </label>
            <input onChange={(e) => setPassword({...password , password : e.target.value })} type = "password" value={password.password} placeholder="Password"/>
            <label> Confirm Password </label>
            <input onChange={(e) => setConfirmpassword({...confirmpassword , confirmpassword : e.target.value })} type = "password" value={confirmpassword.confirmpassword} placeholder="Confirm Password"/>
            <button onClick={(e) => {e.preventDefault(); console.log(name),console.log(username) , console.log(password) , console.log(confirmpassword)}}>Submit</button>
        </form>
    </div>
  )
}

export default Form