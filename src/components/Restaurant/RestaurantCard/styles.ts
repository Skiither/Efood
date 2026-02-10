import styled from 'styled-components'
import { Colors } from '../../../styles'

export const RestaurantCardDiv = styled.div`
  max-width: 304px;
  width: 100%;
  color: ${Colors.BackgroundColor};
  background-color: ${Colors.TitleColor};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RestaurantCardImage = styled.img`
  max-width: 304px;
  max-height: 167px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RestaurantCardTitle = styled.h2`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const RestaurantCardDesc = styled.h3`
  font-size: 14px;
  font-weight: 400;
`

export const RestaurantCardAddButton = styled.button`
  width: 100%;
  background-color: ${Colors.BackgroundColor};
  color: ${Colors.TitleColor};
  padding: 4px 0;
  border: none;
  margin-top: 8px;
  cursor: pointer;
`
