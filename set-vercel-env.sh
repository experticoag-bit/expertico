#!/bin/bash

echo "🔑 Environment Variables für Vercel setzen"
echo "==========================================="
echo ""

# Lade .env
source .env 2>/dev/null || echo "⚠️  .env nicht gefunden"

# Setze Variablen
echo "📋 Setze Environment Variables..."

vercel env add DATABASE_URL production preview development <<< "$DATABASE_URL" 2>/dev/null || echo "DATABASE_URL bereits gesetzt"
vercel env add DIRECT_URL production preview development <<< "$DIRECT_URL" 2>/dev/null || echo "DIRECT_URL bereits gesetzt"
vercel env add NEXTAUTH_SECRET production preview development <<< "$NEXTAUTH_SECRET" 2>/dev/null || echo "NEXTAUTH_SECRET bereits gesetzt"
vercel env add SUPABASE_URL production preview development <<< "$SUPABASE_URL" 2>/dev/null || echo "SUPABASE_URL bereits gesetzt"
vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development <<< "$NEXT_PUBLIC_SUPABASE_URL" 2>/dev/null || echo "NEXT_PUBLIC_SUPABASE_URL bereits gesetzt"
vercel env add SUPABASE_ANON_KEY production preview development <<< "$SUPABASE_ANON_KEY" 2>/dev/null || echo "SUPABASE_ANON_KEY bereits gesetzt"
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development <<< "$NEXT_PUBLIC_SUPABASE_ANON_KEY" 2>/dev/null || echo "NEXT_PUBLIC_SUPABASE_ANON_KEY bereits gesetzt"
vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development <<< "$SUPABASE_SERVICE_ROLE_KEY" 2>/dev/null || echo "SUPABASE_SERVICE_ROLE_KEY bereits gesetzt"

echo ""
echo "✅ Environment Variables gesetzt!"
echo ""
echo "⚠️  WICHTIG: Setze NEXTAUTH_URL manuell auf deine Vercel URL!"
echo "   vercel env add NEXTAUTH_URL production preview development"
echo ""
echo "🚀 Dann deployen: vercel --prod"
