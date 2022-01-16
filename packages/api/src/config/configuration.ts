export default () => ({
  database: {
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rjize.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
});
