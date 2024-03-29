import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config({ path: './.env'});

AWS.config.update({
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = process.env.NAME_TABLE
// 'users'

export {
    db,
    Table
}