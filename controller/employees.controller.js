import {
  createEmpDb,
  getAllEmpsDb,
  getOneEmpsDb,
} from "../services/employee.services.js";

export const viewAllEmployees = async (req, res, next) => {
  const emps = await getAllEmpsDb();
  // console.log(emps);
  return res.send(emps);
};

export const viewOneEmployee = async (req, res, next) => {
  const { id } = req.params;
  const emp = await getOneEmpsDb(parseInt(id));
  console.log(emp);
  if (emp === null) return res.status(404).send("no records found");
  return res.send(emp);
};

export const createEmployee = async (req, res, next) => {
  console.log(req.body);

  var { emp_name, dob, gender, salary, entry_by } = req.body;
  dob = new Date(dob);

  const newEmployee = await createEmpDb(
    emp_name,
    dob,
    gender,
    salary,
    entry_by
  );
  return res.send(newEmployee);
};

export const editEmployee = async (req, res, next) => {
  console.log("edit one emps");
  res.send("edit one employee");
};

export const deleteEmployee = async (req, res, next) => {
  console.log("delete one emps");
  res.send("delete one employees");
};
