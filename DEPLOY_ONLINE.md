# 🌐 App online stellen - Vercel Deployment

## ⚡ Schnellste Methode: Vercel CLI

### Schritt 1: Vercel Login (falls noch nicht geschehen)

```bash
vercel login
```

### Schritt 2: Deployen

```bash
cd expertico
vercel
```

Vercel fragt nach:
- **Set up and deploy?** → `Y`
- **Which scope?** → Wähle deinen Account
- **Link to existing project?** → `N` (neues Projekt)
- **Project name?** → `expertico` (oder Enter)
- **Directory?** → `./` (Enter)
- **Override settings?** → `N` (Enter)

### Schritt 3: Environment Variables setzen

Nach dem ersten Deploy:

1. Gehe zu [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klicke auf dein Projekt
3. **Settings** → **Environment Variables**
4. Füge alle Variablen aus `.env` hinzu:

```
DATABASE_URL
DIRECT_URL
NEXTAUTH_SECRET
NEXTAUTH_URL (wird automatisch gesetzt)
SUPABASE_URL
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_ANON_KEY
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

**WICHTIG**: 
- Setze `NEXTAUTH_URL` auf deine Vercel URL (z.B. `https://expertico-xxxxx.vercel.app`)
- Wähle für alle Variablen: **Production**, **Preview**, **Development**

### Schritt 4: Redeploy

```bash
vercel --prod
```

## 🌐 Alternative: Vercel Web (mit GitHub)

### Schritt 1: GitHub Repository erstellen

```bash
cd expertico

# Falls Git noch nicht initialisiert
git init
git add .
git commit -m "Initial commit"

# Erstelle Repository auf GitHub.com, dann:
git remote add origin https://github.com/DEIN-USERNAME/expertico.git
git branch -M main
git push -u origin main
```

### Schritt 2: Auf Vercel deployen

1. Gehe zu [vercel.com/new](https://vercel.com/new)
2. Klicke **"Import Git Repository"**
3. Wähle dein GitHub Repository
4. Klicke **"Import"**

### Schritt 3: Environment Variables

1. Klicke auf **"Environment Variables"**
2. Füge alle Variablen aus `.env` hinzu
3. Setze `NEXTAUTH_URL` auf deine Vercel URL

### Schritt 4: Deploy!

Klicke **"Deploy"** → Fertig! 🎉

## ✅ Nach dem Deploy

Du erhältst eine URL wie:
- `https://expertico-xxxxx.vercel.app`
- Oder eine Custom Domain (kannst du später hinzufügen)

## 🔄 Automatische Deployments

Jedes Mal wenn du zu GitHub pushst, wird automatisch neu deployed!

```bash
git add .
git commit -m "Update"
git push
```

## 📋 Environment Variables für Vercel

Kopiere diese aus deiner `.env`:

```
DATABASE_URL=postgresql://postgres.utrzzinplffvlzxwavkv:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres
DIRECT_URL=postgresql://postgres.utrzzinplffvlzxwavkv:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres
NEXTAUTH_SECRET=K9DyoELpuHfpO2p7QaJx1T/TFoukMttbR+zvFPuWCo4=
NEXTAUTH_URL=https://expertico-xxxxx.vercel.app
SUPABASE_URL=https://utrzzinplffvlzxwavkv.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://utrzzinplffvlzxwavkv.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M
SUPABASE_SERVICE_ROLE_KEY=sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6
```

**WICHTIG**: `NEXTAUTH_URL` wird nach dem ersten Deploy automatisch gesetzt. Du kannst es dann anpassen.

---

**Viel Erfolg! 🚀**

