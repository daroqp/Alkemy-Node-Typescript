import express, { Application } from 'express';
import cors from 'cors';

export class Server {
    private app: Application;
    private port: string;
    private paths = {
        auth: '/api/auth/login'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {
        this.app.get( this.paths.auth, (_req, res) => res.send('login') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( `** Server running on port ${this.port} **` );
        })
    }
}