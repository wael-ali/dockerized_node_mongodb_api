// initialze application database with its owner user
db.createUser({
    user: _getEnv("MONGO_USERNAME"),
    pwd: _getEnv("MONGO_PASSWORD"),
    roles: [
        {
            role: 'dbOwner',
            db: _getEnv("MONGO_DB"),
        },
    ],
});