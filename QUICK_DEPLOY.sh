#!/bin/bash

echo "🚀 Expertico Quick Deploy"
echo "========================"
echo ""

# Prüfe ob Git initialisiert ist
if [ ! -d ".git" ]; then
    echo "📦 Git initialisieren..."
    git init
    git add .
    git commit -m "Initial commit: Expertico Platform"
    echo "✅ Git initialisiert!"
    echo ""
    echo "📝 Nächste Schritte:"
    echo "   1. Erstelle Repository auf GitHub"
    echo "   2. Führe aus: git remote add origin https://github.com/DEIN-USERNAME/expertico.git"
    echo "   3. Führe aus: git push -u origin main"
    echo ""
else
    echo "✅ Git bereits initialisiert"
fi

echo ""
echo "🌐 Auf Vercel deployen:"
echo "   1. Gehe zu: https://vercel.com/new"
echo "   2. Importiere dein GitHub Repository"
echo "   3. Füge Environment Variables hinzu (siehe DEPLOY_VERCEL.md)"
echo "   4. Klicke auf Deploy"
echo ""
echo "📖 Detaillierte Anleitung: DEPLOY_VERCEL.md"
