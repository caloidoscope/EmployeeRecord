using System.Collections.Generic;
using EmployeeRecordsAPI.Models;

namespace EmployeeRecordsAPI.Services
{
    public interface IEmployeeService
    {
        Employee GetEmployee(int id);
        List<Employee> GetAllEmployees();
        Employee AddEmployee(string firstName, string middleName, string lastName);
        Employee UpdateEmployee(int id, string firstName = null, string middleName = null, string lastName = null);
        void DeleteEmployee(int id);
    }
}
