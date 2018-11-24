import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  background: #eaedf2;
  border-bottom: solid 1px #dcdada;
`;

export const StyledFooter = styled(Footer)`
  padding: 10px 50px;
  border-top: solid 1px #dcdada;
`;

export const StyledContent = styled(Content)`
  display: flex;
  padding: 0 50px;
  overflow: scroll;
  background: linear-gradient(to right, #f4f8fa, #e4e8ea);
  flex-direction: column-reverse;
`;

export const StyledSider = styled(Sider)`
  background: #262a2f;
  padding-top: 10px;
`;
