import { NextPage } from 'next';
import { Episode } from '../models/episodes';
import { ThemeContext } from '../styles/ThemeProvider';
import Link from 'next/link';
import { useContext } from 'react';

const EpisodePage: NextPage<{ episode: Episode }> = ({ episode }) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Link href={`/episodes/${episode.id}`}>
        <a>
          <h1 style={{ cursor: 'pointer' }}>{episode.shortDescription}</h1>
        </a>
      </Link>
      <p>{episode.date}</p>
    </div>
  );
};

export default EpisodePage;
