/* Import faunaDB sdk */
const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/app_config"))))
    .then((response) => {
      const todoRefs = response.data;
      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref);
      });
      return client.query(getAllTodoDataQuery).then((ret) => {
        return {
          statusCode: 200,

          body: JSON.stringify(ret),
        };
      });
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,

        body: JSON.stringify(error),
      };
    });
};
