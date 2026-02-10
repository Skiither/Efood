import styled from "styled-components";

export const EntregaInfoDivGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 32px;
`

export const EntregaInfoDivGridMesAno = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
`
export const ErrorTooltip = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #e74c3c;
  color: #fff;
  padding: 5px 8px;
  font-size: 11px;
  border-radius: 5px;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent #e74c3c transparent transparent;
  }
`;
