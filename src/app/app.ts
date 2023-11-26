import express, { Express } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.listen(port, async () => {
  if (!port) {
    console.error('Fatal: Unable to get environment variables');
    return;
  }
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to database');
  } catch (error) {
    console.error('Fatal: Unable to connect to the database:', error);
    return;
  }
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
