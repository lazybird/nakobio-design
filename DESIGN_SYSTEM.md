# Guide de Référence : Design System Unifié (Nakôbio × Biosain)

Ce design système réunit l'authenticité éditoriale et la chaleur de la terre avec la rigueur technique requise pour le maraîchage bio-intensif, les cours de formation et les documents de communication.

---

## 1. Principes Fondateurs

1. **Chaleur & Matière Naturelle** : Le fond n'est jamais un blanc clinique (`#FFFFFF`), mais un blanc chaud lin/papier naturel (`--color-surface: #FFFDF6`).
2. **Dualité Typographique stricte** :
   - **Newsreader** (Serif) : Voix éditoriale, titrages (`h1`, `h2`, `h3`), grands chiffres d'impact, numérotation des étapes (`01`, `02`).
   - **Inter** (Sans-serif) : Voix technique, clarté mobile, textes courants, tableaux, métadonnées, formulaires, boutons.
3. **Double Déclinaison de Marque via Tokens** :
   - **Nakôbio** : Vert forêt (`#2F4A34`), Latérite / Terre cuite (`#C86832`), Paille / Soleil (`#E0A030`).
   - **Biosain** : Ocre jaune historique (`#CAAE00`), Vert forêt profond (`#2F4A34`), Accent épicéa sombre (`#1E3324`).
4. **Pensé pour l'Export & l'Impression** : Fiches techniques et cours imprimables au format A4 sans déformation (`print.css`).

---

## 2. Fonderie Typographique

| Usage | Police | Poids | Variable CSS | Remarque |
| :--- | :--- | :--- | :--- | :--- |
| Titres H1, H2, H3 | Newsreader | 600 / 700 | `--font-serif` | Hauteur de ligne serrée (`1.15` - `1.25`) |
| Numéros d'étapes | Newsreader | 700 | `--font-serif` | Ex: `01`, `02` en grand corps |
| Citations / Emphase | Newsreader | Italic 400 | `--font-serif` | Papier / artisanat |
| Sous-titres H4, Corps | Inter | 400 | `--font-sans` | Lisibilité maximale sur smartphone |
| Badges, Métadonnées | Inter | 500 / 600 | `--font-sans` | Tailles `0.75rem` / `0.875rem` |
| Mesures, cotes, dosages | Inter / Mono | 500 | `--font-mono` | Chiffres tabulaires alignés |

---

## 3. Échelle de Couleurs & Rôles

### Socle Commun
- **Fond de page** : `--color-surface` (`#FFFDF6`)
- **Cartes & Conteneurs** : `--color-surface-card` (`#FFFFFF`)
- **Surfaces techniques / sunken** : `--color-surface-sunken` (`#F4EED8`)
- **Encre principale** : `--color-ink` (`#1B2318`)
- **Encre adoucie** : `--color-ink-soft` (`#43492F`)
- **Bordures** : `--color-border` (`rgba(27, 35, 24, 0.12)`)

### Thème Nakôbio (`data-theme="nakobio"`)
- `--color-brand-primary` : `#2F4A34` (Vert forêt)
- `--color-brand-secondary` : `#C86832` (Latérite)
- `--color-brand-accent` : `#E0A030` (Jaune paille)

### Thème Biosain (`data-theme="biosain"`)
- `--color-brand-primary` : `#CAAE00` (Ocre jaune)
- `--color-brand-secondary` : `#2F4A34` (Vert forêt)
- `--color-brand-accent` : `#1E3324` (Vert très sombre)

---

## 4. Structure Standard d'un Module Pédagogique

1. **En-tête pédagogique** :
   - Sur-titre / Catégorie (Inter, badge majuscule)
   - Titre du module (Newsreader, H1)
   - Chapeau introductif (Inter 18px, couleur encre adoucie)
2. **Métadonnées clés** : Durée, niveau, prérequis (badges discrets avec icônes).
3. **Liste du Matériel & Dosages** : Tableau technique ou grille de cartes compactes.
4. **Étapes Séquentielles** :
   - Cartouche d'étape avec numéro serif `01`, `02`, durée estimée, action claire.
5. **Encadrés "Bonnes pratiques" / "Points de vigilance"** :
   - Composant `.callout` sur fond `--color-surface-sunken` avec liseré coloré.
6. **Schémas & Plans cotés** : SVG responsifs préservant les dimensions (75 cm planche, 40 cm passe-pied).
