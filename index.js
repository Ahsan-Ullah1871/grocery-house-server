const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwba5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
client.connect((err) => {
	const GroceryCollection = client
		.db("Grocery-House")
		.collection("products");
	// perform actions on the collection object
	console.log("Database Connected");
	// client.close();
});

app.listen(process.env.PORT || port);
