import prisma from "./index.database.js";

//get all users
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
    return res.status(500).send(error);
  }
};

//get user by Id
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
    return res.status(500).send(error);
  }
};
