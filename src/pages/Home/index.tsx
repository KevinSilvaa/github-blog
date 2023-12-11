// Styling Imports
import { HomeContainer, PostsSection, PostsCardContainer } from './styles'

// Components Imports
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

// Strategic Imports
import { api } from '../../lib/api'
import { useCallback, useEffect, useState } from 'react'
import { ProfileCard, UserProps } from './components/ProfileCard'

export interface PostProps {
  user: UserProps[];
  length: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get(`search/issues?q=${query ? query + "%20" : ""}repo:KevinSilvaa/github-blog`)

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const postsLength = posts.length;

  let numberOfPostsText: string
  if (postsLength > 1) {
    numberOfPostsText = "publicação"
  } else {
    numberOfPostsText = "publicações"
  }

  return (
    <HomeContainer>
      <ProfileCard />

      <PostsSection>
        <SearchForm
          fetchPosts={fetchPosts}
          postsLength={postsLength}
          numberOfPostsText={numberOfPostsText}
        />

        <PostsCardContainer>
          {postsLength > 0 && (
            posts.map(post => (
              <PostCard
                key={post.number}
                data={post}
              />
            ))
          )}
        </PostsCardContainer>
      </PostsSection>
    </HomeContainer>
  )
}
