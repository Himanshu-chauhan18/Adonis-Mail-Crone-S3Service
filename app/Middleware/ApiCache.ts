
export default class ApiCacheMiddleware {
  public async handle({ request, response }: any, next: () => Promise<void>) {
       // let {id} = ctx.request.params()
    let permission = request.param('id')
   
    if(+permission){
        next()
    }else{
       response.status(200).json({'msg':'You not have an permission'})
    }
  }
}
