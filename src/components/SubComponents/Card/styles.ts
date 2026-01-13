import styled from 'styled-components'
import { Colors } from '../../../styles'

export const CardContainer = styled.div`
  position: relative;
  border: 1px solid ${Colors.TitleColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 100%;
  height: 224px;
  object-fit: cover;
`
export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: ${Colors.TitleColor};
  background-color: #fff;
  padding: 8px;
  height: 100%;
  padding-bottom: 16px;

  .TagItem {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;

  div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`

export const CardDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 32px;
`
