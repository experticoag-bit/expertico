const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q) => new Promise((resolve) => rl.question(q, resolve));

(async () => {
  console.log('🚀 Expertico Auto-Setup\n');
  console.log('📋 Bitte Connection String eingeben:');
  console.log('   (Finde ihn in: https://app.supabase.com/project/utrzzinplffvlzxwavkv/settings/database)\n');
  
  const connString = await question('Connection String: ');
  rl.close();

  if (!connString.trim() || !connString.startsWith('postgresql://')) {
    console.error('\n❌ Ungültiger Connection String!');
    process.exit(1);
  }

  // Erstelle DIRECT_URL (gleicher String, aber Port 5432)
  const directUrl = connString.replace(':6543/', ':5432/').replace('?pgbouncer=true&connection_limit=1', '');

  // Lade .env
  let env = fs.existsSync('.env') ? fs.readFileSync('.env', 'utf8') : '';

  // Aktualisiere DATABASE_URL
  if (env.includes('DATABASE_URL=')) {
    env = env.replace(/DATABASE_URL="[^"]*"/, `DATABASE_URL="${connString}"`);
  } else {
    env += `\nDATABASE_URL="${connString}"\n`;
  }

  // Aktualisiere DIRECT_URL
  if (env.includes('DIRECT_URL=')) {
    env = env.replace(/DIRECT_URL="[^"]*"/, `DIRECT_URL="${directUrl}"`);
  } else {
    env += `\nDIRECT_URL="${directUrl}"\n`;
  }

  // Stelle sicher, dass alle anderen Variablen vorhanden sind
  const required = {
    'NEXTAUTH_SECRET': 'K9DyoELpuHfpO2p7QaJx1T/TFoukMttbR+zvFPuWCo4=',
    'NEXTAUTH_URL': 'http://localhost:3000',
    'SUPABASE_URL': 'https://utrzzinplffvlzxwavkv.supabase.co',
    'SUPABASE_ANON_KEY': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cnp6aW5wbGZmdmx6eHdhdmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzI3OTcsImV4cCI6MjA4MDM0ODc5N30.MQlnw7QAuMJnYIqFNSyi24BStWcU7V0f4k-uSWY63-M',
    'SUPABASE_SERVICE_ROLE_KEY': 'sbp_201fa6a5ab37c726331d1c8881f718e6f21479f6'
  };

  Object.entries(required).forEach(([key, value]) => {
    if (!env.includes(`${key}=`)) {
      env += `\n${key}="${value}"\n`;
    } else {
      env = env.replace(new RegExp(`${key}="[^"]*"`), `${key}="${value}"`);
    }
  });

  fs.writeFileSync('.env', env);
  console.log('\n✅ .env Datei aktualisiert!');
  console.log('\n🧪 Teste Datenbank-Verbindung...\n');

  const { execSync } = require('child_process');
  try {
    execSync('npm run db:push', { stdio: 'inherit' });
    console.log('\n✅ ERFOLG! Datenbank ist eingerichtet!\n');
  } catch (error) {
    console.log('\n❌ Fehler beim Pushen. Bitte prüfe den Connection String.\n');
    process.exit(1);
  }
})();
