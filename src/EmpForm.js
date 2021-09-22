import { useState } from "react";

function EmpForm(){
    const [formEmpData, setFormEmpData] = useState({});
    const [response, setresponse] = useState(false);
    const sendData = () => {
        fetch("http://localhost:8080/add")
    }
}