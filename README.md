# Design System Unifié — Nakôbio × Biosain

Ce dossier regroupe le socle visuel, typographique, chromatique et composant partagé pour :
- **Le site vitrine** `nako.bio`
- **Le site vitrine / maraîchage** `biosain`
- **La plateforme de formation** `campus` (Astro)
- **Les documents, storyboards, fiches de cultures et exports PDF**

---

## 📁 Structure du Dossier

- **[`tokens/`](file:///home/sylvain/Dev/nakobio/design/tokens/)** :
  - [`tokens.css`](file:///home/sylvain/Dev/nakobio/design/tokens/tokens.css) : Variables CSS `:root` (Polices Playfair Display × Quicksand, échelles modulaires, espacements 4/8px, surfaces naturelles, encres).
  - [`themes.css`](file:///home/sylvain/Dev/nakobio/design/tokens/themes.css) : Déclinaisons de marque activables via `data-theme="nakobio"` ou `data-theme="biosain"`.
  - [`print.css`](file:///home/sylvain/Dev/nakobio/design/tokens/print.css) : Règles d'impression pour PDF et tirages papier A4 (sauts de page propres, encres optimisées).
  - [`tokens.json`](file:///home/sylvain/Dev/nakobio/design/tokens/tokens.json) : Export JSON standard pour intégration dans Tailwind, scripts ou configs Astro.
- **[`components/`](file:///home/sylvain/Dev/nakobio/design/components/)** :
  - [`buttons.css`](file:///home/sylvain/Dev/nakobio/design/components/buttons.css) : Boutons primaires, secondaires, accents et ghost.
  - [`badges.css`](file:///home/sylvain/Dev/nakobio/design/components/badges.css) : Badges de statut maraîcher (Bio, Semences, Stock, Alertes).
  - [`cards.css`](file:///home/sylvain/Dev/nakobio/design/components/cards.css) : Cartes interactives produits et fiches de synthèse pédagogiques.
  - [`steps.css`](file:///home/sylvain/Dev/nakobio/design/components/steps.css) : Cartouches d'étapes séquentielles avec grands numéros serif (`01`, `02`).
  - [`callouts.css`](file:///home/sylvain/Dev/nakobio/design/components/callouts.css) : Encadrés d'avertissement et bonnes pratiques sur fond sunken.
  - [`tables.css`](file:///home/sylvain/Dev/nakobio/design/components/tables.css) : Tableaux techniques pour dosages, matériel et cotes de culture.
  - [`forms.css`](file:///home/sylvain/Dev/nakobio/design/components/forms.css) : Formulaires, champs de saisie, sélecteurs et zones de téléversement.
- **[`snippets/`](file:///home/sylvain/Dev/nakobio/design/snippets/)** :
  - Extraits HTML prêts à copier/coller pour tous les composants (`buttons.html`, `badges.html`, `cards.html`, `callouts.html`, `tables.html`, `forms.html`).
- **[`scripts/`](file:///home/sylvain/Dev/nakobio/design/scripts/)** :
  - [`generate-llms.js`](file:///home/sylvain/Dev/nakobio/design/scripts/generate-llms.js) : Générateur automatique du fichier [`llms.txt`](file:///home/sylvain/Dev/nakobio/design/llms.txt) (inspiré de DSML) documentant tous les tokens, composants, snippets et règles IA.
- **[`templates/`](file:///home/sylvain/Dev/nakobio/design/templates/)** :
  - [`demo.html`](file:///home/sylvain/Dev/nakobio/design/templates/demo.html) : Démonstrateur interactif complet avec bascule directe entre le thème **Nakôbio** et le thème **Biosain**.
- **[`DESIGN_SYSTEM.md`](file:///home/sylvain/Dev/nakobio/design/DESIGN_SYSTEM.md)** : Spécifications et documentation complète de référence.
- **[`AI_CODING_RULES.md`](file:///home/sylvain/Dev/nakobio/design/AI_CODING_RULES.md)** : Règles strictes pour les assistants de code IA (interdiction de polices non autorisées, respect des tokens).
- **[`llms.txt`](file:///home/sylvain/Dev/nakobio/design/llms.txt)** : Référence complète et condensée pour les agents IA et LLM.

---

## 🚀 Intégration Rapide

### Dans une page HTML ou un layout Astro :
```html
<link rel="stylesheet" href="/design/tokens/tokens.css">
<link rel="stylesheet" href="/design/tokens/themes.css">
<link rel="stylesheet" href="/design/components/steps.css">
<link rel="stylesheet" href="/design/components/callouts.css">
<link rel="stylesheet" href="/design/tokens/print.css">
```

### Basculer de thème :
```html
<!-- Pour l'univers Nakôbio (Mali / Pédagogie / Sol vivant) -->
<html lang="fr" data-theme="nakobio">

<!-- Pour l'univers Biosain (Europe / Maraîchage & Vente directe) -->
<html lang="fr" data-theme="biosain">
```
