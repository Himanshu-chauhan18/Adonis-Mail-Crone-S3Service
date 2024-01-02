// import { String } from "aws-sdk/clients/cloudwatchevents";

export default class Utils {

     /**
   * Encode a string by applying base64 encoding and string reversal 5 times.
   *
   * @param {string} str - The string to encode.
   * @returns {string} - The encoded string.
   */
  public static encode5t(str:String) {
    for (let i = 0; i < 5; i++) {
      str = Buffer.from(str).toString('base64'); // Apply base64 encoding
      str = str.split('').reverse().join(''); // Reverse the string
    }
    return str;
  }
    
   /**
   * Decode a string by applying base64 decoding and string reversal 5 times.
   *
   * @param {string} str - The string to decode.
   * @returns {string} - The decoded string.
   */
    public static decode5t(str:String) {
        for (let i = 0; i < 5; i++) {
          str = Buffer.from(str.split('').reverse().join(''), 'base64').toString(); // Apply base64 decoding
        }
        return str;
      }
  
    // Add more utility functions as needed
  }