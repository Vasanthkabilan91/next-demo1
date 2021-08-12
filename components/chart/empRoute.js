
import React, {useState,useEffect } from "react";
import axios from "axios";
import useSwr from 'swr';


//const fetcher = url => axios.get(url).then(res => res.data);


function empRoute()
{
  
  const[empId,setId] = useState('');
  const[empName,setEmpName] = useState('');
  const[empGender,setEmpGender] = useState('');
  const[empContact,setEmpCOntact] = useState('');
  //const [response, setResponse] = useState('');
  

  //const { data, error } = useSwr('http://3.237.170.39:8080/api/employee/1', fetcher);


  useEffect(()=>{

    axios.get('http://3.237.170.39:8080/api/employee/1').then(res => {
      console.log("res",res);
      setId (res.data.employeeId);
    setEmpName(res.data.employeeName);
    setEmpGender(res.data.employeeGender);
    })

  },[]);
  
  
  //setResponse(data);

  //console.log("response is-->"+response);


  function handleChangeEmpId(event)
  {
    setId(event.target.value);
  }

  function handleChangeEmpName(event)
  {
    setEmpName(event.target.value);
  }

  function handleChangeGender(event)
  {
    setEmpGender(event.target.value);
  }

  function handleChangeEmpContact(event)
  {
    setEmpCOntact(event.target.value);
  }

  const empDetails = {

      employeeId:empId,
      employeeName:empName,
      employeeGender:empGender,
      employeeContactNumber:empContact
    }

    function submitData()
    {
      console.log("emp details-->"+JSON.stringify(empDetails));
       axios.post('http://3.237.170.39:8080/api', empDetails)
                                .then(res => console.log("res is-->" +JSON.stringify(res)));                          
    }


   return(
          <div>
            <h2>You Can Post HERE !!!</h2>
            
            
            
            
              <label>EMployee Id:</label><br></br>
              <input value={empId} onChange={handleChangeEmpId}/>
              

              <br></br>
              <label>EMployee Name:</label><br></br>
              <input type="text" value={empName} onChange={handleChangeEmpName}/>
            

              <br></br>
              <label>EMployee Gender:</label><br></br>
              <input type="text" value={empGender} onChange={handleChangeGender}/>
            

              <br></br>
              <label>EMployee Contact:</label><br></br>
              <input type="text" value={empContact} onChange={handleChangeEmpContact}/>
            
              <br></br>            
              
              <button type="submit" onClick={submitData}>Submit</button>
            
            
            

          </div>
    )
   
  }

export default empRoute