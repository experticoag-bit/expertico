import { Pricing } from '@/components/marketing/Pricing';
import MaterialNavbar from '@/components/marketing/MaterialNavbar';
import MaterialHero from '@/components/marketing/MaterialHero';

const stats = [
  { label: 'Telefon & E-Mail entlastet', value: '24/7' },
  { label: 'Aktive Agenten', value: '30+' },
  { label: 'DSGVO / CH-DSG', value: '100%' },
];

const painPoints = [
  'Zu viele Anfragen, zu wenig Zeit, alles sauber zu beantworten.',
  'Mehr Leads & Kundennähe, aber nicht noch mehr Stunden in Mails, Telefon & Marketing investieren.',
  'Sie wünschen sich Unterstützung wie von einer Praktikantin – nur verlässlich, strukturiert und 24/7.',
];

const agentTeam = [
  {
    title: 'Rezeption / Telefon-Agent',
    description:
      'Nimmt Anrufe entgegen, klärt Anliegen, macht strukturierte Notizen und bucht bei Bedarf Termine.',
  },
  {
    title: 'E-Mail-Antwort-Agent',
    description:
      'Überwacht Posteingänge in Gmail/Outlook und erstellt Antwortentwürfe inkl. Zusammenfassung & Tags.',
  },
  {
    title: 'Marketing-Agent (Basis)',
    description:
      'Unterstützt Posts, Newsletter und einfache Kampagnen – damit Ihr Unternehmen sichtbar bleibt.',
  },
  {
    title: 'Lead- & Terminierungs-Agenten',
    description:
      'Qualifizieren Anfragen vor, schlagen Termine vor und tragen bestätigte Slots direkt in Ihren Kalender ein.',
  },
  {
    title: 'Backoffice- & Buchhaltungs-Agenten',
    description:
      'Lesen Belege (OCR), ordnen sie zu und protokollieren Vorgänge für Treuhand & Buchhaltung.',
  },
  {
    title: 'Agent of Agents',
    description:
      'Ihre zentrale Steuerung: zeigt Aktivitäten, Status und Freigaben aller KI-Agenten in Echtzeit.',
  },
];

const process = [
  {
    title: 'Start: Telefon & E-Mail entlasten',
    text: 'Routen Sie Nummern & Postfächer um. Jeder Kontakt wird aufgenommen, analysiert und mit Notizen dokumentiert.',
  },
  {
    title: 'Ausbau: Marketing, Leads & Backoffice',
    text: 'Schrittweise kommen Marketing-, Lead- und Backoffice-Agenten dazu – Ihr Team wächst ohne zusätzliche Lohnkosten.',
  },
  {
    title: 'Integration: Tiefe Anbindung',
    text: 'Auf Wunsch integrieren wir Expertico in Microsoft 365, Google Workspace, CRM oder Buchhaltung – sauber synchronisiert.',
  },
];

