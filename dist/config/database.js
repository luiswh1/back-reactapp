"use strict";require("dotenv").config({
    path: process.env.NODE_ENV === 'test'
        ? '.env.test' : '.env',
});

module.exports = {
    dialect: 'postgres',
    host: 'ec2-34-225-103-117.compute-1.amazonaws.com',
    username: 'xctzxbcwkkdqjk',
    password: '1d08ca5be94b6c901c83f2c40631384dad2ea50b34f7e7a76ef9d9be57fb6c35',
    database: 'd3h2299nf673mt',
    port: 5432,
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }
}