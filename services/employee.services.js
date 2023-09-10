import prisma from "./index.database.js";

//create employee
export const createEmpDb = async (emp_name, dob, gender, salary, entry_by) => {
  try {
    const newEmp = await prisma.employee.create({
      data: {
        emp_name,
        dob,
        gender,
        salary,
        entry_by,
      },
    });
    return newEmp;
  } catch (error) {
    console.log(error);
  }
};

//get all employees
export const getAllEmpsDb = async () => {
  try {
    const allUsers = await prisma.employee.findMany({
      orderBy: {
        entry_date: "desc",
      },
    });
    return allUsers;
  } catch (error) {
    console.log(error);
  }
};

//get employee by Id
export const getOneEmpsDb = async (employee_id) => {
  try {
    const emp = await prisma.employee.findUnique({
      where: {
        employee_id,
      },
    });
    return emp;
  } catch (error) {
    console.log(error);
  }
};
