import Route from '@ioc:Adonis/Core/Route';
// import path from 'path';
import Application from '@ioc:Adonis/Core/Application'
// DIRECT ROUTES WITH PARAMETER PASSING AND GETTING PARAMS

Route.post('/login', 'AuthController.login')

Route.get('/posts/:id', async ({ params }) => {
    return `Viewing post with id ${params.id}`
  })

// ROUTES WITH REGEX FOR CHECKING NUMBERS ONLY AND TYPECASTING TO NUMBER
Route
  .get('/exp/:id', async ({ params }) => {
    console.log(typeof params.id)
    return `Viewing exp using id ${params.id}`
  })
  .where(
    'id',{
        match: /^[0-9]+$/,
        cast: (id) => Number(id),
      } 
    )


// VALIDATE ID TO BE NUMERIC + CAST TO NUMBER DATA TYPE
Route
  .get('/exp1/:id', async ({ params }) => {
    console.log(typeof params.id)
    return `Viewing exp using id ${params.id}`
  }).where('id', Route.matchers.number())


// GROUP ROUTES WITH PREFIX
Route.group(() => {
    Route.get('/groupEmployee', 'EmployeesController.groupEmployee')
  }).prefix('/api') // URL : /api/groupEmployee


// LOAD CONTROLLER
Route.get('/sendEmail', 'EmailsController.sendEmail');

// ROUTE REDIRECTION RELATIVE URL
Route.on('/himanshu/:id').redirect('/api/groupEmployee')
Route.on('/himmu/:id').redirect('/register/:id')
// ROUTE REDIRECTION ABSOLUTE URL
Route.on('/hero').redirectToPath('https://www.youtube.com')

// MIDDLEWARE 
// Route.get('/login/:id', 'AuthController.login').middleware(async(ctx, next)=>{
//     // let {id} = ctx.request.params()
//     let permission = ctx.request.param('id')
   
//     if(+permission){
//         next()
//     }else{
//         ctx.response.status(200).json({'msg':'You not have an permission'})
//     }
// });

// PARAMETER PASSING WITH NAMED MIDDLEWARE
Route.get('/register/:id', 'AuthController.register').middleware('checkRegisterPermission');

// MIDDLEWARE CHAINING
Route.get('/register/:date/:id', 'AuthController.register').middleware(['DateCheck','checkRegisterPermission']);

// SETUP MIDDLEWARE IN KERNAL TS THEN USE  NAMED MIDDLEWARE
Route.get('/login/:id', 'AuthController.login').middleware('checkLoginPermission');

// OPTIONAL ROUTES
Route.get('/getaEmployee/:id?', 'EmployeesController.getaEmployee');


/* 
  IMPORTANT REQUEST METHODS
  request.url() /himmu
  request.qs() ?name='himmu
  request.params() :id
  request.param('id');
  // Default value for optional params
  request.param('id', 1)   
  request.body()
  request.completeUrl()
  request.method()

  // IMPORTANT RESPONSE METHODS
  response.send('hello world')
  response.header('Content-type', 'text/html')
  response.status(401)
   response.redirect('/login')

*/

Route
  .get('/download', async ({ response }) => {
   const filePath = Application.publicPath('uploads/TEC00002.jpg');
    console.log(filePath);
    // for view image
    // response.download(filePath)
    // for download image
    response.attachment(filePath)
    // define custom name
    // response.attachment(filePath, 'foo.jpg')
  })

Route
  .get('/auth', async ({ response }) => {
    //   response.badRequest({ error: 'Invalid login credentials' }) // 400
    // response.abort('Not authenticated', 401)
    // response.abortIf(!auth.user, 'Not authenticated', 401)
    // response.forbidden({ error: 'Unauthorized' }) // 403
    // response.created({ data: {'name':'himanshu'} })
    // response.unauthorized({ error: 'Must be logged in' })
  })


  Route.post('/registeruser', 'AuthController.register')
  Route.get('/verifymail', 'AuthController.verifymail')

