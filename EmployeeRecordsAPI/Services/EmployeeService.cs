using System;
using System.Collections.Generic;
using EmployeeRecordsAPI.Models;
using EmployeeRecordsAPI.Repositories;

namespace EmployeeRecordsAPI.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(EmployeeRepository employeeRepository)
        {
            this._employeeRepository = employeeRepository;
        }

        public Employee GetEmployee(int id)
        {
            return _employeeRepository.GetEmployee(id);
        }

        public List<Employee> GetAllEmployees()
        {
            return _employeeRepository.GetAllEmployees();
        }

        public Employee AddEmployee(string firstName, string middleName, string lastName)
        {
            Employee employee = new Employee
            {
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName
            };
            return _employeeRepository.AddEmployee(employee);
        }

        public Employee UpdateEmployee(int id, string firstName = null, string middleName = null, string lastName = null)
        {
            Employee employee = _employeeRepository.GetEmployee(id);
            if (employee == null)
            {
                throw new EmployeeNotExistsException();
            }
            employee = new Employee
            {
                Id = employee.Id,
                FirstName = firstName ?? employee.FirstName,
                MiddleName = middleName ?? employee.MiddleName,
                LastName = lastName ?? employee.LastName
            };
            return _employeeRepository.UpdateEmployee(employee);

        }

        public void DeleteEmployee(int id)
        {
            Employee employee = _employeeRepository.GetEmployee(id);
            if (employee == null)
            {
                throw new EmployeeNotExistsException();
            }
            _employeeRepository.DeleteEmployee(id);
        }
    }

    public class EmployeeNotExistsException : Exception
    {
    }
}