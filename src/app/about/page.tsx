import { Navbar, Footer } from '@/components/marketing';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main className='pt-32 pb-20 px-6 max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6'>Über Expertico</h1>
        <p className='text-xl text-gray-600'>Wir revolutionieren die Art und Weise, wie KMUs arbeiten.</p>
      </main>
      <Footer />
    </div>
  );
}
