# Weekend Spike

## Description
This assignment was to determine what we believed would be some of the more difficult parts of our project, with the intent of discovering ways to solve the problem beforehand.

I worked on two things that I thought would be difficult tasks, these were image uploads and sending emails.

## Image Upload
To take care of this, first I had to create an account/project on AWS, create a user and a bucket. Most of the client side code can be seen in the ImageUpload component. The server side code can be seen in the image-url.router.js file.

## Sending Emails
This functionality was done using Nodemailer. The client side code can be found in the InfoPage component and the server side code can be found in the email.router.js file. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and tables

Create a new database called `image_upload` 
Then run the script that can be found in the database.sql file.

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    EMAIL=
    PASSWORD=
    ```
    Note that you need to insert the correct information after the equals sign.
    The AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY can be found in the iam console when creating your AWS bucket.
    THis project uses gmail within the email functionality, so in the EMAIL= section, you need to insert a gmail account.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

