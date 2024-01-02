console.log("employee")
import Route from '@ioc:Adonis/Core/Route';
export default () => {
    Route.get('/getaEmployee', 'EmployeesController.getaEmployee');
    Route.get('/getAllEmployee', 'EmployeesController.getAllEmployee');
    // ... other authentication routes
};