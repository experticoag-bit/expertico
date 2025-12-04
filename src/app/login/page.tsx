import { Navbar, Footer } from '@/components/marketing';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navbar />
      <main className='flex-1 flex items-center justify-center px-6'>
        <div className='w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-xl'>
          <h1 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Anmelden</h1>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>E-Mail</label>
              <input type='email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Passwort</label>
              <input type='password' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent' />
            </div>
            <button type='button' className='w-full py-2 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white rounded-lg font-semibold'>
              Einloggen
            </button>
          </form>
          <p className='mt-4 text-center text-sm text-gray-600'>
            Noch kein Konto? <Link href='/register' className='text-fuchsia-600 hover:underline'>Registrieren</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
