import React, { useState } from "react";
import axios from "axios";
export function RegistrationForm() {
  const [formData, setFormData] = useState({
    emp_name: "",
    dob: "",
    gender: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/employees/",
        formData
      );
      if (response.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.log("failed to send data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label for="emp_name">
          Name:
          <input
            type="text"
            name="emp_name"
            id="emp_name"
            value={formData.emp_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="dob">
          DOB
          <input
            type="date"
            name="dob"
            id="emp_name"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label for="salary">
          Salary:
          <input
            type="number"
            name="salary"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label for="gender" placeholder="male,female or third gender">
          Gender:
          <input
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </label>
        <hr />
        <input type="submit" value="Submit" />
        <input type="reset" value="Cancel" />
      </form>
    </div>
  );
}

// export default AllRecords;
