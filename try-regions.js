const { execSync } = require('child_process');
const fs = require('fs');

const projectRef = 'utrzzinplffvlzxwavkv';
const password = 'NewHorizon2023!!!!';
const regions = ['eu-central-1', 'eu-west-1', 'us-east-1', 'us-west-1', 'ap-southeast-1'];

console.log('🔍 Teste verschiedene Regionen...\n');

for (const region of regions) {
  console.log(`Testing ${region}...`);
  
  const dbUrl = `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1`;
  const directUrl = `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:5432/postgres`;
  
  let env = fs.readFileSync('.env', 'utf8');
  env = env.replace(/DATABASE_URL="[^"]*"/, `DATABASE_URL="${dbUrl}"`);
  env = env.replace(/DIRECT_URL="[^"]*"/, `DIRECT_URL="${directUrl}"`);
  fs.writeFileSync('.env', env);
  
  try {
    execSync('npm run db:push', { stdio: 'pipe', timeout: 10000 });
    console.log(`\n✅ ERFOLG! Region: ${region}\n`);
    console.log(`DATABASE_URL="${dbUrl}"`);
    console.log(`DIRECT_URL="${directUrl}"\n`);
    process.exit(0);
  } catch (e) {
    // Nächste Region versuchen
  }
}

console.log('\n❌ Keine Region funktioniert. Bitte Connection String manuell holen.\n');
