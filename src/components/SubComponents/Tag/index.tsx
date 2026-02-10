import { Link } from 'react-router'
import { TagItem } from './styles'

type Props = {
  title: string
  link?: string
}
export const Tag = ({ title, link }: Props) => {
  return (
    <>
      <div className="TagItem">
        <TagItem>
          <Link to={`/${link}`}>{title}</Link>
        </TagItem>
      </div>
    </>
  )
}
