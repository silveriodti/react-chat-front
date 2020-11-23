import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { episodesListOperations } from "../redux"
import * as Styled from './styles'

interface Props {
  fetchEpisodes: () => void
  episodes: {
    id: number;
    date: string;
    shortDescription: string;
  }[]
}

function Main({ fetchEpisodes, episodes }: Props) {
  const history = useHistory()
  const hasEpisodes = () => !!Object.keys(episodes).length


  useEffect(() => {
    if (!hasEpisodes()) {
      fetchEpisodes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episodes])

  return (
    <>
      <Styled.Tittle>Lista de Episódios</Styled.Tittle>
      {hasEpisodes() &&
        episodes.map(ep => (
          <Styled.Container
            key={ep.id}
            onClick={() => history.push(`/${ep.id}`)}
          >
            <Styled.TittleCard>{ep.shortDescription}</Styled.TittleCard>
            <Styled.Date>{ep.date}</Styled.Date>
          </Styled.Container>
        ))
      }
    </>
  )
}
const mapStateToProps = ({ episodes }: Props) => ({
  episodes
})

const mapDispatchToProps = {
  fetchEpisodes: episodesListOperations.fetchEpisodes,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
