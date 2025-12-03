#!/bin/bash

# 🚀 Expertico Supabase Setup Script
# Dieses Script hilft beim Einrichten von Supabase

echo "🚀 Expertico Supabase Setup"
echo "=========================="
echo ""

# Prüfe ob .env bereits existiert
if [ -f .env ]; then
    echo "⚠️  .env Datei existiert bereits!"
    read -p "Möchtest du sie überschreiben? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Abgebrochen."
        exit 1
    fi
fi

echo ""
echo "📝 Bitte gib deine Supabase-Daten ein:"
echo ""

# Supabase Connection String abfragen
read -p "Supabase Database URL (mit PASSWORD): " DATABASE_URL
read -p "Supabase Direct URL (ohne Pooling): " DIRECT_URL

# NextAuth Secret generieren
echo ""
echo "🔐 Generiere NEXTAUTH_SECRET..."
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# .env Datei erstellen
cat > .env << EOF
# ============================================
# SUPABASE DATABASE
# ============================================
DATABASE_URL="${DATABASE_URL}"
DIRECT_URL="${DIRECT_URL}"

# ============================================
# NEXTAUTH.JS
# ============================================
NEXTAUTH_SECRET="${NEXTAUTH_SECRET}"
NEXTAUTH_URL="http://localhost:3000"

# ============================================
# TWILIO (Telefon-Integration)
# ============================================
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_PHONE_NUMBER=""

# ============================================
# ELEVENLABS (Voice AI)
# ============================================
ELEVENLABS_API_KEY=""
ELEVENLABS_AGENT_ID=""

# ============================================
# OPENAI / AZURE (KI-Funktionen)
# ============================================
OPENAI_API_KEY=""
AZURE_OPENAI_ENDPOINT=""
AZURE_OPENAI_KEY=""
AZURE_OPENAI_DEPLOYMENT_NAME=""

# ============================================
# CAL.COM (Terminvereinbarung)
# ============================================
CALCOM_API_KEY=""

# ============================================
# STRIPE (Zahlungen)
# ============================================
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# ============================================
# RESEND (E-Mail Versand)
# ============================================
RESEND_API_KEY=""

# ============================================
# SUPABASE (Optional)
# ============================================
SUPABASE_URL=""
SUPABASE_ANON_KEY=""
SUPABASE_SERVICE_ROLE_KEY=""
EOF

echo ""
echo "✅ .env Datei erstellt!"
echo ""

# Prisma Client generieren
echo "📦 Generiere Prisma Client..."
npx prisma generate

echo ""
echo "🗄️  Pushe Datenbank-Schema..."
npx prisma db push

echo ""
echo "✅ Setup abgeschlossen!"
echo ""
echo "📚 Nächste Schritte:"
echo "   1. Starte den Dev-Server: npm run dev"
echo "   2. Öffne Prisma Studio: npx prisma studio"
echo "   3. Erstelle erste Test-Daten"
echo ""

