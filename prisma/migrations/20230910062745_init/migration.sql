-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "emp_name" VARCHAR(45) NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "entry_by" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Emp_Qualification" (
    "q_id" INTEGER NOT NULL,
    "q_name" TEXT NOT NULL,
    "marks" INTEGER NOT NULL,
    "employee_id" INTEGER,

    CONSTRAINT "Emp_Qualification_pkey" PRIMARY KEY ("q_id","q_name")
);

-- CreateTable
CREATE TABLE "QualificationList" (
    "q_id" SERIAL NOT NULL,
    "q_name" TEXT NOT NULL,

    CONSTRAINT "QualificationList_pkey" PRIMARY KEY ("q_id")
);

-- AddForeignKey
ALTER TABLE "Emp_Qualification" ADD CONSTRAINT "Emp_Qualification_q_id_fkey" FOREIGN KEY ("q_id") REFERENCES "QualificationList"("q_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emp_Qualification" ADD CONSTRAINT "Emp_Qualification_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;
