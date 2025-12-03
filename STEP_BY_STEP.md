# 📋 Schritt-für-Schritt Anleitung

## ✅ Schritt 1: Supabase-Daten sammeln

1. **Gehe zu Supabase Dashboard**: [app.supabase.com](https://app.supabase.com)
2. **Wähle dein Projekt** aus
3. **Connection String holen**:
   - Gehe zu **Settings** → **Database**
   - Scrolle zu **Connection string**
   - Wähle **URI** aus
   - Kopiere den String (sieht so aus):
     ```
     postgresql://postgres.abcdefghijklmnop:DeinPasswort@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
     ```
   - **WICHTIG**: Merke dir dein Datenbank-Passwort!

4. **Direct URL erstellen**:
   - Nimm den gleichen Connection String
   - Ändere den Port von `6543` zu `5432`
   - Beispiel:
     ```
     postgresql://postgres.abcdefghijklmnop:DeinPasswort@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
     ```

5. **API Keys holen**:
   - Gehe zu **Settings** → **API**
   - Kopiere **URL** (z.B. `https://abcdefghijklmnop.supabase.co`)
   - Kopiere **anon public** Key
   - Dein **service_role** Key ist: `sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6`

## ✅ Schritt 2: .env Datei erstellen

1. **Gehe ins Projekt-Verzeichnis**:
   ```bash
   cd expertico
   ```

2. **Erstelle .env Datei** (kannst du mit jedem Texteditor machen):
   ```bash
   touch .env
   # oder einfach im Editor öffnen
   ```

3. **Füge diesen Inhalt ein** (ersetze die Platzhalter!):

```env
# ============================================
# SUPABASE DATABASE
# ============================================
# Connection String MIT Pooling (für die App)
DATABASE_URL="postgresql://postgres.[DEINE-REF]:[DEIN-PASSWORT]@aws-0-[DEINE-REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Direct Connection OHNE Pooling (für Prisma Migrations)
DIRECT_URL="postgresql://postgres.[DEINE-REF]:[DEIN-PASSWORT]@aws-0-[DEINE-REGION].pooler.supabase.com:5432/postgres"

# ============================================
# NEXTAUTH.JS
# ============================================
# Generiere ein Secret mit: openssl rand -base64 32
NEXTAUTH_SECRET="HIER-EIN-SICHERES-SECRET-EINFÜGEN"
NEXTAUTH_URL="http://localhost:3000"

# ============================================
# SUPABASE API KEYS
# ============================================
SUPABASE_URL="https://[DEINE-REF].supabase.co"
SUPABASE_ANON_KEY="HIER-DEIN-ANON-KEY-EINFÜGEN"
SUPABASE_SERVICE_ROLE_KEY="sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6"
```

**WICHTIG**: Ersetze:
- `[DEINE-REF]` → Deine Supabase Projekt-Referenz (aus dem Connection String)
- `[DEIN-PASSWORT]` → Dein Datenbank-Passwort
- `[DEINE-REGION]` → Deine Region (z.B. `eu-central-1`)
- `NEXTAUTH_SECRET` → Generiere mit: `openssl rand -base64 32`
- `SUPABASE_ANON_KEY` → Aus Supabase Dashboard → Settings → API

## ✅ Schritt 3: NEXTAUTH_SECRET generieren

Öffne ein Terminal und führe aus:
```bash
openssl rand -base64 32
```

Kopiere das Ergebnis und füge es in `.env` bei `NEXTAUTH_SECRET` ein.

## ✅ Schritt 4: Datenbank einrichten

Führe diese Befehle aus:

```bash
# 1. Prisma Client generieren
npm run db:generate

# 2. Datenbank-Schema zur Supabase pushen
npm run db:push
```

Wenn alles funktioniert, siehst du:
```
✔ Generated Prisma Client
✔ Database schema pushed successfully
```

## ✅ Schritt 5: Testen

Öffne Prisma Studio (visuelle Datenbank-Verwaltung):
```bash
npm run db:studio
```

Das öffnet einen Browser mit deiner Datenbank. Du solltest alle Tabellen sehen!

## ✅ Schritt 6: App starten

```bash
npm run dev
```

Die App läuft dann auf: [http://localhost:3000](http://localhost:3000)

## 🎉 Fertig!

Jetzt kannst du:
- Die Landing Page sehen: [http://localhost:3000](http://localhost:3000)
- Das Dashboard öffnen: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- Agenten verwalten: [http://localhost:3000/dashboard/agents](http://localhost:3000/dashboard/agents)

## 🆘 Probleme?

### "Connection Error"
- Prüfe, ob das Passwort in `.env` korrekt ist
- Prüfe, ob `DIRECT_URL` gesetzt ist
- Prüfe, ob die IP-Adresse in Supabase erlaubt ist (Settings → Database)

### "Prisma Error"
- Stelle sicher, dass `DATABASE_URL` und `DIRECT_URL` beide gesetzt sind
- Führe `npm run db:generate` nochmal aus

### "Module not found"
- Führe `npm install` aus

---

**Viel Erfolg! 🚀**

