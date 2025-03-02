package com.stefanyshyn.employeeservice.repository;

import com.stefanyshyn.employeeservice.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
