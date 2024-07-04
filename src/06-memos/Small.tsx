import { memo } from 'react';

interface Props {
  value: number;
}

export const Small = memo(({ value }: Props) => {
  // console.log('Hola');

  return <small>{value}</small>;
});
