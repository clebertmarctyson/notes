require("dotenv/config");
const mongoose = require("mongoose");
const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
const port = process.env.PORT;
const uri = process.env.DATABASE_URI;

app.use(express.json());
app.use("/categories", require("./routes/category"));
app.use(errorHandler);

mongoose.connect(uri);
mongoose.connection
  .once("open", () => {
    console.log("====================================");
    console.log("You're connected to the database successfully");
    console.log("====================================");

    app.listen(port, () => {
      console.log("====================================");
      console.log(`Server is running on http://localhost:${port}`);
      console.log("====================================");
    });
  })
  .on("error", (error) => {
    console.log("====================================");
    console.log(`Error: ${error}`);
    console.log("====================================");
  });
