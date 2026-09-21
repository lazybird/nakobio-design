# Instructions pour Assistants IA & Développeurs (AI_CODING_RULES)

Ce fichier définit les règles strictes de développement front-end et design pour tous les projets du dépôt (Campus, Nako.bio, Biosain, Documents).

---

## 1. RÈGLES TYPOGRAPHIQUES ABSOLUES

- **INTERDICTION STRICTE** d'utiliser `Newsreader`, `Inter`, `Poppins`, `Montserrat`, `Roboto` ou toute autre police non autorisée.
- **SEULES DEUX POLICES SONT AUTORISÉES** :
  - `Playfair Display` (Serif) pour : `h1`, `h2`, `h3`, numéros d'étapes (`01`, `02`), citations et grands chiffres statistiques.
  - `Quicksand` (Sans-serif) pour : tout le reste (`body`, `p`, `h4`, `h5`, boutons, tableaux, badges, formulaires, navigation).
- Utilisez toujours les variables CSS `--font-serif` et `--font-sans`.
- Import Google Fonts obligatoire :
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Quicksand:wght@300;400;500;600;700&display=swap');
  ```

---

## 2. GESTION DES COULEURS ET VARIABLES CSS

- **Ne jamais coder en dur** de couleurs hexadécimales dans le CSS des composants.
- Utilisez systématiquement les tokens :
  - Surfaces : `var(--color-surface)`, `var(--color-surface-card)`, `var(--color-surface-sunken)`.
  - Encres : `var(--color-ink)`, `var(--color-ink-soft)`, `var(--color-ink-faint)`.
  - Bordures : `var(--color-border)`.
  - Marques : `var(--color-brand-primary)`, `var(--color-brand-secondary)`, `var(--color-brand-accent)`.
  - Gradients : `var(--gradient-hero)`, `var(--gradient-brand)`, `var(--gradient-accent)`.
- Pour basculer entre les identités de marque, appliquez l'attribut `data-theme="nakobio"` ou `data-theme="biosain"` sur la balise `<html>` ou le conteneur racine.

---

## 3. ANIMATIONS ET TRANSITIONS

- **Ne jamais coder en dur** une durée ou un easing d'animation.
- Utilisez toujours les tokens d'animation :
  - `var(--transition-fast)` : hover sur boutons, badges (100ms)
  - `var(--transition-base)` : la plupart des interactions (200ms) — **valeur par défaut**
  - `var(--transition-slow)` : transitions de section ou de page (350ms)
  - `var(--transition-bounce)` : micro-animations expressives type scale/pop (300ms bounce)
- Glassmorphism : toujours utiliser `backdrop-filter: blur(var(--blur-md))`.
- Respectez `@media (prefers-reduced-motion: reduce)` pour les animations.

---

## 4. STRUCTURE DES COMPOSANTS PÉDAGOGIQUES

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

## 5. COMPATIBILITÉ PRINT & MOBILE

- Tous les tableaux et fiches techniques doivent rester parfaitement lisibles sur écran mobile (360px de large).
- Toutes les pages de contenu pédagogique doivent supporter l'impression et l'export PDF propre via `print.css` (`@media print`).

