import express from "express"
import mongoose from "mongoose"
import Cors from "cors"

// Local Imports 
import Cards from "./dbCards.js"

// App Config
const app = express()
const port = process.env.PORT || 3000
const connection_url = "mongodb+srv://admin:ATOioiO8FxJEoGcM@cluster0.chfvq.mongodb.net/tinder-db?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true,
})

// Api Endpoints
// req. body =>  property contains key-value pairs of data submitted(While on posting) in the request body or the content

app.post("/tinder/cards", (req, res) => {
    // Actual Data(Body), we are post through tha app.
    const dbCard = req.body;

    // To create a document!
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/tinder/cards", (req, res) => {

  // To get a document!
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });

});

// Listener
app.listen(port, () => {
   console.log(`Listening on Localhost: ${port}`);
})