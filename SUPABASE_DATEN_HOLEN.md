# 📋 Supabase-Daten finden - Schritt für Schritt

## 🎯 Schritt 1: Supabase Dashboard öffnen

1. Gehe zu: [https://app.supabase.com](https://app.supabase.com)
2. Logge dich ein
3. Wähle dein Projekt aus (oder erstelle ein neues)

## 🎯 Schritt 2: Connection String finden

1. Klicke links auf **"Settings"** (Zahnrad-Icon)
2. Klicke auf **"Database"** (in der linken Sidebar)
3. Scrolle runter zu **"Connection string"**
4. Klicke auf den Tab **"URI"**
5. Du siehst einen String wie:
   ```
   postgresql://postgres.abcdefghijklmnop:DeinPasswort@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```
6. **Kopiere diesen gesamten String!** (Strg+C / Cmd+C)

## 🎯 Schritt 3: Direct URL erstellen

1. Nimm den kopierten Connection String
2. Ändere nur den **Port** von `6543` zu `5432`
3. Beispiel:
   - Original: `...pooler.supabase.com:6543/postgres`
   - Direct: `...pooler.supabase.com:5432/postgres`

## 🎯 Schritt 4: API Keys finden

1. Im Supabase Dashboard: **Settings** → **API**
2. Du siehst:
   - **URL**: z.B. `https://abcdefghijklmnop.supabase.co`
   - **anon public**: Ein langer Key der mit `eyJ...` beginnt
3. **Kopiere beide Werte!**

## 🎯 Schritt 5: Datenbank-Passwort finden

⚠️ **WICHTIG**: Wenn du das Passwort vergessen hast:
1. Gehe zu **Settings** → **Database**
2. Scrolle zu **"Database password"**
3. Klicke auf **"Reset database password"**
4. Wähle ein neues Passwort (⚠️ **MERKE ES DIR!**)

Das Passwort steht auch im Connection String:
```
postgresql://postgres.xxx:HIER-STEHT-DEIN-PASSWORT@aws-0-...
```

## 🎯 Schritt 6: Projekt-Referenz finden

Die Projekt-Referenz findest du:
- Im Connection String: `postgres.ABCDEFGHIJKLMNOP` → `ABCDEFGHIJKLMNOP` ist die Referenz
- In der URL: `https://ABCDEFGHIJKLMNOP.supabase.co`
- In Settings → General → Reference ID

---

**Jetzt hast du alle Daten! Weiter zu Schritt 2: .env Datei bearbeiten** 👇

