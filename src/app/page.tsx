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
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-full bg-white/80 px-6 py-3 shadow-md shadow-slate-200 backdrop-blur">
          <div className="text-xl font-black tracking-tight">
            Exper<span className="text-emerald-600">tico</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-600 md:flex">
            {['Home', 'About', 'Features', 'How it works', 'Produkt'].map((item) => (
              <a key={item} href="#" className="rounded-full px-3 py-1 hover:bg-slate-100">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 text-sm font-semibold">
            <a href="/login" className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2">
              Sign In
            </a>
            <a
              href="/register"
              className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-emerald-500/30"
            >
              Get Started
            </a>
          </div>
        </header>

        <main className="mt-12 space-y-16">
          <section className="grid items-center gap-10 rounded-[40px] bg-white p-10 shadow-lg lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Attention</p>
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
                  className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40"
                >
                  Jetzt kostenlose Demo anfragen
                </a>
                <a
                  href="#team"
                  className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-emerald-200 hover:text-emerald-600"
                >
                  Alle KI-Agenten entdecken
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50 p-6 shadow-inner">
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Warum Expertico?</p>
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
                  <p className="text-sm font-semibold text-emerald-600">{agent.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{agent.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-10 shadow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              So funktioniert Expertico für Ihr KMU
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {process.map((step) => (
                <div key={step.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-emerald-600">{step.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-white p-10 shadow">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                Unsere Pakete
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Von ersten Tests bis zur vollen Integration.
              </h2>
              <p className="text-gray-600">Wählen Sie den Reifegrad – Upgrades jederzeit möglich.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="flex h-full flex-col rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">{pkg.title}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-600">
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{pkg.description}</h3>
                  <p className="mt-2 text-sm text-gray-500">{pkg.target}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-gray-700">{pkg.benefit}</p>
                  <div className="mt-auto pt-4">
                    <a
                      href="/register"
                      className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-500/30"
                    >
                      Paket wählen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-emerald-900 p-10 text-white shadow-lg">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Nächster Schritt
              </p>
              <h2 className="text-3xl font-bold">Erleben Sie, wie sich ein digitales KI-Team anfühlt.</h2>
              <p className="text-sm text-emerald-100">
                Wir zeigen live: Rezeption, E-Mail & Leads – mit echten Beispielen aus Ihrem Unternehmen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700"
                >
                  Jetzt unverbindliche Demo buchen
                </a>
                <a href="#team" className="text-sm font-semibold text-white/80 hover:text-white">
                  Agentenübersicht ansehen →
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 rounded-3xl bg-white p-8 text-sm text-gray-500 shadow-inner">
          <div className="flex flex-wrap gap-4">
            <span>© {new Date().getFullYear()} Expertico AG</span>
            <span>Datenschutz</span>
            <span>Impressum</span>
            <span>Support</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
