//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// The MongoDB class is a singleton class that connects to the MongoDB server
class MongoDB {
  static instance = null;
  static lock = false;

  static getInstance() {
    // This is a simple lock to ensure that only one instance of the class is created.
    while (MongoDB.lock) {}
    MongoDB.lock = true;

    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }

    MongoDB.lock = false;
    return MongoDB.instance;
  }

  constructor() {
    if (MongoDB.instance) {
      return MongoDB.instance;
    }
    MongoDB.instance = this;
  }

  async connect() {
    mongoose
      .connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected successfully to MongoDB server");
      })
      .catch((err) => {
        console.error("Failed to connect with MongoDB server: ", err);
      });
  }

  async close() {
    await mongoose.connection.close();
    console.log("Connection to MongoDB server have been closed");
  }
}

//////=========================================================================
// EXPORT MODULE
module.exports = MongoDB;
