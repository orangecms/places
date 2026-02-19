'use client';

import { useEffect, useState } from "react";

const Main = ({ data }) => {
  const [map, setMap] = useState(null);
  // waku has no dynamic import (yet), but...
  useEffect(() => {
    import("./map").then((m) => setMap(m)).catch((e) => console.error(e));
    return () => null;
  }, []);

  return map && (
    <div style={{ flex: 1, border: "2px solid black" }}>
      {/* pweaze forgive this dirty hack */}
      <map.default data={data} />
    </div>
  );
}

export default Main;
