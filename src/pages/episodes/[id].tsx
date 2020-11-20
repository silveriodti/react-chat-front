import { NextPage } from 'next';
import { getAllEpisodes, getEpisode } from '../../services/apiClient';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { DetailedEpisode, NextAndPrevious } from '../../models/episodes';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../styles/ThemeProvider';
import { useRouter } from 'next/dist/client/router';

const EpisodePage: NextPage<{
  episode: DetailedEpisode;
  previousEpisode: DetailedEpisode;
  nextEpisode: DetailedEpisode;
}> = ({ episode, previousEpisode, nextEpisode }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <style jsx>{`
        a {
          color: ${theme.primary};
          display: flex;
          alignitems: center;
        }
      `}</style>
      <h1>{episode.shortDescription}</h1>
      <div>{ReactHtmlParser(episode.fullDescriptionHtml)}</div>
      <div>
        <a href={episode.recordedVideoUrl} target="blank">
          <h2>Assistir Gravação</h2>
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href={`/episodes/${previousEpisode && previousEpisode.id}`}>
          <a>
            {previousEpisode ? (
              <>
                <BiLeftArrowAlt />
                {previousEpisode.shortDescription}
              </>
            ) : (
              ''
            )}
          </a>
        </Link>
        <Link href={`/episodes/${nextEpisode && nextEpisode.id}`}>
          <a>
            {nextEpisode ? (
              <>
                {nextEpisode.shortDescription}
                <BiRightArrowAlt />
              </>
            ) : (
              ''
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const episodes = await getAllEpisodes();
  const paths = episodes.map((episode) => `/episodes/${episode.id}`);
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const episode = await getEpisode(params.id);

  const previousEpisode = await getEpisode(Number(params.id) - 1);
  const nextEpisode = await getEpisode(Number(params.id) + 1);

  return {
    props: {
      episode,
      title: episode.shortDescription,
      previousEpisode,
      nextEpisode,
    },
    revalidate: 1,
  };
};

export default EpisodePage;
