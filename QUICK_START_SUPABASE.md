# ⚡ Quick Start: Supabase Setup

## Schritt 1: Supabase Connection String finden

1. Gehe zu deinem Supabase Dashboard: [app.supabase.com](https://app.supabase.com)
2. Wähle dein Projekt aus
3. Gehe zu **Settings** → **Database**
4. Scrolle zu **Connection string** → **URI**
5. Kopiere den Connection String (sieht so aus):
   ```
   postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```

## Schritt 2: .env Datei erstellen

Erstelle eine `.env` Datei im Root-Verzeichnis (`expertico/.env`) mit folgendem Inhalt:

```env
# Supabase Database
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"

# NextAuth
NEXTAUTH_SECRET="$(openssl rand -base64 32)"
NEXTAUTH_URL="http://localhost:3000"

# Supabase API Keys (aus Settings → API)
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="dein-anon-key"
SUPABASE_SERVICE_ROLE_KEY="sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6"
```

**WICHTIG**: 
- Ersetze `[PROJECT-REF]` mit deiner Supabase Projekt-Referenz
- Ersetze `[PASSWORD]` mit deinem Datenbank-Passwort
- Für `NEXTAUTH_SECRET` führe aus: `openssl rand -base64 32`

## Schritt 3: Datenbank einrichten

```bash
# 1. Prisma Client generieren
npx prisma generate

# 2. Datenbank-Schema pushen
npx prisma db push

# 3. (Optional) Prisma Studio öffnen
npx prisma studio
```

## Schritt 4: Dev-Server starten

```bash
npm run dev
```

Die App läuft dann auf [http://localhost:3000](http://localhost:3000)

## ✅ Verifikation

Öffne Prisma Studio um zu sehen, ob die Verbindung funktioniert:
```bash
npx prisma studio
```

## 🔍 Wo finde ich die Supabase-Daten?

### Connection String:
- **Settings** → **Database** → **Connection string** → **URI**

### API Keys:
- **Settings** → **API**
  - `URL`: `https://[PROJECT-REF].supabase.co`
  - `anon public`: Für Client-Side
  - `service_role`: Für Server-Side (⚠️ NIEMALS im Client verwenden!)

### Project Reference:
- Findest du in der URL: `https://app.supabase.com/project/[PROJECT-REF]`
- Oder in den Settings unter **General**

## 🆘 Probleme?

### Connection Error
- Prüfe, ob das Passwort korrekt ist
- Prüfe, ob Connection Pooling aktiviert ist
- Verwende `DIRECT_URL` für Migrations

### Migration Error
- Stelle sicher, dass `DIRECT_URL` gesetzt ist
- Führe `npx prisma db push` aus (einfacher als Migrations)

---

**Viel Erfolg! 🚀**

