import Link from 'next/link';

const plans = [
  {
    id: 'explore',
    name: 'EXPLORE',
    price: 'CHF 0',
    period: 'Pilot / ab Anfrage',
    features: ['Telefon & E‑Mail Basis', 'Dashboard & Logs', 'Standard Onboarding'],
    highlight: false,
  },
  {
    id: 'grow',
    name: 'GROW',
    price: 'CHF 249',
    period: '/ Monat',
    features: ['Alles aus EXPLORE', 'Marketing Agent', 'Lead-Qualifizierung', 'Reports'],
    highlight: true,
  },
  {
    id: 'integrate',
    name: 'INTEGRATE',
    price: 'auf Anfrage',
    period: '',
    features: ['Volle Integration', 'Backoffice & Buchhaltung', 'Agent of Agents', 'SLA & Support'],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-md">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-500">Preise</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Moderne Preispläne — klar, transparent, flexibel</h2>
          <p className="mt-2 text-gray-600">Wähle das passende Paket für dein KMU. Monatlich kündbar oder individuell integriert.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl p-6 border ${plan.highlight ? 'border-fuchsia-200 shadow-xl' : 'border-gray-100 shadow-sm'} bg-gradient-to-b from-white to-[rgba(255,255,255,0.95)]`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-gray-400">{plan.name}</div>
                </div>
                {plan.highlight && (
                  <div className="text-xs font-semibold rounded-full bg-fuchsia-50 text-fuchsia-600 px-3 py-1">Empfohlen</div>
                )}
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{plan.id === 'explore' ? 'Ideal zum Testen' : plan.id === 'grow' ? 'Skalierbar & beliebt' : 'Voll integrierte Lösung'}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1 text-sm text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-fuchsia-500/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/register"
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 font-semibold text-white transition-all ${plan.highlight ? 'bg-gradient-to-r from-fuchsia-600 to-orange-500 shadow-lg hover:shadow-xl hover:brightness-110 active:scale-95' : 'bg-fuchsia-500/80 hover:bg-fuchsia-600 hover:shadow-md active:scale-95'}`}
                >
                  {plan.highlight ? 'Loslegen' : 'Mehr erfahren'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

