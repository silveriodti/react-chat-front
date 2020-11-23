import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addEmbedInUrl, parseStringHtml } from "../episodeUtils";
import { episodeOperations } from '../redux/index'
import * as Styled from "./styles";


interface Props {
  fetchEpisode: (id: string) => void
  episode: {
    id: number;
    date: string;
    shortDescription: string;
    fullDescriptionHtml: string;
    recordedVideoUrl: string;
  }
}

interface Params {
  id: string
}

function Episode({ fetchEpisode, episode }: Props) {
  const params: Params = useParams()


  useEffect(() => {
    fetchEpisode(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  return (
    <Styled.Container>
      <Styled.Titlle>{episode.shortDescription}</Styled.Titlle>
      <Styled.Date>{episode.date}</Styled.Date>
      <Styled.Content>{parseStringHtml(episode.fullDescriptionHtml)}</Styled.Content>
      <Styled.ContainerVideo>
        <Styled.ContainerFrame>
          <Styled.Iframe src={addEmbedInUrl(episode.recordedVideoUrl)} />
        </Styled.ContainerFrame>
      </Styled.ContainerVideo>
    </Styled.Container>
  )
}

const mapStateToProps = ({ episode }: Props) => ({
  episode
})

const mapDispatchToProps = {
  fetchEpisode: episodeOperations.fetchEpisode,
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode)