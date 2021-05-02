import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostComponent from './Post/PostComponent';
import PostContext from './PostContext';

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: darkgrey;
  border-radius: 4px;
  padding: 5px;
`;

const ContentView = () => {
  const [posts, setPosts] = useState({ data: [] });
  const FetchPostsFromFile = async () => {
    try {
      const response = await fetch('/posts.json');
      const json = await response.json();
      setPosts({ data: json.data });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect(async () => {
    await FetchPostsFromFile();
  }, []);

  return (
    <PostContainer>
      {posts.data.map(el => (
        <PostContext.Provider
          key={el.id}
          value={{
            title: el.title,
            name: el.name,
            location: el.location,
            number: el.number,
            date: el.date,
            whoAdded: el.whoAdded,
            description: el.description,
          }}
        >
          <PostComponent />
        </PostContext.Provider>
      ))}
    </PostContainer>
  );
};

export default ContentView;
