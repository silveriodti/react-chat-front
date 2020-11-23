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


// {/* <div style='max-width: 853px'>
//   <div style='position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;'> */}
//   <iframe
//   width="853"
//   height="480"
//   src={episode.recordedVideoUrl}
//   "https://web.microsoftstream.com/embed/video/35940338-cce9-438f-ac36-2a6a0f5e40b3?autoplay=false&amp;showinfo=true" 
//   allowfullscreen
// // style={{"border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"}}
// />
// {/* </div>
// </div> */}