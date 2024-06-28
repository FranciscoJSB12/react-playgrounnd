import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMoveMouse = ({ x, y }: MouseEvent) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMoveMouse);

    return () => {
      window.removeEventListener('mousemove', onMoveMouse);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};
