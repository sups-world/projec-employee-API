import express from "express";

export const viewAllEmployees = async (req, res, next) => {
  console.log("view all emps");
  res.send("view all employees");
};

export const viewOneEmployee = async (req, res, next) => {
  console.log("view one emps");
  res.send("view one employees");
};

export const createEmployee = async (req, res, next) => {
  console.log("create new emps");
  res.send("create new employee");
};

export const editEmployee = async (req, res, next) => {
  console.log("edit one emps");
  res.send("edit one employee");
};

export const deleteEmployee = async (req, res, next) => {
  console.log("delete one emps");
  res.send("delete one employees");
};
