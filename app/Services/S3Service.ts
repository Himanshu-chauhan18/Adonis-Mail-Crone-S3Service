import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// })

// class S3Service {
//   async getObject(bucketName, key) {
//     const s3 = new AWS.S3()
//     const params = {
//       Bucket: bucketName,
//       Key: key,
//     }

//     try {
//       const data = await s3.getObject(params).promise()
//       return data?.Body?.toString()
//     } catch (error) {
//       console.error(`Error getting object from S3: ${error}`)
//       throw error
//     }
//   }
// }
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  })
  
  export default  class S3Service {
    async getObject(bucketName, key, expiresIn = 3600) {
      const s3 = new AWS.S3()
      const params = {
        Bucket: bucketName,
        Key: key,
      }
    // Expires: expiresIn,
  
      return s3.getSignedUrl('getObject', params)
    }
    async putObject(bucketName, key, body, contentType) {
        const s3 = new AWS.S3();
        const params = {
          Bucket: bucketName,
          Key: key,
          Body: body,
          ContentType: contentType,
        };
    
        try {
          await s3.putObject(params).promise();
          return `Object '${key}' uploaded successfully to '${bucketName}'.`;
        } catch (error) {
          console.error(`Error uploading object to S3: ${error}`);
          throw error;
        }
      }
  }
  

// export default S3Service

// https://adonisjsapi.s3.eu-north-1.amazonaws.com/himanshuphoto.jpg

// https://adonisjsapi.s3.ap-south-1.amazonaws.com/himanshuphoto.jpg

// {
//     "Version": "2012-10-17",
//     "Statement": [
//         {
//             "Sid": "Statement1",
//             "Effect": "Allow",
//             "Principal": "*",
//             "Action": "s3:GetObject",
//             "Resource": "arn:aws:s3:::adonisjsapi/*"
//         }
//     ]
// }