const createComment = async (comment) => fetch('/api/createComment', {
    body: JSON.stringify(comment),
    method: 'POST'
  })
.then(response => response.json())
.catch((error) => console.error(error));

const getCommentsBySession = async (id) => fetch(`/api/commentsBySession`, {
  body: JSON.stringify(id),
  method: 'POST'
})
.then(response => response.json())
.catch((error) => console.error(error));

const createLike = async (id) => fetch('/api/createLike', {
  body: JSON.stringify({data: {id: id, likes: 1}}),
  method: 'POST'
})
.then(response => response.json())
.catch((error) => console.error(error));

const getLikesById = async (id) => fetch(`/api/likesById`, {
  body: JSON.stringify(id),
  method: 'POST'
})
.then(response => response.json())
.catch((error) => console.error(error));

const likeIt = async (comment) => fetch(`/api/updateComment/${comment.ref['@ref'].id}`, {
  body: JSON.stringify({...comment, data: {...comment.data, likes: comment.data.likes+1}}),
  method: 'POST'
})
.then(response => response.json());

const likeImage = async (like) => fetch(`/api/updateLikes/${like.ref['@ref'].id}`, {
  body: JSON.stringify({...like, data: {...like.data, likes: like.data.likes+1}}),
  method: 'POST'
})
.then(response => response.json());

export const addLikeToCache = async(data) => {
  const myData = new Response(JSON.stringify(data));

  if ('caches' in window) {
    // Opening given cache and putting our data into it
    caches.open('likes').then((cache) => {
      cache.put('likes', myData);
    });
  }
};

export const getLikes = async() => {
if (typeof caches === 'undefined') return false;
const data = await (await caches.open('likes')).match('likes');
if(!data){
  return [];
}
const response = await data.json();
return response;
}

/* 

updateCommentServer({comments: [...comment.data.comments, {comment: myComment, author, date: new Date()}]}, comment.ref['@ref'].id)

export interface Data {
    text: string;
    author: {
      name: string;
    };
	sessionId: string;
    createdAt: Date;
}
  
export interface Comment {
    ref?: {
        "@ref": { 
            id: string 
        }
    };
    data: Data;
}
*/

export { createComment, getCommentsBySession, createLike, getLikesById, likeIt, likeImage }