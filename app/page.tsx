import AndroidScreen from './components/AndroidScreen'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Portfolio Website</title>
        <link rel="icon" href="/public/favicon.ico" /> {/* Resume/document icon */}
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-900 p-4 lg:p-8">
        <AndroidScreen />
      </main>
    </>
  );
}

