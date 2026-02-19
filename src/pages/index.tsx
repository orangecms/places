import Main from '../components/main';

export default async function HomePage() {
  const data = await getData();

  return (
    <Main data={data} />
  );
}

const getData = async () => {
  const data = {
    places: [
      { name: "Chaospott", lat: 51.4385395, lon: 7.022488 },
      { name: "DWD Essen", lat: 51.40567, lon: 6.9671 },
      { name: "Das Labor", lat: 51.4809152, lon: 7.2059925 },
    ],
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
