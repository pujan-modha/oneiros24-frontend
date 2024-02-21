import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';
import SponsorImage from '../../components/SponsorImage';
import { sponsors } from '../../data/sponsors';
import SponsorsImg from '../../assets/sponsors.webp'
export default function Sponsors() {
  const currentSpons = [
    {
      image: '/sponsors/ubon.png',
      type: 'title-sponsor',
      link: 'https://ubon.in/',
    },
    {
      image: '/sponsors/PBN_Whitw.png',
      type: 'co-title-sponsor',
      link: 'https://punjabibynature.in/',
    },
    {
      image: '/sponsors/Ohi.png',
      type: 'registration',
      link: 'https://www.ohiapp.com/',
    },
    {
      image: '/sponsors/coke.png',
      type: 'beverage',
      link: 'https://www.coca-colacompany.com/',
    },

    {
      image: '/sponsors/sas.png',
      type: 'entertainment',
      link: 'https://www.facebook.com/sasdunes/about_details',
    },
    {
      image: '/sponsors/tribevibelogo.png',
      type: 'festival',
      link: 'https://tribevibe.live/',
    },
    {
      image: '/sponsors/redbull.png',
      type: 'energy-drink',
      link: 'https://www.redbull.com/in-en/',
    },
    {
      image: '/sponsors/dhampur.png',
      type: 'powered-by',
      link: 'https://www.dhampur.com/',
    },
    {
      image: '/sponsors/RiceCraft.png',
      type: 'powered-by',
      link: 'https://ricekraft.com/',
    },
    {
      image: '/sponsors/moodindigo.png',
      type: 'talent-showcase',
      link: 'https://moodi.org/',
    },
    {
      image: '/sponsors/songdew.png',
      type: 'talent',
      link: 'https://songdew.com/',
    },
    {
      image: '/sponsors/anandan.png',
      type: 'hospitality',
      link: 'https://www.lakmeindia.com/',
    },
    {
      image: '/sponsors/thelordplaza.png',
      type: 'hospitality',
      link: 'https://www.lordshotels.com/hotels/lords-plaza-jaipur',
    },
    {
      image: '/sponsors/Aperture.png',
      type: 'media',
      link: 'https://www.instagram.com/aperturemuj/',
    },
    {
      image: '/sponsors/rocky logo.png',
      type: 'virtual-gaming',
      link: '',
    },
    {
      image: '/sponsors/SleepyOwl.png',
      type: 'brewer',
      link: 'https://sleepyowl.co/?utm_source=Affiliate&utm_medium=Rainmaker_121&utm_campaign=September&gclid=CjwKCAjw7p6aBhBiEiwA83fGuu57GiZ_aobdz-7ms7V09oNHTsx5QMnMxKx9Duxz2RA-mqzu2nNClxoC78wQAvD_BwE',
    },
    {
      image: '/sponsors/tattootattva.png',
      type: 'arts',
      link: 'https://www.instagram.com/tattoo_tattva/?hl=en',
    },
  ];
  return (
    <div className="bg-[#fbedb6]">
      <Head>
        <title>Sponsors</title>
      </Head>
      <Header />
      <br />
      <br />
      <Image
        src={SponsorsImg}
        width={1920}
        height={314}
        alt="previous sponsors"
      />
      <div className="max-w-7xl mx-auto">
        {/* <h1
          style={{ color: '#37D6E9' }}
          className="font-stolzl text-center mt-6 text-5xl"
        >
          Sponsors
        </h1> */}
        <br></br>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Title Sponsor
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'title-sponsor' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link} target='_blank'>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="ohi"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Co Title Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'co-title-sponsor' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="ohi"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Registrations
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'registration' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Brewer Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'brewer' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Beverage Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'beverage' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Media Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'media' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Entertainment Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'entertainment' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Festival Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'festival' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{}}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Energy Drink Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'energy-drink' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Talent Showcase Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'talent-showcase' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Virtual Gaming Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'virtual-gaming' ? (
              <div key={_i} className="flex justify-center items-center">
                {/* <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}> */}
                <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                  <Image
                    src={sponsor.image}
                    layout="fill"
                    objectFit="contain"
                    alt="sponsor image"
                    // style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                {/* </a>
                </Link> */}
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Powered By
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'powered-by' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Talent Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'talent' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Hospitality Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'hospitality' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
        <h1 style={{ color: '#90212E' }} className="text-center mt-6 text-3xl">
          Arts and Entertainment Partner
        </h1>
        <main className="flex justify-center wrap flex-wrap mb-10">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'arts' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link legacyBehavior href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>

        <hr></hr>

        <h1
          style={{ color: '#90212E' }}
          className="font-stolzl text-center mt-10 text-5xl"
        >
          Previous Sponsors
        </h1>
        <br></br>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full  items-center pt-24">
          {sponsors.map((sponsor, _i) => (
            <div key={_i} className="flex justify-center items-center">
              <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150 ">
                <Image
                  src={sponsor.image}
                  layout="fill"
                  objectFit="contain"
                  alt="sponsor image"
                />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}