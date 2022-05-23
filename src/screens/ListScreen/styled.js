import styled from "styled-components"
import chroma from "chroma-js";
import  css from "styled-components";

export const JobsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 2fr);
    margin: 12px;
`

export const FiltersContainer = styled.div`
    display: grid;
    justify-content: space-between;
    margin: 32px 24px 0 24px;
    grid-template-columns: repeat(6, 2fr);
`
export const CartListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 2fr);
    margin: 12px;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px
`;
