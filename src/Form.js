import React from "react"
import Axios from "axios"
import "./styles/forms.css"


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errorMsg : ""
        }
    }
    login=()=>{
        var username = document.getElementById("username").value;
        var pass = document.getElementById("pass").value;
        console.log(username,pass)
        Axios.post("http://127.0.0.1:1410/login",{
            username : username,
            pass : pass
        })
        .then(res=>{
            console.log(res)
            if(res.data){
                this.props.history.push("/dashboard")
            }else{
                this.setState({
                    errorMsg : "Invalid credentials"
                })
            }
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    render(){
        return(
            <div id="formDiv">
                <h2 style={{color:"white"}}>Get In Buddy :)</h2>
                <p style={{color:"orange"}}>{this.state.errorMsg}</p>
                <input type="text" id="username" placeholder="Username" /><br/>
                <input type="password" id="pass" placeholder="Password" /><br/>
                <button onClick={this.login} id="btn">Login</button>
            </div>
        )
    }
}

export default Form