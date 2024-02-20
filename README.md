# Amazon DynamoDB CRUD operations in Nodejs

## Installation and setup

### Environment Variable

| KEY | Required | Description  |
|--|--|--|
| **NAME_TABLE** | ***true*** | Name Table to access DynamoDB |
| **AWS_REGION** | ***true*** | Aws region to access DynamoDB |
| **AWS_ACCESS_KEY** | ***true*** | Aws access key to access DynamoDB |
|**AWS_SECRET_KEY**| ***true*** | Aws secret key to access DynamoDB |
|**AWS_SESSION_TOKEN**| ***true*** | Aws session token to access DynamoDB |

Note :
`AWS_SESSION_TOKEN` is Optional when using aws academy

### Install package dependencies

```sh
npm install
```

### Run the server

```sh
npm start
```

App Running in port 8000 in the development mode.\
Use [http://localhost:8000](http://localhost:8080) for use with postman.

#### API Endpoint

You can check the API endpoint documentation in [here](https://documenter.getpostman.com/view/32005248/2sA2r9VNEF)