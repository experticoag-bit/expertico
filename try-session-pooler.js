const { execSync } = require('child_process');
const fs = require('fs');

const projectRef = 'utrzzinplffvlzxwavkv';
const password = 'NewHorizon2023!!!!';
const regions = ['eu-central-1', 'eu-west-1', 'us-east-1', 'us-west-1', 'ap-southeast-1', 'eu-north-1'];

console.log('🔍 Teste Session Pooler mit verschiedenen Regionen...\n');

for (const region of regions) {
  console.log(`Testing ${region}...`);
  
  const dbUrl = `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1`;
  const directUrl = `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:5432/postgres`;
  
  let env = fs.readFileSync('.env', 'utf8');
  env = env.replace(/DATABASE_URL="[^"]*"/, `DATABASE_URL="${dbUrl}"`);
  env = env.replace(/DIRECT_URL="[^"]*"/, `DIRECT_URL="${directUrl}"`);
  fs.writeFileSync('.env', env);
  
  try {
    execSync('npm run db:push', { stdio: 'pipe', timeout: 15000 });
    console.log(`\n✅ ERFOLG! Region: ${region}\n`);
    process.exit(0);
  } catch (e) {
    // Nächste Region
  }
}

console.log('\n❌ Keine Region funktioniert.\n');
console.log('📋 Bitte hole den Session Pooler String manuell:\n');
console.log('   1. Supabase → Settings → Database');
console.log('   2. Connection string → Session (nicht Direct!)');
console.log('   3. Tab URI → Kopieren\n');
