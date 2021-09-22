
import './App.css';
import { useState } from 'react';

function App() {
  const [allData, setallData] = useState([]);
  const [dataById, setDataById] = useState([]);
  const [id, setId] = useState(0);
  const [empId, setEmpId] = useState(0);
 
 


  const fetchAllData = () => {
    fetch("http://localhost:8081/find")
      .then((response) => response.json())
      .then((json) => setallData(json));
  };

  const fetchById = () => {
    fetch("http://localhost:8081/findbyid?id="+id)
      .then((response) => response.json())
      .then((json) => setDataById(json));
     
  };

  const deleteById = () => {
    fetch("http://localhost:8081/deleteemp" , {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({emp_id: empId})})
      .then((response) => response.json());
     
  };

  const setid =(event) => {
    setId(event.target.value);
  }

  const setDeleteid =(event) => {
    setEmpId(event.target.value);
  }

  console.log(allData)
  return (
    <div className="App">
      All employees details
      <button onClick={fetchAllData}>Get details</button>
      <br />
      {JSON.stringify(allData)}

      Get the details of employee by id
      <label>Enter the id: </label> 
      <input type="number" id="id" onChange={setid}/>
      <button  onClick={fetchById}>Get details</button>
      <br />
      {JSON.stringify(dataById)}


      delete a emp based on id
      <label for="cars">Choose a car:</label>

      <select name="emp" id="empid" onChange={setDeleteid}>
        {allData.map((row) => (
          <option value={row.empId}>{row.empId}</option>
        ))}
        
      </select>
      {/* <label>Enter the id: </label> 
      <input type="number" id="id" onChange={setDeleteid}/> */}
      <button  onClick={deleteById}>Delete Emp</button>
      <br />
      
    </div>
  );
}

export default App;
