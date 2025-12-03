const { execSync } = require('child_process');
const fs = require('fs');

const projectRef = 'utrzzinplffvlzxwavkv';
const password = 'NewHorizon2023!!!!';

// Mögliche Regionen für Zürich/Schweiz
const regions = [
  'eu-central-1',  // Frankfurt (nächste zu Zürich)
  'eu-central-2',  // Aktuelle
  'eu-west-1',     // Irland
  'eu-west-2',     // London
];

console.log('🔍 Teste Regionen für Zürich/Schweiz...\n');

for (const region of regions) {
  console.log(`Testing ${region}...`);
  
  const dbUrl = `postgresql://postgres.${projectRef}:${password}@aws-0-${region}.pooler.supabase.com:5432/postgres`;
  
  let env = fs.readFileSync('.env', 'utf8');
  env = env.replace(/DATABASE_URL="[^"]*"/, `DATABASE_URL="${dbUrl}"`);
  env = env.replace(/DIRECT_URL="[^"]*"/, `DIRECT_URL="${dbUrl}"`);
  fs.writeFileSync('.env', env);
  
  try {
    execSync('npm run db:push', { stdio: 'pipe', timeout: 10000 });
    console.log(`\n✅ ERFOLG! Region: ${region}\n`);
    console.log(`DATABASE_URL="${dbUrl}"\n`);
    process.exit(0);
  } catch (e) {
    // Nächste Region
  }
}

// Teste auch mit aws-1 statt aws-0
for (const region of regions) {
  console.log(`Testing aws-1-${region}...`);
  
  const dbUrl = `postgresql://postgres.${projectRef}:${password}@aws-1-${region}.pooler.supabase.com:5432/postgres`;
  
  let env = fs.readFileSync('.env', 'utf8');
  env = env.replace(/DATABASE_URL="[^"]*"/, `DATABASE_URL="${dbUrl}"`);
  env = env.replace(/DIRECT_URL="[^"]*"/, `DIRECT_URL="${dbUrl}"`);
  fs.writeFileSync('.env', env);
  
  try {
    execSync('npm run db:push', { stdio: 'pipe', timeout: 10000 });
    console.log(`\n✅ ERFOLG! Region: aws-1-${region}\n`);
    console.log(`DATABASE_URL="${dbUrl}"\n`);
    process.exit(0);
  } catch (e) {
    // Nächste Region
  }
}

console.log('\n❌ Keine Region funktioniert.\n');
console.log('📋 Bitte Connection String manuell aus Supabase kopieren!\n');
