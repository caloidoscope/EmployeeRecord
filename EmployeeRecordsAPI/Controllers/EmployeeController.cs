using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using EmployeeRecordsAPI.Models;
using EmployeeRecordsAPI.Repositories;
using EmployeeRecordsAPI.Services;
using Newtonsoft.Json.Linq;

namespace EmployeeRecordsAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-My-Header")]
    public class EmployeeController : ApiController
    {
        private readonly IEmployeeService _employeeService = new EmployeeService(new EmployeeRepository());

        [HttpGet]
        [Route("employee/get/{id}")]
        public Employee Get(int id)
        {
            return _employeeService.GetEmployee(id);
        }

        [HttpGet]
        [Route("employee/get/all")]
        public List<Employee> GetAll()
        {
            return _employeeService.GetAllEmployees();
        }

        [HttpPost]
        [Route("employee/add")]
        public Employee AddEmployee([FromBody] JObject body)
        {
            return _employeeService.AddEmployee((string) body["FirstName"], (string) body["MiddleName"], (string) body["LastName"]);
        }
        [HttpPost]
        [Route("employee/update")]
        public Employee UpdateEmployee([FromBody] JObject body)
        {
            return _employeeService.UpdateEmployee((int)body["Id"], (string)body["FirstName"], (string)body["MiddleName"], (string)body["LastName"]);
        }
        
        [HttpDelete]
        [Route("employee/delete/{id}")]
        public void Delete(int id)
        {
            _employeeService.DeleteEmployee(id);
        }
    }
}