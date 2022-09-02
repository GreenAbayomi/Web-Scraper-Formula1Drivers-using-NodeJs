import { app } from "./app.js";
import { connectDB } from "./config/db.config.js";

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
