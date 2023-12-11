// Styling Imports
import { PostCardContainer, PostCardHeading } from './styles'

// Strategic Imports
import { PostsProps } from '../..'
import { DateFormatter } from '../../../../utils/DateFormatter'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  data: PostsProps
}

export function PostCard({ data }: PostCardProps) {
  const navigate = useNavigate()

  function handleNavigatePostDetails() {
    navigate(`/post/${data.number}`)
  }

  return (
    <PostCardContainer onClick={handleNavigatePostDetails}>
      <PostCardHeading>
        <h2>{data.title}</h2>
        <span>{data.created_at && DateFormatter(data.created_at)}</span>
      </PostCardHeading>

      <p>{data.body}</p>
    </PostCardContainer>
  )
}
