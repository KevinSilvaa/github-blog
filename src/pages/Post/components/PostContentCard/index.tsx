// Styling Imports
import { PostContentCardContainer, PostContentCardDetails } from './styles'

// Strategic Imports
import { PostDataProps } from '../..'
import Markdown from 'react-markdown'

export function PostContentCard({ data }: PostDataProps) {
  return (
    <PostContentCardContainer>
      <PostContentCardDetails>
        <Markdown>{data.body && data.body}</Markdown>
      </PostContentCardDetails>
    </PostContentCardContainer>
  )
}
