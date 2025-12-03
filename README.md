# 🚀 Expertico - KI-Agenten-Plattform für Schweizer KMU

Eine vollständige SaaS-Lösung mit 30+ spezialisierten KI-Agenten für Rezeption, E-Mail, Marketing, Buchhaltung und Lead-Management.

## ✨ Features

- **30+ KI-Agenten**: Rezeption, E-Mail, Marketing, Buchhaltung, Leads, etc.
- **Telefon-Integration**: Twilio-basierte Anrufannahme mit KI
- **E-Mail-Automatisierung**: Kategorisierung, Priorisierung und automatische Antwortentwürfe
- **Lead-Management**: Qualifizierung, Scoring und CRM-Integration
- **Modernes Dashboard**: Übersichtliche Verwaltung aller Agenten und Aktivitäten
- **Schweizer Design**: Vertrauenserweckendes UI für KMU

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: PostgreSQL mit Prisma ORM
- **Auth**: NextAuth.js
- **APIs**: Twilio (Telefon), ElevenLabs (Voice), OpenAI/Azure (KI)
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

## 📦 Installation

1. **Dependencies installieren**:
```bash
npm install
```

2. **Umgebungsvariablen konfigurieren**:
```bash
cp .env.example .env
# .env Datei mit eigenen Werten ausfüllen
```

3. **Datenbank einrichten**:
```bash
npx prisma generate
npx prisma db push
# oder für Migrationen:
npx prisma migrate dev
```

4. **Entwicklungsserver starten**:
```bash
npm run dev
```

Die App läuft dann auf [http://localhost:3000](http://localhost:3000)

## 🗄️ Datenbank-Setup

Das Projekt verwendet PostgreSQL mit Prisma. 

**Option 1: Lokale PostgreSQL**
```bash
# PostgreSQL lokal installieren und starten
# DATABASE_URL in .env setzen
npx prisma db push
```

**Option 2: Supabase (Cloud)**
1. Projekt auf [supabase.com](https://supabase.com) erstellen
2. Connection String in `.env` kopieren
3. `npx prisma db push` ausführen

**Option 3: Neon (Cloud)**
1. Projekt auf [neon.tech](https://neon.tech) erstellen
2. Connection String in `.env` kopieren
3. `npx prisma db push` ausführen

## 🔑 Umgebungsvariablen

Wichtige Variablen in `.env`:

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Twilio (für Telefon-Integration)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="+41..."

# ElevenLabs (für Voice AI)
ELEVENLABS_API_KEY="..."
ELEVENLABS_AGENT_ID="..."

# OpenAI / Azure (für KI-Funktionen)
OPENAI_API_KEY="..."
# oder
AZURE_OPENAI_ENDPOINT="..."
AZURE_OPENAI_KEY="..."
```

## 📁 Projektstruktur

```
expertico/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Dashboard Routes
│   │   ├── (marketing)/         # Marketing/Landing Pages
│   │   └── api/                 # API Routes
│   ├── components/              # React Komponenten
│   │   ├── agents/              # Agent-Komponenten
│   │   ├── dashboard/           # Dashboard-Komponenten
│   │   ├── marketing/           # Marketing-Komponenten
│   │   └── shared/              # Shared UI-Komponenten
│   └── lib/                     # Utilities & Helpers
├── prisma/
│   └── schema.prisma            # Datenbank-Schema
└── public/                      # Statische Assets
```

## 🚀 Deployment

### Vercel (Empfohlen)

1. Projekt auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) importieren
3. Umgebungsvariablen in Vercel Dashboard setzen
4. Deploy!

### Railway / Render (Backend)

Für separate Backend-Deployments:
1. Projekt auf Railway/Render importieren
2. PostgreSQL-Datenbank hinzufügen
3. Umgebungsvariablen setzen
4. Deploy!

## 📚 API Endpoints

### Agenten
- `GET /api/agents` - Alle Agenten abrufen
- `POST /api/agents` - Neuen Agenten erstellen
- `POST /api/agents/[agentId]/toggle` - Agent aktivieren/deaktivieren

### Anrufe
- `GET /api/calls` - Anrufprotokoll abrufen

### E-Mails
- `GET /api/emails` - E-Mails abrufen

### Leads
- `GET /api/leads` - Leads abrufen
- `POST /api/leads` - Neuen Lead erstellen

### Webhooks
- `POST /api/webhooks/twilio/voice` - Twilio Voice Webhook
- `POST /api/webhooks/twilio/status` - Twilio Status Callback

## 🎨 Design System

Das Design verwendet:
- **Primärfarbe**: Fuchsia (#E91E8C)
- **Sekundärfarbe**: Orange (#FF6B35)
- **Akzentfarbe**: Cyan (#00D4FF)
- **Schriftarten**: Inter (Body), Plus Jakarta Sans (Headlines)

## 🔒 Sicherheit

- NextAuth.js für Authentifizierung
- Prisma für sichere Datenbankabfragen
- Environment Variables für Secrets
- CSRF-Schutz durch Next.js

## 📝 Nächste Schritte

1. ✅ Datenbank einrichten
2. ✅ Umgebungsvariablen konfigurieren
3. ✅ Twilio-Integration testen
4. ✅ OpenAI/Azure API konfigurieren
5. ✅ Erste Agenten aktivieren

## 🤝 Beitragen

Dieses Projekt ist eine vollständige Implementierung der Expertico-Plattform. Für Fragen oder Verbesserungen, bitte Issues erstellen.

## 📄 Lizenz

Proprietär - Alle Rechte vorbehalten

---

**Made with ❤️ in Switzerland**
