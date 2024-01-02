// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// export default class PostsController {
//     public async himanshu(){
//         let arr = [{"name":"himanshu","age":18},{"name":"sumit","age":28}];
//         return arr;
//     }
// }

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'
import fs from 'node:fs'

import S3Service  from 'App/Services/S3Service'
export default class PostsController {

  
   public async index({response}) {

    // console.log(request.url())
    // console.log( request.qs())
    // console.log( request.params())

     // return [
    //   {
    //     id: 1,
    //     title: 'Hello world',
    //   },
    //   {
    //     id: 2,
    //     title: 'Hello universe',
    //   },
    // ]

    // return Database.from('EmployeeMaster')
    //                 .select('*')
    //                 .orderBy('Id', 'desc') 
    //                 .paginate(1, 10);

    const directoryPath = 'public/uploads/myFolder';

    fs.mkdir(directoryPath, { recursive: true }, (error) => {
      if (error) {
        console.error(`Failed to create folder: ${error.message}`);
      } else {
        console.log(`Folder '${directoryPath}' created successfully.`);
      }
    });

    
    // const [users] = await Database.rawQuery('select * from EmployeeMaster where Id = ?', [1])
    
  return 'himanshu';

    // return response.status(200).json(users);
    
  
   
  }

  // public async insertData({response}) {
  //   let data = {}
  //   const [insert1] = await Database.rawQuery('INSERT INTO EmployeeMaster(EmpCode,FirstName,LastName) VALUES(?,?,?)', ['UBI1','Himanshu','Chauhan'])
    
  //   if (insert1.affectedRows) {
  //     data['status'] = true;
  //     data['message'] = 'Data Inserted Successfully!';
  //   }else{
  //     data['status'] = false;
  //     data['message'] = 'There is some problem while inserting data';
  //   }
   
  //   return response.status(201).json(data);
  // }

  async getObject({ params, response }) {
    // const { bucketName, key } = params

    try {
      const s3Service = new S3Service()
      const objectData = await s3Service.getObject('adonisjsapi', 'himanshuphoto.jpg');


      response.status(200).json({ data: objectData })
    } catch (error) {
      response.status(500).json({ error: 'Error getting object from S3' })
    }
  }

  async putObject({ request, params, response }) {
    // const { bucketName, key } = params;
    const { contentType } = request.all();
    const rawBinaryData = request.body();
    console.log(rawBinaryData)
    const body = request.file('file'); // Assuming you are uploading a file
    const orgid=10;
    const new_name='himanshu'
    const key = orgid+'/division/'+new_name;

    console.log(key);
    console.log(contentType);
    console.log(body);
    try {
      const s3Service = new S3Service();
      const result = await s3Service.putObject('adonisjsapi', key, body.stream, contentType);

      response.status(200).json({ message: result });
    } catch (error) {
      response.status(500).json({ error: 'Error uploading object to S3' });
    }
  }
  
}
