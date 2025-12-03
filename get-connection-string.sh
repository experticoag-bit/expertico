#!/bin/bash

echo "🔍 Connection String aus Supabase holen"
echo "======================================="
echo ""

# Versuche mit Supabase CLI
if command -v supabase &> /dev/null; then
    echo "✅ Supabase CLI gefunden"
    echo ""
    echo "Versuche Connection String zu holen..."
    supabase status --project-ref utrzzinplffvlzxwavkv 2>/dev/null || echo "CLI nicht verlinkt"
else
    echo "⚠️  Supabase CLI nicht installiert"
    echo ""
    echo "📋 MANUELLE METHODE:"
    echo "==================="
    echo "1. Gehe zu: https://app.supabase.com/project/utrzzinplffvlzxwavkv/settings/database"
    echo "2. Scrolle zu 'Connection string'"
    echo "3. Klicke auf Tab 'URI'"
    echo "4. Kopiere den String"
    echo ""
    echo "Der String sieht so aus:"
    echo "postgresql://postgres.utrzzinplffvlzxwavkv:NewHorizon2023!!!!@aws-0-XXXXX.pooler.supabase.com:6543/postgres"
    echo ""
    echo "Dann führe aus: node update_env_db.js"
fi