const packages = [
  {
    title: 'EXPLORE',
    badge: 'Pilot',
    description: 'Der Einstieg ins digitale Team – erleben & testen.',
    target: 'Für KMU, die zuerst konkrete Ergebnisse sehen möchten.',
    features: [
      'Rezeption / Telefon-Agent (Basis)',
      'E-Mail-Antwort-Agent (Basis)',
      'Web-Oberfläche mit Gesprächs- & Mail-Protokollen',
      'Standard-Onboarding (Nummern-Umleitung, E-Mail-Anbindung)',
    ],
    benefit:
      'Entlastet Telefon & E-Mail sofort, Sie sehen schwarz auf weiss die Leistung der Agenten und behalten die Kontrolle.',
  },
  {
    title: 'GROW',
    badge: 'Beliebt',
    description: 'Mehr Leads, mehr Struktur, weniger manueller Aufwand.',
    target: 'Für Unternehmen, die mit KI aktiv wachsen möchten.',
    features: [
      'Alles aus EXPLORE',
      'Marketing-Agent (Basis) für Content & Kampagnen',
      'Lead-Qualifizierer-Agent',
      'Terminierungs-Agent mit Kalender-Anbindung',
      'Reports zu Anrufen, Mails, Leads & Terminen',
    ],
    benefit:
      'Mehr qualifizierte Anfragen, weniger Leerlauf im Kalender und eine klarere Pipeline – ohne zusätzliche Stellen.',
  },
  {
    title: 'INTEGRATE',
    badge: 'Expertico One',
    description: 'Ihr voll integriertes KI-Backoffice.',
    target:
      'Für ambitionierte KMU & Organisationen, die Expertico fest verankern wollen.',
    features: [
      'Alles aus GROW',
      'Backoffice-Agent (Projekt- & Aufgabenverwaltung light)',
      'Buchhaltungs-Agent mit OCR & Zuordnung',
      'Agent of Agents – zentrale Steuerung',
      'Individuelle Integration in CRM, M365, Buchhaltung etc.',
      'Erweiterte Dashboards & gemeinsame Roadmap',
    ],
    benefit:
      'Telefon, E-Mail, Leads, Marketing, Backoffice und Buchhaltung – dauerhaft aus einem Guss.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
          <MaterialNavbar />
          <MaterialHero />
          {/* Pricing component remains below as a Tailwind section for now */}
          <div className="mt-10">
            <Pricing />
          </div>

        <main className="mt-12 space-y-16">
          <section className="grid items-center gap-10 rounded-[40px] bg-white p-10 shadow-lg lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-500">Attention</p>
              <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
                Dein digitales Praktikanten-Team. 24/7. Ohne Büroplatz.
              </h1>
              <p className="text-lg text-gray-600">
                Jeden Monat suchen in der Schweiz rund 9’000 Menschen eine Praktikumsstelle – viele KMU
                brauchen eigentlich einfach „zusätzliche Hände“. Mit Expertico Digital Agents erhalten Sie genau
                diese Entlastung – fair, skalierbar und voll automatisiert.
              </p>
              <p className="rounded-3xl bg-gray-50 p-4 text-sm text-gray-600">
                Statt ständig neue Praktikant:innen einzuarbeiten, arbeitet ein digitales Team konstant weiter –
                mit Schweizer Datenschutz, klaren Prozessen und messbaren Resultaten.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 hover:shadow-xl hover:brightness-110 active:scale-95 transition-all"
                >
                  Jetzt kostenlose Demo anfragen
                </a>
                <a
                  href="#team"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-fuchsia-300 hover:text-fuchsia-600 hover:bg-fuchsia-50 active:scale-95 transition-all"
                >
                  Alle KI-Agenten entdecken
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-fuchsia-50 bg-gradient-to-b from-white to-[rgba(233,30,140,0.03)] p-6 shadow-inner">
              <p className="text-sm font-semibold text-gray-500">Ihr digitales Backoffice</p>
              <div className="mt-6 space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-10 shadow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-500">Warum Expertico?</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Mehr Anfragen, zu wenig Zeit – wir bauen Ihr digitales Team.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {painPoints.map((point) => (
                <div key={point} className="rounded-3xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                  {point}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Wir bauen Ihnen ein digitales Team aus KI-Agenten, das wiederkehrende Aufgaben übernimmt, sauber
              dokumentiert und sich in Ihre Systeme integriert – vom ersten Test bis zur tiefen Integration in
              CRM, Buchhaltung & Backoffice.
            </p>
          </section>

          <section id="team" className="grid gap-6 rounded-[32px] bg-white p-10 shadow lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                Die Lösung: Ihr digitales KI-Team
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Klare Rollen wie in einem echten Team.</h2>
              <p className="text-gray-600">
                Kein „Black Box“-Assistent, sondern definierte Agenten mit transparenten Outputs.
              </p>
            </div>
            <div className="space-y-4">
              {agentTeam.map((agent) => (
                <div key={agent.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-fuchsia-600">{agent.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{agent.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-10 shadow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-500">
              So funktioniert Expertico für Ihr KMU
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {process.map((step) => (
                <div key={step.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-fuchsia-600">{step.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <Pricing />

          <section className="rounded-2xl overflow-hidden p-0">
            <div className="bg-gradient-to-r from-fuchsia-600 to-orange-500 p-6 text-white shadow-md">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/95">Nächster Schritt</p>
                <h2 className="text-3xl font-bold">Erleben Sie, wie sich ein digitales KI-Team anfühlt.</h2>
                <p className="text-sm text-white/90">Wir zeigen live: Rezeption, E-Mail & Leads – mit echten Beispielen aus Ihrem Unternehmen.</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="/register"
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-semibold text-fuchsia-600 hover:bg-gray-100 hover:text-fuchsia-700 active:scale-95 transition-all"
                  >
                    Jetzt unverbindliche Demo buchen
                  </a>
                  <a
                    href="#team"
                    className="inline-flex items-center text-sm font-semibold text-white/95 hover:text-white hover:underline active:scale-95 transition-all"
                  >
                    Agentenübersicht ansehen →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 rounded-2xl bg-white p-8 text-sm text-gray-600 shadow-inner border-t border-gray-100">
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-gray-900">Expertico</div>
              <p className="mt-2 text-sm text-gray-600">KI-Agenten für Schweizer KMU — Datenschutzkonform & skalierbar.</p>
            </div>

            <div className="flex justify-between sm:justify-center">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Produkt</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-fuchsia-600">Agenten</a></li>
                  <li><a href="#" className="hover:text-fuchsia-600">Preise</a></li>
                  <li><a href="#" className="hover:text-fuchsia-600">Integrationen</a></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Unternehmen</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-fuchsia-600">Über uns</a></li>
                  <li><a href="#" className="hover:text-fuchsia-600">Karriere</a></li>
                </ul>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Kontakt</h4>
              <p className="text-sm">hello@expertico.ch</p>
              <p className="mt-2 text-sm">+41 31 539 19 78</p>
              <div className="mt-4 flex gap-3">
                <a className="w-8 h-8 rounded-full bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center" href="#">F</a>
                <a className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center" href="#">L</a>
                <a className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center" href="#">I</a>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Expertico AG — Alle Rechte vorbehalten
          </div>
        </footer>
      </div>
    </div>
  );
}
