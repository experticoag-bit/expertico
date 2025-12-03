# 🔑 Environment Variables für Vercel setzen

## ⚠️ WICHTIG: Vor dem Deploy!

Die Environment Variables MÜSSEN in Vercel gesetzt werden, sonst schlägt der Build fehl!

## 📋 Schritt-für-Schritt

### 1. Gehe zu Vercel Dashboard

1. Öffne: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Klicke auf dein Projekt: **expertico**

### 2. Environment Variables hinzufügen

1. Klicke auf **Settings** (oben rechts)
2. Klicke auf **Environment Variables** (links)
3. Füge jede Variable einzeln hinzu:

**Klicke auf "Add New" und füge hinzu:**

```
Name: DATABASE_URL
Value: postgresql://postgres.utrzzinplffvlzxwavkv:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres
Environment: Production, Preview, Development ✓
```

```
Name: DIRECT_URL
Value: postgresql://postgres.utrzzinplffvlzxwavkv:NewHorizon2023!!!!@aws-1-eu-central-2.pooler.supabase.com:5432/postgres
Environment: Production, Preview, Development ✓
```

```
Name: NEXTAUTH_SECRET
Value: K9DyoELpuHfpO2p7QaJx1T/TFoukMttbR+zvFPuWCo4=
Environment: Production, Preview, Development ✓
```

```
Name: NEXTAUTH_URL
Value: https://expertico-xxxxx.vercel.app
Environment: Production, Preview, Development ✓
```
⚠️ **WICHTIG**: Ersetze `xxxxx` mit deiner tatsächlichen Vercel URL!

```
Name: SUPABASE_URL
Value: https://utrzzinplffvlzxwavkv.supabase.co
Environment: Production, Preview, Development ✓
```

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://utrzzinplffvlzxwavkv.supabase.co
Environment: Production, Preview, Development ✓
```

```
Name: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M
Environment: Production, Preview, Development ✓
```

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M
Environment: Production, Preview, Development ✓
```

```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6
Environment: Production, Preview, Development ✓
```

### 3. Nach dem Setzen

1. Scrolle nach oben
2. Klicke auf **"Redeploy"** → **"Redeploy"**
3. Oder führe aus: `vercel --prod`

## ✅ Fertig!

Nach dem Redeploy sollte deine App online sein!

**URL**: https://expertico-xxxxx.vercel.app

---

**Tipp**: Du kannst die Environment Variables auch über Vercel CLI setzen, aber das Dashboard ist einfacher!

