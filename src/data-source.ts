import { DataSource } from "typeorm";
    require('dotenv').config()
    
    export const AppDataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: 5432,
        username: 'docker',
        password: 'postgres',
        database: 'postgres_db',
        url: process.env.DB_HOST,
        ssl: process.env.NODE_ENV === "production" ?
            { rejectUnauthorized: false}
            : false,
        synchronize: false,
        logging: true,
        entities: process.env.NODE_ENV === "production"
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
        })
