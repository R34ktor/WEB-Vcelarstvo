#!/bin/bash
# Skript na nahratie projektu na GitHub: https://github.com/R34ktor/WEB-Vcelarstvo
# Spusti v termináli: bash upload-to-github.sh

set -e
cd "$(dirname "$0")"

echo ">>> Kontrola Gitu..."
if ! command -v git &> /dev/null; then
  echo "CHYBA: Git nie je nainštalovaný. Spusti: xcode-select --install"
  exit 1
fi

echo ">>> Inicializácia repozitára (ak ešte neexistuje)..."
if [ ! -d .git ]; then
  git init
  git branch -M main
fi

echo ">>> Pridanie remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/R34ktor/WEB-Vcelarstvo.git

echo ">>> Pridávam všetky súbory (bez node_modules)..."
git add .
git status

echo ">>> Vytváram commit..."
git commit -m "Aktualizácia stránky – Next.js Včelárstvo Jozef Goňo (vrátane Zaujímavostí o včelách)" || echo "(žiadne zmeny na commit)"

echo ">>> Odosielam na GitHub..."
git push -u origin main

echo ""
echo ">>> Hotovo! Stránka je na: https://github.com/R34ktor/WEB-Vcelarstvo"
echo ">>> Vercel by mal automaticky spustiť nový deployment."
echo ""
echo "Ak push zlyhal (napr. 'unrelated histories'), skús:"
echo "  git pull origin main --allow-unrelated-histories"
echo "  git push -u origin main"
