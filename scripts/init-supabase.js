#!/usr/bin/env node

/**
 * 🚀 Expertico Supabase Initialisierung
 * 
 * Dieses Script hilft beim Einrichten der Supabase-Verbindung
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Expertico Supabase Setup\n');
console.log('==========================\n');

// Prüfe ob .env bereits existiert
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env Datei existiert bereits!\n');
  process.exit(1);
}

// Generiere NEXTAUTH_SECRET
let nextAuthSecret;
try {
  nextAuthSecret = execSync('openssl rand -base64 32', { encoding: 'utf-8' }).trim();
} catch (error) {
  console.log('⚠️  openssl nicht gefunden. Verwende zufälliges Secret...');
  nextAuthSecret = require('crypto').randomBytes(32).toString('base64');
}

// Template für .env
const envTemplate = `# ============================================
# SUPABASE DATABASE
# ============================================
# Connection String mit Pooling (für App)
# Format: postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Direct Connection (für Prisma Migrations - OHNE Pooling)
# Format: postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"

# ============================================
# NEXTAUTH.JS
# ============================================
NEXTAUTH_SECRET="${nextAuthSecret}"
NEXTAUTH_URL="http://localhost:3000"

# ============================================
# SUPABASE API KEYS
# ============================================
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="your-anon-key-here"
SUPABASE_SERVICE_ROLE_KEY="sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6"

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
`;

// Schreibe .env Datei
fs.writeFileSync(envPath, envTemplate);

console.log('✅ .env Datei erstellt!\n');
console.log('📝 Bitte fülle folgende Werte in .env aus:\n');
console.log('   1. DATABASE_URL - Supabase Connection String (mit Pooling)');
console.log('   2. DIRECT_URL - Supabase Connection String (ohne Pooling)');
console.log('   3. SUPABASE_URL - Deine Supabase Projekt-URL');
console.log('   4. SUPABASE_ANON_KEY - Anon Key aus Supabase Dashboard\n');
console.log('💡 Tipp: Finde die Werte in Supabase Dashboard → Settings → Database/API\n');
console.log('🚀 Nächste Schritte:\n');
console.log('   1. Bearbeite .env und füge deine Supabase-Daten ein');
console.log('   2. Führe aus: npx prisma generate');
console.log('   3. Führe aus: npx prisma db push');
console.log('   4. Starte den Server: npm run dev\n');

