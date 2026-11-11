import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relative : le site fonctionne dans un sous-dossier (GitHub Pages) comme à la racine d'un domaine.
export default defineConfig({ base: './', plugins: [react()] })
