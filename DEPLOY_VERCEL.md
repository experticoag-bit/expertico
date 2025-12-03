# 🚀 Expertico auf Vercel deployen

## Schritt 1: Vercel Account erstellen

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf **"Sign Up"**
3. Melde dich mit **GitHub** an (empfohlen)

## Schritt 2: Projekt auf GitHub pushen

### Option A: GitHub Repository erstellen

```bash
cd expertico

# Git initialisieren (falls noch nicht geschehen)
git init

# .gitignore sollte bereits existieren
# Füge alle Dateien hinzu
git add .

# Erster Commit
git commit -m "Initial commit: Expertico Platform"

# Erstelle Repository auf GitHub (manuell oder über CLI)
# Dann:
git remote add origin https://github.com/DEIN-USERNAME/expertico.git
git branch -M main
git push -u origin main
```

### Option B: GitHub CLI (schneller)

```bash
# Installiere GitHub CLI (falls nicht vorhanden)
# brew install gh

# Login
gh auth login

# Erstelle Repository und pushe
cd expertico
gh repo create expertico --public --source=. --remote=origin --push
```

## Schritt 3: Auf Vercel deployen

### Automatisch (empfohlen):

1. Gehe zu [vercel.com/new](https://vercel.com/new)
2. Klicke auf **"Import Git Repository"**
3. Wähle dein GitHub Repository aus
4. Klicke auf **"Import"**

### Konfiguration:

- **Framework Preset**: Next.js (automatisch erkannt)
- **Root Directory**: `./` (Standard)
- **Build Command**: `npm run build` (automatisch)
- **Output Directory**: `.next` (automatisch)

### Environment Variables hinzufügen:

Klicke auf **"Environment Variables"** und füge hinzu:

```
DATABASE_URL=postgresql://postgres.kikbavrrynrbnqefbqpn:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1
DIRECT_URL=postgresql://postgres.kikbavrrynrbnqefbqpn:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres
NEXTAUTH_SECRET=K9DyoELpuHfpO2p7QaJx1T/TFoukMttbR+zvFPuWCo4=
NEXTAUTH_URL=https://expertico-xxxxx.vercel.app
SUPABASE_URL=https://kikbavrrynrbnqefbqpn.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpa2JhdnJyeW5yYm5xZWZicXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNjAzMzksImV4cCI6MjA3OTgzNjMzOX0.2MjOlRlyH8fH0XFk_pXJsDtjXMeqKRjbIR324LYKnYY
SUPABASE_SERVICE_ROLE_KEY=sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6
```

**WICHTIG**: 
- `NEXTAUTH_URL` wird automatisch von Vercel gesetzt (kannst du später anpassen)
- Füge alle Environment Variables für **Production**, **Preview** und **Development** hinzu

## Schritt 4: Deploy!

1. Klicke auf **"Deploy"**
2. Warte 2-3 Minuten
3. Fertig! 🎉

## ✅ Nach dem Deploy

Du erhältst eine URL wie:
- `https://expertico-xxxxx.vercel.app`
- Oder eine Custom Domain (kannst du später hinzufügen)

## 🔄 Updates deployen

Jedes Mal wenn du zu GitHub pushst, wird automatisch neu deployed!

```bash
git add .
git commit -m "Update"
git push
```

## 📝 Custom Domain hinzufügen

1. Gehe zu Vercel Dashboard → Dein Projekt → Settings → Domains
2. Füge deine Domain hinzu
3. Folge den DNS-Anweisungen

## 🆘 Troubleshooting

### Build Error
- Prüfe die Build Logs in Vercel
- Stelle sicher, dass alle Environment Variables gesetzt sind

### Database Connection Error
- Prüfe, ob Supabase deine IP erlaubt (Settings → Database → Connection Pooling)
- Für Production: Aktiviere "Allow all IPs" oder füge Vercel IPs hinzu

### Environment Variables nicht gesetzt
- Gehe zu Settings → Environment Variables
- Füge alle Variablen manuell hinzu

---

**Viel Erfolg! 🚀**

