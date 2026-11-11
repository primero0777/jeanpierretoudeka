# Portfolio de Jean-Pierre Toudeka

Site personnel de Jean-Pierre Toudeka, conducteur de travaux génie civil à Lomé.
React, Vite, GSAP (ScrollTrigger), Lenis, Lucide, react-icons (logos des réseaux sociaux).

## Lancer le projet

```bash
npm install
npm run dev      # développement
npm run build    # génère le site dans dist/
```

## Modifier le contenu

Tout le contenu vient du CV et se trouve dans `src/data/` :

- `experience.js` : parcours professionnel
- `projects.js` : études de cas et photos
- `skills.js` : expertise
- `education.js` : formation, engagement associatif, coordonnées

## Ajouter les photos de chantier

Les cadres « Photo à fournir » attendent de vraies photos.

1. Déposer l'image dans `public/photos/` (format WebP conseillé, 1600 px de large).
2. Dans `src/data/projects.js`, remplacer `image: null` par `image: './photos/nom-du-fichier.webp'`.
3. Relancer `npm run build`.

## Formulaire de contact

Le formulaire valide les champs puis ouvre la messagerie du visiteur avec le message déjà rédigé.
Aucun serveur n'est configuré : rien n'est envoyé depuis le site. Pour un envoi direct, brancher un
service comme Formspree ou EmailJS dans `src/components/ContactForm.jsx`.

## Mise en ligne

La branche `main` contient le code source. La branche `gh-pages` contient le site généré (`dist/`),
c'est elle que GitHub Pages doit servir.
