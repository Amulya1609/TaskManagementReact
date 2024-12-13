
//import React,{Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';


/*export class Home extends Component{

    render(){
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <h3> Welcome to Task Management Portal</h3>

            </div>
        )
    }
}

export default Home;*/

export default function home(){
    return(
        <>
        <h1 className="text-center">Welcome to TMReact</h1>
        <Header/>
        <h2 className= "m-3 d-flex justify-content-center"> Home Page </h2>
        <Navigation/>
        <h1>You are inside Home Page</h1>

        </>
    )

    
}