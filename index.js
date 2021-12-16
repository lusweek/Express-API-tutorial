// Här sammankopplar du mongoDB till din kod.

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const router = require("./api/API");
const path = require("path")


app.use(cors());

app.use(express.json());

app.use("/api", router)

app.use(express.static(path.join(__dirname, "client")));
mongoose.connect(
  /* This is how you can do it, it's bad practise but this is what the variabls meen.
  "mongodb+srv://second-try:TzUIsPuRbyePJSgZ@second-databace.lauae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  */  
 
  {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => console.log("Conected to db")
);

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
