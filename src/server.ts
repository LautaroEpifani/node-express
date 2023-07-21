import { PORT, app } from "./app";
import mongoose from "mongoose";

//connect to mongoDb
const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Connect to db and listening... on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

connectDb();

export default connectDb;
