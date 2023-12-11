// Styling Imports
import { PostContainer } from './styles'

// Componets Imports
import { PostTitleCard } from './components/PostTileCard'

// Strategic Imports
import { useState, useCallback, useEffect } from 'react'
import { PostsProps } from '../Home'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/api'
import { PostContentCard } from './components/PostContentCard'

export interface PostDataProps {
  data: PostsProps
}

export function Post() {
  const [postData, setPostData] = useState<PostsProps>({} as PostsProps)

  const { id } = useParams()

  const fetchPosts = useCallback(async () => {
    const response = await api.get(`/repos/KevinSilvaa/github-blog/issues/${id}`)

    setPostData(response.data);
  }, [id])

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts])

  return (
    <PostContainer>
      <PostTitleCard data={postData} />

      <PostContentCard data={postData} />
    </PostContainer>
  )
}
