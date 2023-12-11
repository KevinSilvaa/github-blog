// Styling Imports
import {
  ProfileCardContainer,
  ProfileInfos,
  ProfileInfosHeader,
  ProfileInfosFooter,
} from './styles'

// Strategic Imports
import { useState, useEffect, useCallback } from 'react'
import { api } from '../../../../lib/api'
import { Link } from 'react-router-dom'

// Icons Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export interface UserProps {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  location: string
  followers: number
}

export function ProfileCard() {
  const [user, setUser] = useState<UserProps>({
    name: '',
    avatar_url: '',
    html_url: '',
    bio: '',
    login: '',
    location: '',
    followers: 0,
  })

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/KevinSilvaa')

    const {
      name,
      avatar_url: avatarURL,
      // eslint-disable-next-line camelcase
      html_url,
      bio,
      login,
      location,
      followers,
    } = response.data

    const filteredData = {
      name,
      avatar_url: avatarURL,
      // eslint-disable-next-line camelcase
      html_url,
      bio,
      login,
      location,
      followers,
    }

    setUser(filteredData)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileCardContainer>
      <img
        src={user.avatar_url}
        alt="Foto do perfil de Kevin SIlvaa No Github"
      />

      <ProfileInfos>
        <ProfileInfosHeader>
          <h2>{user.name}</h2>

          <Link to={user.html_url} target="_blank">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileInfosHeader>

        <p>{user.bio}</p>

        <ProfileInfosFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{user.location}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {user.followers}{' '}
              {user.followers === 1 ? 'seguidor' : 'seguidores'}
            </span>
          </div>
        </ProfileInfosFooter>
      </ProfileInfos>
    </ProfileCardContainer>
  )
}
