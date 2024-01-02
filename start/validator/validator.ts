// start/validators/validation.js
// start/validators/validation.js
import  { schema ,rules} from '@ioc:Adonis/Core/Validator'

export default {
  userLogin: schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6)]),
  }),
}
