// update_env_db.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ENV_FILE = process.env.ENV_FILE || path.resolve(process.cwd(), '.env');
const VAR_NAME = process.env.ENV_VAR_NAME || 'DATABASE_URL';

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function promptForConn(defaultValue) {
  if (process.env.DB_STRING) return process.env.DB_STRING;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const question = (q) => new Promise((res) => rl.question(q, res));
  const answer = await question(`Bitte Connection String eingeben (beginnt mit postgresql://): ${defaultValue ? `[default ${defaultValue}] ` : ''}`);
  rl.close();
  return (answer && answer.trim()) || defaultValue || '';
}

(async function main() {
  try {
    const provided = await promptForConn();
    const conn = provided.trim();

    if (!conn || !conn.startsWith('postgresql://')) {
      console.error('Ungültiger Connection String. Er muss mit "postgresql://" beginnen.');
      process.exit(2);
    }

    // Backup
    if (fs.existsSync(ENV_FILE)) {
      const backupFile = `${ENV_FILE}.backup.${timestamp()}`;
      fs.copyFileSync(ENV_FILE, backupFile);
      console.log(`Backup erstellt: ${backupFile}`);
    } else {
      console.log(`.env existiert nicht. Erstelle neue Datei: ${ENV_FILE}`);
      fs.writeFileSync(ENV_FILE, '', { mode: 0o600 });
    }

    const content = fs.readFileSync(ENV_FILE, 'utf8');
    const lines = content.split(/\r?\n/).filter(() => true);
    let found = false;
    const newLines = lines.map((line) => {
      const m = line.match(/^([^=#\s]+)\s*=\s*(.*)$/);
      if (m && m[1] === VAR_NAME) {
        found = true;
        return `${VAR_NAME}=${conn}`;
      }
      return line;
    }).filter((l) => l !== undefined);

    if (!found) newLines.push(`${VAR_NAME}=${conn}`);

    fs.writeFileSync(ENV_FILE, newLines.join('\n') + '\n', { mode: 0o600 });
    try { fs.chmodSync(ENV_FILE, 0o600); } catch (e) { /* best effort */ }

    console.log(`Variable ${VAR_NAME} in ${ENV_FILE} gesetzt/aktualisiert. Dateiberechtigungen wurden gesetzt.`);
    console.log('Fertig — gib den Connection String nicht in nicht vertrauenswürdige Umgebungen weiter.');
  } catch (err) {
    console.error('Fehler:', err.message || err);
    process.exit(1);
  }
})();

