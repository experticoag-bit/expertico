#!/bin/bash

echo "🚀 Expertico auf Vercel deployen"
echo "=================================="
echo ""

# Lade .env Variablen
if [ -f .env ]; then
    echo "✅ .env Datei gefunden"
    source .env
else
    echo "❌ .env Datei nicht gefunden!"
    exit 1
fi

echo ""
echo "📋 Environment Variables werden gesetzt..."
echo ""

# Deploy mit Vercel
vercel --yes

echo ""
echo "✅ Deployment gestartet!"
echo ""
echo "📝 WICHTIG: Nach dem ersten Deploy:"
echo "   1. Gehe zu vercel.com Dashboard"
echo "   2. Wähle dein Projekt"
echo "   3. Settings → Environment Variables"
echo "   4. Füge alle Variablen aus .env hinzu"
echo ""
