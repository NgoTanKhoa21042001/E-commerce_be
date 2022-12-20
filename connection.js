require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.p7xwa58.mongodb.net/ecomern?retryWrites=true&w=majority`;

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then((data) => console.log("connected to mongod"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err, "em");
});
