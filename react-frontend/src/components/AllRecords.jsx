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
      <ul>
        {employees.map((contact) => (
          <li key={contact.emp_id}>
            <div>
              <span>{contact.emp_id}</span>
              <span>{contact.emp_name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default AllRecords;
