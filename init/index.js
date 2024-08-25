const mongoose = require("mongoose");
const initData = require("../init/data");
const Listing = require("../models/listing.js");

const atlasUrl =
  "mongodb+srv://upadhyayansh11:Lr6qUHQ3vlD8doiB@cluster0.rldi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(
    "mongodb+srv://upadhyayansh11:Lr6qUHQ3vlD8doiB@cluster0.rldi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66cae763a5251328fd6a335e",
  }));

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
