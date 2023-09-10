import prisma from "./index.database.js";

//get all users

export const getAllUsersDb = async () => {
  try {
    const allUsers = await prisma.employee.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return allUsers;
  } catch (error) {
    console.log(error);
  }
};
