import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDb } from "../src/config/db";
import { errorHandler } from "./utils/errorHandler";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';

const app = express();
const PORT = process.env.PORT || 3001;


// Connect to the database
connectDb()

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api", UserRoutes);
app.use("/admin", AdminRoutes);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
