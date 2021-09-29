using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using EmployeeRecordsAPI.Models;

namespace EmployeeRecordsAPI.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeContext _context = new EmployeeContext();
        public Employee GetEmployee(int id)
        {
           return _context.Employees.SingleOrDefault(e=> e.Id == id);
        }

        public List<Employee> GetAllEmployees()
        {
            return _context.Employees.ToList();
        }

        public Employee AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return employee;
        }

        public Employee UpdateEmployee(Employee employee)
        {
            _context.Employees.AddOrUpdate(employee);
            _context.SaveChanges();
            return employee;
        }

        public void DeleteEmployee(int id)
        {
            _context.Employees.Remove(GetEmployee(id));
            _context.SaveChanges();
        }
    }
}