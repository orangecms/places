import { Link } from 'waku';

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img alt="CCC logo" src="/images/ccc-header.png" />

          Hack the planet!
        </Link>
      </h1>
    </header>
  );
};
