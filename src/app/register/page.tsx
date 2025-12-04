'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/marketing';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const subject = encodeURIComponent('Expertico Account erstellen');
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nWunsch: Kostenlosen Account erstellen`
    );
    window.location.href = `mailto:hello@expertico.ch?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Kostenlos starten</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-500 py-2 font-semibold text-white shadow"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Wird geöffnet…' : 'Account erstellen'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-700">
              Ihre E-Mail-App sollte sich öffnen. Senden Sie die Nachricht ab, und wir melden uns umgehend.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
              Bitte füllen Sie alle Felder aus.
            </p>
          )}
          <p className="mt-4 text-center text-sm text-gray-600">
            Bereits registriert?{' '}
            <Link href="/login" className="text-fuchsia-600 hover:underline">
              Anmelden
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
