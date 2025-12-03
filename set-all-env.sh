#!/bin/bash

echo "🔑 Setze alle Environment Variables in Vercel..."
echo "================================================"
echo ""

# Lade .env
source .env 2>/dev/null

# Setze alle Variablen
echo "📋 Setze Variablen..."

echo "DATABASE_URL..."
echo "$DATABASE_URL" | vercel env add DATABASE_URL production preview development

echo "DIRECT_URL..."
echo "$DIRECT_URL" | vercel env add DIRECT_URL production preview development

echo "NEXTAUTH_SECRET..."
echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production preview development

echo "NEXTAUTH_URL..."
echo "$NEXTAUTH_URL" | vercel env add NEXTAUTH_URL production preview development

echo "SUPABASE_URL..."
echo "$SUPABASE_URL" | vercel env add SUPABASE_URL production preview development

echo "NEXT_PUBLIC_SUPABASE_URL..."
echo "$NEXT_PUBLIC_SUPABASE_URL" | vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development

echo "SUPABASE_ANON_KEY..."
echo "$SUPABASE_ANON_KEY" | vercel env add SUPABASE_ANON_KEY production preview development

echo "NEXT_PUBLIC_SUPABASE_ANON_KEY..."
echo "$NEXT_PUBLIC_SUPABASE_ANON_KEY" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development

echo "SUPABASE_SERVICE_ROLE_KEY..."
echo "$SUPABASE_SERVICE_ROLE_KEY" | vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development

echo ""
echo "✅ Alle Variablen gesetzt!"
echo ""
echo "🚀 Jetzt deployen:"
echo "vercel --prod"
