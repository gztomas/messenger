import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledContainer = styled.div`
  margin-bottom: 10px;

  .ant-list-item {
    padding: 5px;
  }
`;

export const Message = styled.div`
  border-radius: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  background: white;
  max-width: 100%;
`;

export const OwnMessage = styled(Message)`
  margin-left: auto;
  background: #3485f7;
  color: white;
`;

export const MessageContent = styled.div`
  padding: 6px 7px 8px 9px;
  word-wrap: break-word;
  white-space: pre-wrap;
  max-width: 300px;
`;
