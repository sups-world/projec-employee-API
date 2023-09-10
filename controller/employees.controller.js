import {
  createEmpDb,
  delEmpDb,
  editEmpDB,
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
  console.log("entry by:::  ", entry_by);
  dob = new Date(dob);
  if (entry_by === null || entry_by === undefined) {
    entry_by = "admin";
  }

  const newEmployee = await createEmpDb(
    emp_name,
    dob,
    gender,
    parseFloat(salary),
    entry_by
  );
  return res.send(newEmployee);
};

export const editEmployee = async (req, res, next) => {
  const { id } = req.params;
  const { emp_name } = req.body;

  try {
    const user = await editEmpDB(parseInt(id), emp_name);
    return res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await delEmpDb(parseInt(id));
    if (user) {
      return res.send(user);
    } else {
      return res.status(404).send("no user found");
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send("No such record found");
  }
};
