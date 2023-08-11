import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

//Routes
app.use('/api/v1/dalle', dalleRoutes);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server' });
});

//Catch-all 404 route
app.use((req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({ message: 'something went wrong' });
});

app.listen(8080, () => console.log('Server has started on port 8080'));
