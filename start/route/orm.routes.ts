import Route from '@ioc:Adonis/Core/Route';


Route.get('/selectData', 'OrmsController.selectData')
Route.get('/allData', 'OrmsController.allData')
Route.get('/update', 'OrmsController.update')