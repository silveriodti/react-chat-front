import { NextPage } from 'next';
import { Episode } from '../models/episodes';
import { getAllEpisodes } from '../services/apiClient';
import CardEpisode from '../components/cardEpisode';

const IndexPage: NextPage<{ episodes: Episode[] }> = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode) => (
        <CardEpisode episode={episode} />
      ))}
    </div>
  );
};

export async function getStaticProps({ params }) {
  const episodes = await getAllEpisodes();
  return {
    props: { episodes: episodes, title: 'React Daily Chat' },
    revalidate: 1,
  };
}

export default IndexPage;
