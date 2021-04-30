import { createContext } from 'react';

const postInfo = {
  title: '???',
  name: 'none',
  location: 'none',
  number: '666666666',
  date: 'none',
  whoAdded: 'none',
  description: 'none',
};

const PostContext = createContext(postInfo);

export default PostContext;
