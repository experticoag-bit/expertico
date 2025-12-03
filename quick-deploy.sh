#!/bin/bash

echo "🚀 EXPERtico Quick Deploy - Alles automatisch!"
echo "=============================================="
echo ""

# Lade .env
if [ ! -f .env ]; then
    echo "❌ .env Datei nicht gefunden!"
    exit 1
fi

source .env

echo "📋 Setze Environment Variables in Vercel..."
echo ""

# Setze NEXTAUTH_URL auf die Vercel URL
VERCEL_URL=$(vercel ls 2>/dev/null | grep "expertico" | head -1 | awk '{print $2}' | sed 's|https://||')
if [ -z "$VERCEL_URL" ]; then
    VERCEL_URL="expertico-bbkpvs59q-comesnakys-projects.vercel.app"
fi
NEXTAUTH_URL="https://$VERCEL_URL"

echo "🌐 Vercel URL: $NEXTAUTH_URL"
echo ""

# Setze alle Variablen (mit automatischen Antworten)
echo "$DATABASE_URL" | vercel env add DATABASE_URL production preview development --yes 2>/dev/null || echo "DATABASE_URL bereits gesetzt"
echo "$DIRECT_URL" | vercel env add DIRECT_URL production preview development --yes 2>/dev/null || echo "DIRECT_URL bereits gesetzt"
echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production preview development --yes 2>/dev/null || echo "NEXTAUTH_SECRET bereits gesetzt"
echo "$NEXTAUTH_URL" | vercel env add NEXTAUTH_URL production preview development --yes 2>/dev/null || echo "NEXTAUTH_URL bereits gesetzt"
echo "$SUPABASE_URL" | vercel env add SUPABASE_URL production preview development --yes 2>/dev/null || echo "SUPABASE_URL bereits gesetzt"
echo "$NEXT_PUBLIC_SUPABASE_URL" | vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development --yes 2>/dev/null || echo "NEXT_PUBLIC_SUPABASE_URL bereits gesetzt"
echo "$SUPABASE_ANON_KEY" | vercel env add SUPABASE_ANON_KEY production preview development --yes 2>/dev/null || echo "SUPABASE_ANON_KEY bereits gesetzt"
echo "$NEXT_PUBLIC_SUPABASE_ANON_KEY" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development --yes 2>/dev/null || echo "NEXT_PUBLIC_SUPABASE_ANON_KEY bereits gesetzt"
echo "$SUPABASE_SERVICE_ROLE_KEY" | vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development --yes 2>/dev/null || echo "SUPABASE_SERVICE_ROLE_KEY bereits gesetzt"

echo ""
echo "✅ Environment Variables gesetzt!"
echo ""
echo "🚀 Deploye jetzt..."
vercel --prod
