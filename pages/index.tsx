import Head from 'next/head'

const posts = [

  { title: 'React Testing', exerpt: 'Learn React Testing'},
  { title: 'React with Tailwind', exerpt: 'Learn React with Tailwind'}

];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>ŽP Vlára Slavičín</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12"></div>

        {posts.map((post, idex) => (
          
          <div>

            {post.title}
            {post.exerpt}

          </div>

        ))}

    </div>
  )
}
