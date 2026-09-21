import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const tokensPath = path.join(rootDir, 'tokens/tokens.json');
const snippetsDir = path.join(rootDir, 'snippets');
const componentsDir = path.join(rootDir, 'components');
const aiRulesPath = path.join(rootDir, 'AI_CODING_RULES.md');
const outputPathRoot = path.join(rootDir, 'public/llms.txt');
const outputPathDocs = path.join(rootDir, 'llms.txt');

function scanDir(dir, ext = '.html') {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(filePath, ext));
    } else if (file.endsWith(ext)) {
      results.push(filePath);
    }
  });
  return results;
}

let tokens = {};
if (fs.existsSync(tokensPath)) {
  tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
}

let llmsContent = `# Nakôbio × Biosain — Design System Unifié (Guide pour LLM / Agents IA)

> Système de conception unifié pour l'écosystème agroécologique & maraîcher :
> - Vitrine nako.bio (Mali / Sahel / Agroécologie & Pédagogie)
> - Biosain (Europe / Autriche / Maraîchage bio-intensif de précision & Semences)
> - Campus de formation (campus.nako.bio)
> - Documents techniques, storyboards et fiches pédagogiques imprimables A4.

---

## 1. Typographie Obligatoire & Tokens CSS
- Titres, Chiffres repères, Citations : \`var(--font-serif)\` (Playfair Display)
- Textes courants, UI, Badges, Tableaux, Boutons : \`var(--font-sans)\` (Quicksand)
- Interdiction formelle d'importer d'autres polices (Roboto, Montserrat, Poppins, etc.).

## 2. Thèmes & Identité de Marque
- Thème Nakôbio : \`data-theme="nakobio"\` (Vert Forêt Sahel #2F4A34, Ocre Latérite #C86832, Or Soleil #E0A030)
- Thème Biosain : \`data-theme="biosain"\` (Or Impérial Bio #CAAE00, Vert Forêt #2F4A34, Vert Siphon Profond #1E3324)

---

## 3. Catalogue des Composants CSS & Snippets HTML

`;

// Ajout des snippets HTML
const snippetFiles = scanDir(snippetsDir, '.html');
snippetFiles.forEach((file) => {
  const relPath = path.relative(snippetsDir, file);
  const content = fs.readFileSync(file, 'utf8');
  llmsContent += `### Snippet HTML: snippets/${relPath}\n\`\`\`html\n${content.trim()}\n\`\`\`\n\n`;
});

// Ajout des composants CSS
const componentFiles = scanDir(componentsDir, '.css');
componentFiles.forEach((file) => {
  const relPath = path.relative(componentsDir, file);
  const content = fs.readFileSync(file, 'utf8');
  llmsContent += `### Composant CSS: components/${relPath}\n\`\`\`css\n${content.trim()}\n\`\`\`\n\n`;
});

if (fs.existsSync(aiRulesPath)) {
  const aiRulesContent = fs.readFileSync(aiRulesPath, 'utf8');
  llmsContent += `---\n\n## 4. Directives Strictes & Règles IA (AI_CODING_RULES.md)\n\n${aiRulesContent.trim()}\n`;
}

// Écriture du llms.txt dans public/ (pour export HTTP /llms.txt) et à la racine
fs.writeFileSync(outputPathDocs, llmsContent, 'utf8');
console.log(`Successfully generated ${outputPathDocs}`);

if (fs.existsSync(path.dirname(outputPathRoot))) {
  fs.writeFileSync(outputPathRoot, llmsContent, 'utf8');
  console.log(`Successfully generated ${outputPathRoot}`);
}
