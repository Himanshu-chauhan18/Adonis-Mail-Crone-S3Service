import Route from '@ioc:Adonis/Core/Route';

import './route/auth.routes';
import './route/employee.routes';
import './route/orm.routes';


// Route.group(() => {
//   import('./route/auth.routes').then(({ default: authRoutes }) => {
//     authRoutes();
//   });
// })

// Route.group(() => {
//   import('./route/employee.routes').then(({ default: employeeRoutes }) => {
//     employeeRoutes();
//   });
// })





// HANDING GET REQUEST
// -------------------------------------------------
// Route.get('/himanshu', async ({ view }) => {
  // return view.render('himanshu.first');
  // return view.render('himanshu/first.edge');
// })

// Route.on('/himanshu').render("himanshu.first");

// Route.get('/himanshu', async () => {
//   const { default: PostsController } = await import(
//     'App/Controllers/Http/PostsController'
//   )
//   return new PostsController().himanshu()
// })

// Route.get('read', 'PostsController.index') .middleware(async (ctx, next) => {
    
//   console.log(` middleware `)
//   await next()
// });
// Route.get('insertData', 'PostsController.insertData');

// // get Image from aws
// Route.get('getObject', 'PostsController.getObject');
// // put Image from aws
// Route.post('putObject', 'PostsController.putObject');

// Route
//   .get('/users', async ({request,response}) => {
//     let users = [{'name':'himanshu'}]
//     response.status(200).json(users);
//   })
//   .middleware(async (ctx, next) => {
    
//     console.log(`Inside middleware 6 ${ctx.request.url()}`)
//     await next()
//   })



  Route
  .get('*', async () => {
  
    return 'page not found '
  })

// // HANDING POST REQUEST
// Route.post("/himanshu",({request,response})=>{
// //  const {username,password} = request.body();
// //  response.redirect().back();
//   // console.log(username)
//   return response.redirect("/himanshu")
// })