const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Expertico Database Setup\n');

// Lade .env
const envPath = '.env';
let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

// Aktualisiere nur die Supabase URLs mit der neuen Projekt-Referenz
const projectRef = 'utrzzinplffvlzxwavkv';
const password = 'NewHorizon2023!!!!';

// Mögliche Regionen testen
const regions = ['eu-central-1', 'eu-west-1', 'us-east-1', 'us-west-1'];

console.log('📋 Versuche Connection String zu finden...\n');

// Erstelle .env mit verschiedenen Region-Optionen
let newEnv = envContent;

// Ersetze DATABASE_URL
const dbUrlPattern = /DATABASE_URL="[^"]*"/;
const newDbUrl = `DATABASE_URL="postgresql://postgres.${projectRef}:${password}@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"`;

if (dbUrlPattern.test(newEnv)) {
  newEnv = newEnv.replace(dbUrlPattern, newDbUrl);
} else {
  newEnv += `\n${newDbUrl}\n`;
}

// Ersetze DIRECT_URL
const directUrlPattern = /DIRECT_URL="[^"]*"/;
const newDirectUrl = `DIRECT_URL="postgresql://postgres.${projectRef}:${password}@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"`;

if (directUrlPattern.test(newEnv)) {
  newEnv = newEnv.replace(directUrlPattern, newDirectUrl);
} else {
  newEnv += `\n${newDirectUrl}\n`;
}

// Aktualisiere SUPABASE_URL
newEnv = newEnv.replace(/SUPABASE_URL="[^"]*"/, `SUPABASE_URL="https://${projectRef}.supabase.co"`);

// Aktualisiere SUPABASE_ANON_KEY
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M';
newEnv = newEnv.replace(/SUPABASE_ANON_KEY="[^"]*"/, `SUPABASE_ANON_KEY="${anonKey}"`);

fs.writeFileSync(envPath, newEnv);
console.log('✅ .env Datei aktualisiert!\n');

console.log('🧪 Teste Datenbank-Verbindung...\n');
try {
  execSync('npm run db:push', { stdio: 'inherit' });
  console.log('\n✅ ERFOLG! Datenbank ist eingerichtet!\n');
} catch (error) {
  console.log('\n⚠️  Region könnte falsch sein. Bitte hole den Connection String aus Supabase:\n');
  console.log('   1. Gehe zu: https://app.supabase.com/project/utrzzinplffvlzxwavkv/settings/database');
  console.log('   2. Kopiere Connection String (URI)');
  console.log('   3. Führe aus: node update_env_db.js');
  console.log('   4. Füge den String ein\n');
}
