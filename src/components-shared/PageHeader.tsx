import styled from 'styled-components';

const BASE = 8;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${BASE * 5}px;
  justify-content: space-between;
`;