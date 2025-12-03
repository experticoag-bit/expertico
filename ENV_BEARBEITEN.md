# ✏️ .env Datei bearbeiten - Schritt für Schritt

## 🎯 Schritt 1: .env Datei öffnen

**Option A: Im Terminal (macOS/Linux)**
```bash
cd expertico
nano .env
# oder
code .env
# oder
open -a TextEdit .env
```

**Option B: Im Finder (macOS)**
1. Öffne Finder
2. Gehe zu: `/Users/sbrxprtc/OneOne/expertico`
3. Drücke `Cmd + Shift + .` (Punkt) um versteckte Dateien zu sehen
4. Doppelklick auf `.env` (öffnet mit TextEdit)

**Option C: In VS Code / Cursor**
1. Öffne den `expertico` Ordner
2. Klicke auf `.env` in der Dateiliste

## 🎯 Schritt 2: Werte eintragen

Finde diese Zeilen in der .env Datei und ersetze die Platzhalter:

### 1. DATABASE_URL (Zeile ~4)

**VORHER:**
```env
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**NACHHER:** (ersetze die Platzhalter)
```env
DATABASE_URL="postgresql://postgres.abcdefghijklmnop:MeinPasswort123@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**Was ersetzen:**
- `[PROJECT-REF]` → Deine Projekt-Referenz (z.B. `abcdefghijklmnop`)
- `[PASSWORD]` → Dein Datenbank-Passwort
- `[REGION]` → Deine Region (z.B. `eu-central-1`)

### 2. DIRECT_URL (Zeile ~8)

**VORHER:**
```env
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
```

**NACHHER:** (gleiche Werte, aber Port 5432)
```env
DIRECT_URL="postgresql://postgres.abcdefghijklmnop:MeinPasswort123@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
```

### 3. SUPABASE_URL (Zeile ~20)

**VORHER:**
```env
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
```

**NACHHER:**
```env
SUPABASE_URL="https://abcdefghijklmnop.supabase.co"
```

### 4. SUPABASE_ANON_KEY (Zeile ~23)

**VORHER:**
```env
SUPABASE_ANON_KEY="[DEIN-ANON-KEY-HIER]"
```

**NACHHER:**
```env
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODk2NzIwMCwiZXhwIjoxOTU0NTQzMjAwfQ..."
```

## 🎯 Schritt 3: Speichern

- **Nano**: `Ctrl + X`, dann `Y`, dann `Enter`
- **TextEdit**: `Cmd + S`
- **VS Code/Cursor**: `Cmd + S`

## ✅ Fertig!

Jetzt kannst du die Datenbank einrichten:
```bash
npm run db:push
```

---

**Tipp:** Wenn du unsicher bist, kopiere einfach den Connection String aus Supabase und passe nur den Port an!

