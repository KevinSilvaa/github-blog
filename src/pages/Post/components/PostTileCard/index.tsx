// Styling Imports
import {
  PostTitleCardContainer,
  PostTitleCardLinks,
  PostTitleCardInfos,
  PostTitleCardExtraInfos,
} from './styles'

// Strategic Imports
import { PostDataProps } from '../../'
import { Link, useNavigate } from 'react-router-dom'

// Icons Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DateFormatter } from '../../../../utils/DateFormatter'

export function PostTitleCard({ data }: PostDataProps) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <PostTitleCardContainer>
      <PostTitleCardLinks>
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span>
        </button>

        <Link to={data.html_url} target="_blank">
          <span>Ver no Github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostTitleCardLinks>

      <PostTitleCardInfos>
        <h2>{data.title}</h2>

        <PostTitleCardExtraInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data.user?.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{data.created_at && DateFormatter(data.created_at)}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {data.comments}{' '}
              {data.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
        </PostTitleCardExtraInfos>
      </PostTitleCardInfos>
    </PostTitleCardContainer>
  )
}
