import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Form from "./Form"
import Dashboard from "./Dashboard"

class App extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"black",height:"97vh"}}>
                <BrowserRouter>
                    <Route exact path="/" component={Form} />
                    <Route path="/dashboard" component={Dashboard} />
                </BrowserRouter>
            </div>
        )
    }
}
export default App