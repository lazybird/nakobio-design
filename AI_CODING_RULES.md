# Instructions pour Assistants IA & Développeurs (AI_CODING_RULES)

Ce fichier définit les règles strictes de développement front-end et design pour tous les projets du dépôt (Campus, Nako.bio, Biosain, Documents).

---

## 1. RÈGLES TYPOGRAPHIQUES ABSOLUES

- **INTERDICTION STRICTE** d'utiliser `Quicksand`, `Poppins`, `Montserrat`, `Roboto` ou toute autre police non autorisée.
- **SEULES DEUX POLICES SONT AUTORISÉES** :
  - `Newsreader` (Serif) pour : `h1`, `h2`, `h3`, numéros d'étapes (`01`, `02`), citations et grands chiffres statistiques.
  - `Inter` (Sans-serif) pour : tout le reste (`body`, `p`, `h4`, `h5`, boutons, tableaux, badges, formulaires, navigation).
- Utilisez toujours les variables CSS `--font-serif` et `--font-sans`.

---

## 2. GESTION DES COULEURS ET VARIABLES CSS

- **Ne jamais coder en dur** de couleurs hexadécimales dans le CSS des composants.
- Utilisez systématiquement les tokens :
  - Surfaces : `var(--color-surface)`, `var(--color-surface-card)`, `var(--color-surface-sunken)`.
  - Encres : `var(--color-ink)`, `var(--color-ink-soft)`, `var(--color-ink-faint)`.
  - Bordures : `var(--color-border)`.
  - Marques : `var(--color-brand-primary)`, `var(--color-brand-secondary)`, `var(--color-brand-accent)`.
- Pour basculer entre les identités de marque, appliquez l'attribut `data-theme="nakobio"` ou `data-theme="biosain"` sur la balise `<html>` ou le conteneur racine.

---

## 3. STRUCTURE DES COMPOSANTS PÉDAGOGIQUES

- Les étapes de travail doivent utiliser la structure de cartouche `.step-card` :
  ```html
  <article class="step-card">
    <div class="step-header">
      <div class="step-meta-group">
        <span class="step-number">01</span>
        <h3 class="step-title">Titre de l'étape</h3>
      </div>
      <span class="step-badge">20 min</span>
    </div>
    <div class="step-body">
      <p>Instructions claires...</p>
    </div>
  </article>
  ```
- Les avertissements et conseils utilisent `.callout` :
  - Conseil : `.callout.callout-tip`
  - Vigilance : `.callout.callout-warning`
  - Erreur critique : `.callout.callout-danger`

---

## 4. COMPATIBILITÉ PRINT & MOBILE

- Tous les tableaux et fiches techniques doivent rester parfaitement lisibles sur écran mobile (360px de large).
- Toutes les pages de contenu pédagogique doivent supporter l'impression et l'export PDF propre via `print.css` (`@media print`).
