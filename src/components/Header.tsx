import { NextPage } from 'next';
import { Episode } from '../models/episodes';
import { ThemeContext } from '../styles/ThemeProvider';
import Link from 'next/link';
import { useContext, useState } from 'react';
import Switch from 'react-switch';
import themes from '../styles/themes';
import { BiSun, BiMoon } from 'react-icons/bi';

const Header: NextPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const handleChange = (c) => {
    setChecked(c);
    toggleTheme();
  };
  return (
    <header>
      <div>
        <Link href={'/'}>
          <a>
            <h1 style={{ cursor: 'pointer' }}>React Daily Chat</h1>
          </a>
        </Link>
      </div>
      <div>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          offColor={themes.light.background}
          onColor={themes.dark.background}
          offHandleColor={themes.light.primary}
          onHandleColor={themes.dark.primary}
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'black',
                paddingRight: 2,
              }}
            >
              <BiSun />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'white',
                paddingRight: 2,
              }}
            >
              <BiMoon />
            </div>
          }
        />
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-top: 1rem;
          align-items: center;
        }
      `}</style>
    </header>
  );
};

export default Header;
