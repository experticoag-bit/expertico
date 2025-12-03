# 🚀 Supabase Setup für Expertico

## Schritt 1: Supabase-Projekt erstellen

1. Gehe zu [supabase.com](https://supabase.com)
2. Klicke auf **"Start your project"** oder **"New Project"**
3. Melde dich mit GitHub an (oder erstelle ein Konto)
4. Klicke auf **"New Project"**

## Schritt 2: Projekt konfigurieren

- **Name**: `expertico` (oder dein gewünschter Name)
- **Database Password**: Wähle ein sicheres Passwort (⚠️ **WICHTIG: Speichere es!**)
- **Region**: Wähle die nächstgelegene Region (z.B. `West EU (Ireland)` für Schweiz)
- **Pricing Plan**: Wähle **Free** für den Start

## Schritt 3: Connection String abrufen

1. Nach dem Erstellen des Projekts, gehe zu **Settings** → **Database**
2. Scrolle runter zu **Connection string**
3. Wähle **URI** aus
4. Kopiere den Connection String (sieht so aus):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres
   ```

## Schritt 4: .env Datei erstellen

Erstelle eine `.env` Datei im Root-Verzeichnis mit folgendem Inhalt:

```env
# Supabase Database
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres?pgbouncer=true&connection_limit=1"

# Direct Connection (für Prisma Migrations)
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_SECRET="generiere-ein-sicheres-secret-hier"
NEXTAUTH_URL="http://localhost:3000"

# Twilio (optional - später)
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_PHONE_NUMBER=""

# ElevenLabs (optional - später)
ELEVENLABS_API_KEY=""
ELEVENLABS_AGENT_ID=""

# OpenAI / Azure (optional - später)
OPENAI_API_KEY=""
AZURE_OPENAI_ENDPOINT=""
AZURE_OPENAI_KEY=""
```

**WICHTIG**: 
- Ersetze `[YOUR-PASSWORD]` mit deinem Supabase-Datenbank-Passwort
- Ersetze `xxxxx` mit deiner Supabase-Projekt-ID
- Für `NEXTAUTH_SECRET` generiere ein sicheres Secret:
  ```bash
  openssl rand -base64 32
  ```

## Schritt 5: Prisma konfigurieren

Das Prisma Schema ist bereits für PostgreSQL konfiguriert. Du musst nur:

1. **Prisma Client generieren**:
   ```bash
   npx prisma generate
   ```

2. **Datenbank-Schema pushen**:
   ```bash
   npx prisma db push
   ```
   
   Oder für eine Migration:
   ```bash
   npx prisma migrate dev --name init
   ```

## Schritt 6: Prisma Studio öffnen (optional)

Um die Datenbank visuell zu verwalten:
```bash
npx prisma studio
```

Öffnet einen Browser mit einer UI zur Datenbank-Verwaltung.

## Schritt 7: Supabase Dashboard Features

### Row Level Security (RLS) aktivieren

1. Gehe zu **Authentication** → **Policies**
2. Erstelle Policies für deine Tabellen
3. Oder deaktiviere RLS für Development (nicht für Production!)

### API Keys

1. Gehe zu **Settings** → **API**
2. Kopiere **anon/public** Key für Client-Side Zugriff
3. Kopiere **service_role** Key für Server-Side Zugriff (⚠️ **NIEMALS im Client verwenden!**)

### Real-time Features

Supabase unterstützt Real-time Subscriptions - perfekt für Live-Updates im Dashboard!

## ✅ Verifikation

Teste die Verbindung:

```bash
# Prisma Studio öffnen
npx prisma studio

# Oder direkt testen
npx prisma db pull
```

## 🔒 Sicherheitstipps

1. **NIEMALS** die `.env` Datei committen (ist bereits in `.gitignore`)
2. Verwende **Connection Pooling** für Production (Supabase bietet PgBouncer)
3. Setze **Row Level Security (RLS)** für Production
4. Verwende **service_role** Key nur Server-Side

## 📊 Supabase Dashboard Features

- **Table Editor**: Visuelle Datenbank-Verwaltung
- **SQL Editor**: Direkte SQL-Abfragen
- **Authentication**: User Management
- **Storage**: File Uploads
- **Edge Functions**: Serverless Functions
- **Realtime**: Live-Updates

## 🆘 Troubleshooting

### Connection Error
- Prüfe, ob das Passwort korrekt ist
- Prüfe, ob die IP-Adresse erlaubt ist (Settings → Database → Connection Pooling)

### Migration Error
- Verwende `DIRECT_URL` für Migrations
- Prüfe, ob alle Tabellen korrekt erstellt wurden

### RLS Error
- Deaktiviere RLS temporär für Development
- Oder erstelle passende Policies

## 🚀 Nächste Schritte

Nach dem Setup:
1. ✅ Datenbank ist verbunden
2. ✅ Tabellen sind erstellt
3. ✅ Prisma Client ist generiert
4. 🎯 Starte den Dev-Server: `npm run dev`
5. 🎯 Erstelle erste Test-Daten über Prisma Studio

---

**Viel Erfolg! 🎉**

