require('dotenv').config();

process.env.PORT = process.env.PORT || 3000;
process.env.DB_HOST = process.env.DB_HOST || 'localhost';
process.env.DB_USER = process.env.DB_USER || 'root';
process.env.DB_PASS = process.env.DB_PASS || 'root';
process.env.DB_NAME = process.env.DB_NAME || 'angujarjs_app_test';
