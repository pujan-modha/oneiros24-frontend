import React from 'react';
import { sponsors } from '../data/sponsors';
import Image from 'next/image';

const SponsorImage = () => {
  return (
    <div>
      {sponsors.map((sponsor, _i) => {
        return (
          <Image
            key={_i}
            src={sponsor.image}
            layout="fill"
            objectFit="contain"
            alt="sponsor image"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        );
      })}
    </div>
  );
};

export default SponsorImage;