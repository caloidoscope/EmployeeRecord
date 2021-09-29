using System.Collections.Generic;
using EmployeeRecordsAPI.Models;

namespace EmployeeRecordsAPI.Repositories
{
    public interface IEmployeeRepository
    {
        Employee GetEmployee(int id);
        List<Employee> GetAllEmployees();
        Employee AddEmployee(Employee employee);
        Employee UpdateEmployee(Employee employee);
        void DeleteEmployee(int id);
    }
}
