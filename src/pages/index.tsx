import Main from '../components/main';

export default async function HomePage() {
  return (
    <Main />
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
