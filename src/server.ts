import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDb } from "../src/config/db";
import { errorHandler } from "./utils/errorHandler";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

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
app.get('/', (req, res) => {
  res.send('Hello ! This is a GET request.--------------------------------');
});
const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

// Endpoint to send dummy user data
app.get("/product", (req, res) => {
  res.json(dummyUsers);
});

// Error handling middleware




app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
