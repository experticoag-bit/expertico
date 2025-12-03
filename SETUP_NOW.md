# 🚀 Supabase Setup - JETZT

Du hast bereits einen Supabase Service Role Key: `sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6`

## ⚡ Schnell-Setup (3 Schritte)

### Schritt 1: .env Datei erstellen

Erstelle eine `.env` Datei im Root-Verzeichnis (`expertico/.env`) mit diesem Inhalt:

```env
# Supabase Database
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"

# NextAuth
NEXTAUTH_SECRET="$(openssl rand -base64 32)"
NEXTAUTH_URL="http://localhost:3000"

# Supabase API Keys
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="[DEIN-ANON-KEY]"
SUPABASE_SERVICE_ROLE_KEY="sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6"
```

### Schritt 2: Supabase-Daten finden

1. Gehe zu [app.supabase.com](https://app.supabase.com)
2. Wähle dein Projekt
3. **Settings** → **Database**:
   - Kopiere **Connection string** → **URI** (für DATABASE_URL und DIRECT_URL)
   - Ersetze `[PASSWORD]` mit deinem DB-Passwort
   - Ersetze `[PROJECT-REF]` mit deiner Projekt-Referenz
   - Ersetze `[REGION]` mit deiner Region (z.B. `eu-central-1`)

4. **Settings** → **API**:
   - Kopiere **URL** → für `SUPABASE_URL`
   - Kopiere **anon public** → für `SUPABASE_ANON_KEY`

5. **NEXTAUTH_SECRET generieren**:
   ```bash
   openssl rand -base64 32
   ```
   Kopiere das Ergebnis in `NEXTAUTH_SECRET`

### Schritt 3: Datenbank einrichten

```bash
# 1. Prisma Client generieren
npm run db:generate

# 2. Datenbank-Schema pushen
npm run db:push

# 3. (Optional) Prisma Studio öffnen
npm run db:studio
```

## ✅ Fertig!

Starte den Dev-Server:
```bash
npm run dev
```

Die App läuft auf [http://localhost:3000](http://localhost:3000)

## 🔍 Beispiel .env (mit Platzhaltern)

```env
DATABASE_URL="postgresql://postgres.abcdefghijklmnop:MeinPasswort123@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.abcdefghijklmnop:MeinPasswort123@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
NEXTAUTH_SECRET="k3j4h5g6f7d8s9a0q1w2e3r4t5y6u7i8o9p0="
NEXTAUTH_URL="http://localhost:3000"
SUPABASE_URL="https://abcdefghijklmnop.supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
SUPABASE_SERVICE_ROLE_KEY="sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6"
```

## 🆘 Hilfe

- **Connection String Format**: `postgresql://postgres.[REF]:[PASS]@aws-0-[REGION].pooler.supabase.com:6543/postgres`
- **Direct URL Format**: Gleicher String, aber Port `5432` statt `6543`
- **Project Reference**: Findest du in der Supabase URL oder in Settings → General

---

**Viel Erfolg! 🎉**

