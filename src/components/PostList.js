// import React from 'react';
// import styled from 'styled-components';

// const List = styled.div`
//   margin-top: 1rem;
// `;

// const Post = styled.div`
//   padding: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   cursor: pointer;
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.g3};
//   }
// `;

// const PostList = ({ posts }) => {
//   return (
//     <List>
//       {posts.map((post) => (
//         <Post key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </Post>
//       ))}
//     </List>
//   );
// };

// export default PostList;
// PostList.js
// PostList.js
import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
`;

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.g1};
  color: white;
`;

const Th = styled.th`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.g2};
  text-align: center;
`;

const Tbody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.g3};
`;

const Tr = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.g2};
  }
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.g2};
  text-align: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageNumber = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.g1};
  color: white;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.g2};
  }
`;

const PostList = ({ posts }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <tr>
            <Th>구분</Th>
            <Th>제목</Th>
            <Th>작성일</Th>
            <Th>좋아요</Th>
            <Th>조회수</Th>
          </tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.type}</Td>
              <Td>{post.title}</Td>
              <Td>{post.date}</Td>
              <Td>{post.likes}</Td>
              <Td>{post.views}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
        <PageNumber>{'>'}</PageNumber>
      </Pagination>
    </TableContainer>
  );
};

export default PostList;

