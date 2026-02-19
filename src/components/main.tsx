'use client';

import { useEffect, useState } from "react";

const getData = async () => {
  try {
    const data = await fetch("/data.json");
    return data.json();
  } catch (e) {
    console.error("ERROR", e);
  }
  return { places: [] };
};


const Main = () => {
  const [data, setData] = useState({ places: [] });
  const [map, setMap] = useState(null);
  // waku has no dynamic import (yet), but...
  useEffect(() => {
    import("./map").then((m) => setMap(m)).catch((e) => console.error(e));
    return () => null;
  }, []);

  useEffect(() => {
    getData().then((d) => setData(d));
  }, []);

  return map && (
    <div style={{ flex: 1, border: "2px solid black" }}>
      {/* pweaze forgive this dirty hack */}
      <map.default data={data} />
    </div>
  );
}

export default Main;
