# 💻 Ordinateur à Gogo

Application React pour la gestion des demandes d'ordinateurs avec Supabase.

## 🚀 Déploiement sur Vercel

### Étapes de déploiement :

1. **Connectez votre repository GitHub à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez ce projet

2. **Configuration automatique**
   - Vercel détectera automatiquement que c'est une application React
   - Les paramètres de build sont déjà configurés dans `vercel.json`

3. **Variables d'environnement (optionnel)**
   - Si vous voulez sécuriser vos clés Supabase, ajoutez-les dans les variables d'environnement Vercel
   - `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 📁 Structure du projet

```
├── public/
│   └── index.html          # Template HTML principal
├── src/
│   ├── App.js              # Composant principal de l'application
│   └── index.js            # Point d'entrée React
├── package.json            # Dépendances et scripts
├── vercel.json             # Configuration Vercel
└── README.md               # Ce fichier
```

### 🛠️ Commandes disponibles

```bash
# Installation des dépendances
npm install

# Développement local
npm start

# Build de production
npm run build
```

### 🔧 Configuration Supabase

Les clés Supabase sont actuellement codées en dur dans `src/App.js`. Pour la production, considérez utiliser des variables d'environnement.

### 📱 Fonctionnalités

- ✅ Formulaire de demande d'ordinateur
- ✅ Gestion des différents types de demandes
- ✅ Interface d'administration
- ✅ Intégration WhatsApp
- ✅ Base de données Supabase
- ✅ Design responsive avec Tailwind CSS

Votre application est maintenant prête pour le déploiement sur Vercel ! 🎉

