 import cron from 'node-cron';
  
  export default  class CronService {
    public static async StartCron(){
        // 00 12 * * * per day 12:00 bje
        // 30-11-2023 ko 20:14 bje
        // * * * * * every minute
        // * * * * * * every second
        cron.schedule("* * * * *",()=>{
            console.log("Hitted")
        })
    }
  }
  

