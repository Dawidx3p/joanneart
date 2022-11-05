/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

export default function handler (request, response) {
  console.log('creating like');
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNADB_ADMIN_SECRET
  }) 
  const data = JSON.parse(request.body)
  return client.query(
    q.Create(
      q.Collection('likes'),
      { ...data }
    )
  )
  .then(ret => {
    console.log('success', ret)
      response.status(200).json({
        body: ret,
        query: request.query,
        cookies: request.cookies,
      })
  })
  .catch((error) => {
    console.log('error', error)
    response.status(400).json({
      body: error,
      query: request.query,
      cookies: request.cookies,
    })
  })
}
