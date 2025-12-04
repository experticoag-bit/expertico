import { Navbar, Footer } from '@/components/marketing';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main className='pt-32 pb-20 px-6 max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6 capitalize'>imprint</h1>
        <p className='text-xl text-gray-600'>Diese Seite ist im Aufbau.</p>
      </main>
      <Footer />
    </div>
  );
}
