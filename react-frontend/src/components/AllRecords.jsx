import React, { useEffect, useState } from "react";
import axios from "axios";
export function AllRecords() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3002/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Records</h1>
      <span>Employee Id</span> <span>Employee Name</span>
      <br />
      <ul>
        {employees.map((contact) => (
          <li key={contact.id}>
            <div>
              <span>{contact.employee_id} </span>
              <span>{contact.emp_name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default AllRecords;
