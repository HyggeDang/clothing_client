import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true)

  if (isConnected) {
<<<<<<< HEAD
    console.log("MongoDB is already connected");
=======
    console.log("MongoDB is already connected!");
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
<<<<<<< HEAD
      dbName: "H2CL_Store"
    })

    isConnected = true;
    console.log("MongoDB is connected");
=======
      dbName: "H2CL_Admin"
    })

    isConnected = true;
    console.log("MongoDB is connected!");
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
  } catch (err) {
    console.log(err)
  }
}