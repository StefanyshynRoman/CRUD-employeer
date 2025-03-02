package com.stefanyshyn.employeeservice.service;

import com.stefanyshyn.employeeservice.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> fetchAllEmployees();

    Employee findById(Long id);

    Employee createEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    String deleteEmployee(Long id);


}
