module.exports = {
  HOST: "ec2-54-163-34-107.compute-1.amazonaws.com",
  USER: "sgbvyembcptlfk",
  PASSWORD: "cf6545aa7edebfcf3c6af16367624adf37b58838bf264bd84a52307ec65c8b27",
  DB: "d47pamsm14trhq",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};
