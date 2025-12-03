#!/usr/bin/env bash

set -euo pipefail

# Konfiguration (anpassen falls nötig)
ENV_FILE="./.env"
VAR_NAME="DATABASE_URL"

timestamp() {
  date +"%Y%m%dT%H%M%S"
}

# Sicherstellen, dass wir interaktiv sind
if [[ -t 0 ]]; then
  echo "Bitte füge den Connection String ein (er muss mit postgresql:// beginnen)."
  read -r -p "Connection String: " CONN
else
  echo "Keine interaktive Eingabe möglich. Bitte das Skript interaktiv ausführen." >&2
  exit 1
fi

# Einfache Validierung
if [[ -z "$CONN" || "${CONN:0:11}" != "postgresql://" ]]; then
  echo "Ungültiger Connection String. Er muss mit 'postgresql://' beginnen." >&2
  exit 2
fi

# Backup der existierenden .env
if [[ -f "$ENV_FILE" ]]; then
  BACKUP="${ENV_FILE}.backup.$(timestamp)"
  cp -- "$ENV_FILE" "$BACKUP"
  echo "Backup der bestehenden .env erstellt: $BACKUP"
else
  echo "Keine bestehende .env gefunden — es wird eine neue Datei erstellt: $ENV_FILE"
  touch "$ENV_FILE"
fi

# Wenn Variable bereits existiert, ersetzen; sonst anhängen
if grep -qE "^${VAR_NAME}=" "$ENV_FILE"; then
  # sed-Inplace: sichere Methode mit temp-file für Mac & Linux portability
  TMP="$(mktemp)"
  awk -v var="$VAR_NAME" -v val="$CONN" 'BEGIN{FS=OFS="="} $1==var{$2=val; found=1} {print} END{if(!found) print var"="val}' "$ENV_FILE" > "$TMP"
  mv "$TMP" "$ENV_FILE"
  echo "Variable $VAR_NAME in $ENV_FILE aktualisiert."
else
  echo "${VAR_NAME}=${CONN}" >> "$ENV_FILE"
  echo "Variable $VAR_NAME in $ENV_FILE hinzugefügt."
fi

# Setze restriktive Dateirechte
chmod 600 "$ENV_FILE" || true
echo "Dateiberechtigungen für $ENV_FILE auf 600 gesetzt (falls unterstützt)."

echo "Fertig. Bitte stelle sicher, dass der Connection String korrekt ist und dass du ihn nicht öffentlich teilst."

