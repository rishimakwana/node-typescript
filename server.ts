import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDb } from "./src/config/db";
import { errorHandler } from "./src/utils/errorHandler";
import AdminRoutes from "./src/routes/AdminRoutes";
import UserRoutes from "./src/routes/UserRoutes";

const app = express();
const PORT = process.env.PORT || 3001;


// Connect to the database
connectDb()

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/admin", AdminRoutes);
app.use("/api/", UserRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
