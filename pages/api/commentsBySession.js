/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

export default function handler(
  request,
  response
) {
  const client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNADB_ADMIN_SECRET
  }) 
  const sessionId = JSON.parse(request.body);
  console.log(sessionId);

  return client.query(q.Paginate(q.Match(q.Index('comments_by_id'), sessionId)))
    .then((resp) => {
      const refs = resp.data
      console.log('comments refs', refs)
      console.log(`${refs.length} comments found`)
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllDataQuery = refs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllDataQuery).then((ret) => {
        response.status(200).json({
          body: ret,
          query: request.query,
          cookies: request.cookies,
        });
      })
    }).catch((error) => {
      console.log('error', error)
      response.status(400).json({
          body: error,
          query: request.query,
          cookies: request.cookies,
        });
    })
  
}
