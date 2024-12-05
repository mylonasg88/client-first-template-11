import { ReactNode } from 'react';

type FeaturesBoxProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function FeaturesBox({
  title,
  description,
  icon,
}: FeaturesBoxProps) {
  return (
    <div className='flex flex-col items-start justify-center p-4'>
      <div className='flex flex-row items-center justify-center'>{icon}</div>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-center'>{description}</p>
    </div>
  );
}
