// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CronService from "App/Services/CronService";
import {Utils,Message} from "Config/config";
import Database from '@ioc:Adonis/Lucid/Database';
import MailService from 'App/Services/MailService';
import randomstring from 'randomstring';
import userLogin from 'Validator'
export default class AuthController {
    constructor(){
        
    }
    // public async login(){
    //     console.log(Message.BUCKET_NAME)
    //     // console.log("run good")
    //     // CronService.StartCron();
    //     let en = Utils.encode5t('baburchauhan18@gmail.com');
    //     return  Utils.decode5t(en)
    // }

    public async register({request,response}){
      const Mailer = new MailService()
      let {name,email,password} = request.body();
      const [checkemail] = await Database.rawQuery('select * from UserMaster where Email = ?', [email]);
      if(checkemail.length > 0){
        return response.status(200).send({message:"Email is already in exists"});
      }else{
       const [insert]= await Database.rawQuery('insert into UserMaster(Name,Email,Password) VALUES(?,?,?)',[name,email,password]);
        if(insert.affectedRows>0){
            let token = randomstring.generate();
            const objectData = await Mailer.sendMail(email,'Verification Mail Alert',`<b>Please verify your mail Id<a href="http://127.0.0.1:3333/verifymail?token=${token}">verify mail</a><b>`);
            if(objectData){
                const [update]= await Database.rawQuery('Update UserMaster set token=? where email=?',[token,email]);
                if(update.affectedRows>0){
                    response.status(200).json({ 'message': 'Verification Mail sent successfully' })
                }
            }else{
                response.status(200).json({ 'message': objectData })
            }
        }else{
            return response.status(200).send({message:"There is some problem while inserting data"});
        }
      }
      return {name,email,password};
    }

    public async verifymail({request,response}){
        let qs = request.qs();
        const [checkemail] = await Database.rawQuery('select * from UserMaster where Token = ? limit 1', [qs.token]);
        console.log(qs.token)
        if(checkemail.length > 0){
            const [update]= await Database.rawQuery('Update UserMaster set Token=?,Is_verified=? where Email=?',[null,1,checkemail[0].Email]);
            if(update.affectedRows>0){
                response.status(200).json({ 'message': 'Mail verified successfully' })
            }
        }else{
            response.status(404).json({ 'message': 'page not found' })
        }
        
    }

    public async login({ request, response, auth, session }) {
        // grab uid and password values off request body
        // const { username, password } = request.only(['username', 'password'])
        try {
          // attempt to login
        let d=  await auth.attempt('himanshu', '123');
        console.log(d)
        } catch (error) {
          // if login fails, return vague form message and redirect back
        //   session.flash('form', 'Your username, email, or password is incorrect')
        //   return response.redirect().back()
        response.send("login failed")
        }
        // otherwise, redirect to home page
        // return response.redirect('/')
        // response.send("login success")
      }
    
}
