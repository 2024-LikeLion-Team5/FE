import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  margin-top: 1rem;
`;

const Post = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.g3};
  }
`;

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <Post key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </Post>
      ))}
    </List>
  );
};

export default PostList;
