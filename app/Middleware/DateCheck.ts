import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DateCheckMiddleware {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const dateParam = request.param('date') // Change 'dateParam' to your parameter name
    // const dateParam = request.input('date'); // Change 'dateParam' to your parameter name
    
    if (isValidDateFormat(dateParam)) {
      await next();
    } else {
      response.status(400).send('Invalid date format. Please use YYYY-MM-DD.');
    }
  }
}

function isValidDateFormat(dateString: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}
