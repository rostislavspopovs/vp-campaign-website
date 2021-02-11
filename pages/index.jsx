import Head from 'next/head'
import Point from '../components/Point'
import __data from '../data_tmp/points'

export default function Home() {
  return (
    <main>
      <section id="home">

      </section>
      <section id="about" className="bg-slate min-h-screen">

      </section>
      {__data.map((p, i) => {
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
    </main>
  )
}
