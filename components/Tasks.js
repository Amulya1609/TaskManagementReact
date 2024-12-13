import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';
import Navigation from './Navigation';

const Tasks = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

         let jwttoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBbXVseWEiLCJqdGkiOiJhNGUwNmQ4ZS1hNDFmLTRjM2MtOWE2NC0xZmZjMjhiNTM3MmIiLCJleHAiOjE3MzQwODc1MzEsImlzcyI6Iklzc3VlciIsImF1ZCI6IkF1ZGllbmNlIn0.2-1EvEElke1WbnVsDhtTnS7dSm9Owm9aebZHlaC_kwU';
        fetch("api/Task/GetAllTasks", {
             headers: {
                 'Authorization': 'bearer ' + jwttoken
             }
         }).then((res) => {
            return res.json();
         }).then((resp) => {
             listupdate(resp);
         }).catch((err) => {
             console.log(err.messsage)
         });

    }, []);

    return (
        <div>
            
            <h1 className="text-center">Welcome to TMReact</h1>
            <Header/>
            <h2 className="m-3 d-flex justify-content-center">Tasks Page</h2>
            <Navigation/>
            { <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>taskId</th>
                    <th>title</th>
                    <th>description</th>
                    <th>dueDate</th>
                    <th>priority</th>
                    <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(task => (
                            <tr key={task.id}>
                                <td>{task.taskId}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.dueDate}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>

                            </tr>

                        ))
                    }
                </tbody>

            </table> }
        </div>
    );
}

export default Tasks;