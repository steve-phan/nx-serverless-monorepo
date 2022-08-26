import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  company: string;
}

const StyledHeader = styled.div`
  color: pink;
`;

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>Welcome to Header! {props.company}</h1>
    </StyledHeader>
  );
};
