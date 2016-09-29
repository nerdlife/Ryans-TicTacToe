module.exports = {
    servers: {
        one: {
        // host: 'nope',
        username: 'root',
        // pem: "good luck"
        }
    },
setupMongo: true,
setupNode: true,
nodeVersion: "0.10.40",

meteor: {
    name: 'nerdlifeio',
    path: '../',
    servers: {
        one: {}
    },
    buildOptions: {
        setupMongo: true,
        setupNode: true,
        nodeVersion: "0.10.40",
        setupPhantom: true
    },
    env: {
        ROOT_URL: "http://localhost",
        PORT: 3000,
        UPSTART_UID : "meteoruser",
        METEOR_ENV: "production"
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
    },

    mongo: {
        oplog: true,
        port: 27017,
        servers: {
            one: {},
        },
    },
};
