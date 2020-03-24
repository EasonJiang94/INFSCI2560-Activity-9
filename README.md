# INFSCI2560 Activity 9

Connect this application to a MongoDB instance and then use [Postman](https://www.postman.com) to insert some books.




Use Express.js and Mongoose to connect to a [Mongo Atlas](https://www.mongodb.com/cloud/atlas) database.

This is a Glitch adaptation of the [building a restful api with express and mongodb](https://dev.to/aurelkurtula/building-a-restful-api-with-express-and-mongodb--3mmh) tutorial on Dev.to.




## Steps

1. Create a MongoDB instance in the cloud. Follow the [MongoDB Atlas instructions on Canvas](https://canvas.pitt.edu/courses/16763/pages/mongodb-atlas-in) for how to set up a MongoDB instance.
  * 
2. Copy the 


Follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide to create a cloud hosted MongoDB database. 

* In the [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/) section of the tutorial, you should enter `0.0.0.0/0`. DON'T FORGET THE `/0`!!
* Make sure to write down the username and password you create, you will need them for your Glitch application.











API tests with Postman

`GET /api/book`


`POST /api/book`
```json
{
  "title":"War and Peace",
  "author":"Warren Peice?"
}
```

`POST /api/book`

```json
{
  "title":"One Day in the Life of Ivan Denisovich",
  "author":"Aleksandr Solzhenitsyn"
}
```

`GET /api/book`


Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
