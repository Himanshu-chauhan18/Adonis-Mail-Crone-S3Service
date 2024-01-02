import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckRegisterPermission {
  public async handle({request,response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let permission = request.param('id')
   
    if(+permission){
        next()
    }else{
       response.status(200).json({'msg':'You not have an register permission'})
    }
  }
}
