import styled from "styled-components";

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  border: 1px solid ${({ theme }) => theme.color.light};
  height: 16.2rem;
  padding: 1.875rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin: 4.5rem auto 0 auto;
`;

export const Advantage = styled.div`
  height: 100%;
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Icon = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grayDark};
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.color.secondary};
`;
