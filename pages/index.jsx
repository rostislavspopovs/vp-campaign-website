import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Point from '../components/Point'
import __data from '../data_tmp/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ross Popovs for VP Welfare & Education</title>
        <meta name="description" content="Hi! My name is Ross, although SUSU does require that I use my full name for the election.. so actually I’m Rostislavs." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#09111d" />
        <meta name="msapplication-TileColor" content="#09111d" />
        <meta name="theme-color" content="#0099FF" />

        <meta property="og:title" content="Ross Popovs for VP Welfare & Community" />
        <meta property="og:url" content="https://rosspopovs.com" />
        <meta property="og:description" content="Hi! My name is Ross, although SUSU does require that I use my full name for the election.. so actually I’m Rostislavs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/ChohZOH.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rosspopovs.com" />
        <meta property="twitter:title" content="Ross Popovs for VP Welfare & Community" />
        <meta property="twitter:description" content="Hi! My name is Ross, although SUSU does require that I use my full name for the election.. so actually I’m Rostislavs." />
        <meta property="twitter:image" content="https://i.imgur.com/ChohZOH.png" />
      </Head>
      <main>
        <section id="home" className="min-h-screen bg-white flex flex-col items-center justify-center relative">
          <svg className="w-full absolute top-0 left-0" viewBox="0 0 1921 312" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1921 213.927L1856.97 185.505C1792.93 156.549 1664.87 100.505 1536.8 121.454C1408.73 143.205 1280.67 241.949 1152.6 285.049C1024.53 327.349 896.467 314.005 768.4 285.049C640.333 256.627 512.267 213.927 384.2 171.227C256.133 128.527 128.067 85.8266 64.0333 64.4766L2.34995e-05 43.1265L2.72315e-05 0.426559L64.0334 0.426565C128.067 0.426571 256.133 0.426582 384.2 0.426593C512.267 0.426604 640.333 0.426615 768.4 0.426627C896.467 0.426638 1024.53 0.426649 1152.6 0.42666C1280.67 0.426671 1408.73 0.426682 1536.8 0.426694C1664.87 0.426705 1792.93 0.426716 1856.97 0.426722L1921 0.426727L1921 213.927Z" fill="#0099FF" />
          </svg>
          <div className="w-5/6 lg:w-4/6 h-full flex flex-col items-center justify-center relative">
            <Image src={'/logo_text.svg'} width={1458} height={589} />
          </div>
          <Link href="#about">
            <svg className="absolute bottom-12 animate-bounce cursor-pointer" width="54" height="24" viewBox="0 0 54 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 24L0.153216 -5.05713e-06L53.8468 -3.63085e-07L27 24Z" fill="#239BFA" />
            </svg>
          </Link>

        </section>
        <section className="bg-slate min-h-screen flex flex-col items-center justify-center">
          <svg className="w-full" viewBox="0 0 1920 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1920 248.5L1856 215.419C1792 181.716 1664 116.484 1536 140.869C1408 166.184 1280 281.116 1152 331.282C1024 380.516 896 364.984 768 331.281C640 298.2 512 248.5 384 198.8C256 149.1 128 99.3999 64 74.5499L1.71889e-05 49.6999L1.99187e-05 -5.3541e-05L64 -4.46355e-05C128 -3.573e-05 256 -1.79191e-05 384 -1.08172e-07C512 1.77028e-05 640 3.55137e-05 768 5.33246e-05C896 7.11356e-05 1024 8.89465e-05 1152 0.000106757C1280 0.000124568 1408 0.000142379 1536 0.00016019C1664 0.000178001 1792 0.000195812 1856 0.000204718L1920 0.000213623L1920 248.5Z" fill="white" />
          </svg>

          <div id="about" className="w-5/6 lg:w-4/6 h-full py-10 my-10 grid grid-cols-12 gap-8">
            <div className="flex flex-col justify-center col-span-12 lg:col-span-7">
              <h1 className="font-title text-white text-3xl pb-4">{__data.about.title}</h1>
              {__data.about.body.map((p, i) => (
                <p className="text-white70 text-lg lg:text-xl 2xl:text-2xl" key={i}>{p}</p>
              ))}
            </div>
            <div className="flex justify-center items-baseline col-span-12 lg:col-span-5 relative">
              <Image
                className="w-full"
                width={282}
                height={400}
                src={'/me_with_arrow.svg'}
                alt="Ross Popovs"
              />
            </div>
          </div>
          <svg className="w-full" viewBox="0 0 1920 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 118.6L64 158C128 197.4 256 276.2 384 309.074C512 341.456 640 329.144 768 289.374C896 250.344 1024 183.856 1152 151.474C1280 118.6 1408 118.6 1536 98.8999C1664 79.1999 1792 39.7999 1856 20.0999L1920 0.399902V355H1856C1792 355 1664 355 1536 355C1408 355 1280 355 1152 355C1024 355 896 355 768 355C640 355 512 355 384 355C256 355 128 355 64 355H0V118.6Z" fill="#FF4D4F" />
          </svg>
        </section>
        {__data.points.map((p, i) => {
          return (
            <Point
              background={p.background}
              text={p.text}
              title={p.title}
              number={i + 1}
              key={i}
            >
              {p.body}
            </Point>
          )
        })}
        <section className="flex flex-col items-center justify-center relative bg-slate">
          <svg className="w-full top-0 left-0" viewBox="0 0 1920 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 198.7L64 215.887C128 232.431 256 267.769 384 275.8C512 283.831 640 267.769 768 224.4C896 181.031 1024 113.569 1152 78.7131C1280 44.5 1408 44.5 1536 78.7131C1664 113.569 1792 181.031 1856 215.887L1920 250.1V0H1856C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0H0V198.7Z" fill="#2A66FF" />
          </svg>
          <div className="w-5/6 lg:w-4/6 h-full flex flex-col items-center justify-center relative py-10 my-10">
            <h1 className="font-title text-white text-3xl lg:text-4xl 2xl:text-6xl pb-4">{__data.contact.title}</h1>

          </div>
          <div className="w-full text-white flex justify-center items-center py-4 text-xs" style={{ background: '#050C16' }}>
            Built with 💜 by &nbsp;
          <Link href="https://tommitchelmore.com"><a target="_blank" rel="noopener" className="underline">Thomas Mitchelmore</a></Link>&nbsp;
          <Link href="https://github.com/rostislavspopovs/vp-campaign-website"><a target="_blank" rel="noopener" className="hover:underline">(Source)</a></Link>
          </div>
        </section>
      </main>
    </>
  )
}
