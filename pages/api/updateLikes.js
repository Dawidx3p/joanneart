/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query
const getId = require('./utils/getId');

export default function handler (request, response) {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNADB_ADMIN_SECRET
  }) 
  const data = JSON.parse(request.body);
  const id = data.ref['@ref'].id;
  console.log(`Function 'likes-update' invoked. update id: ${id}`);
  return client.query(q.Update(q.Ref(`classes/likes/${id}`), { data: data.data}))
    .then((ret) => {
      console.log('success', ret)
      response.status(200).json({
        body: ret,
        query: request.query,
        cookies: request.cookies,
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
