import express from 'express';
import routes from './routes/products.routes';
import errorMiddleware from './middlewares/error.middleware';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors(options));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errorMiddleware);
  }
}

export default new App().server;