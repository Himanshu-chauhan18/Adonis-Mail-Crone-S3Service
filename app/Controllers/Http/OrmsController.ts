// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import { Response } from 'aws-sdk';
import { DateTime } from 'luxon';
export default class OrmsController {

    public async selectData({response}){
    // const result = await Database.from('EmployeeMaster').select('Id','EmployeeCode','FirstName').where('OrganizationId',10).orderBy('Id','desc').limit(10);
    // console.log(result)
    // return response.send(result)
       const user = await User.create({
        username: 'virk',
        email: 'virk@adonisjs.com',
        password: 'virk',
        date:  DateTime.fromJSDate(new Date('2023-11-25'))

      })
   
      response.send("data Inserted successfully")
    }
    public async allData({response}){
      // const user = await User.all();
      // const user = await User.query().select('id','username');
      const user = await User.query().select('*').first();
      user?.serialize();
      console.log(user?.serialize({
        fields: {
          pick: ['id']
        }
      }))
      return response.send(user);
    }
    public async update({response}){
     let user = await User
      .query()
      .where('id', 1)
      .update({ username: 'himanshu' })
      return response.send(user);
    }
}
