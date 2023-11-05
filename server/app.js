import express from 'express';
import appRouter from './routes/index.js';
// import cors from 'cors';

const app = express();

// app.use(cors({
// //   origin: 'https://rizztrainer.sahajsingh7.repl.co',
//   methods: ['GET', 'POST'],
//   credentials: true,
// }));

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next(); // Move to the next middleware or route handler
});

app.use(express.json());

app.use("/api", appRouter);

export default app;