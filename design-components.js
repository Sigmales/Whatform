// ========================================
// FICHIER DESIGN UNIQUEMENT - PAS DE LOGIQUE
// ========================================
// Ce fichier contient uniquement les parties visuelles
// à modifier par une IA pour améliorer le design

// ========================================
// 1. COMPOSANT PRINCIPAL - INTERFACE FORMULAIRE
// ========================================

const FormulaireInterface = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4">
    <div className="max-w-6xl mx-auto">
      {/* Message de notification */}
      <div className="mb-4 p-4 bg-white rounded-lg shadow-lg text-center font-bold">
        {/* Message dynamique */}
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Navigation par onglets */}
        <div className="flex border-b">
          <button className="flex-1 py-4 text-center font-semibold transition bg-purple-600 text-white">
            📝 Formulaire
          </button>
          <button className="flex-1 py-4 text-center font-semibold transition flex items-center justify-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
            <Lock size={18} />
            👨‍💼 Admin
          </button>
        </div>

        {/* Contenu du formulaire */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">💻 Ordinateur à Gogo</h1>
          <p className="text-gray-600 mb-6">Remplissez ce formulaire pour nous contacter</p>

          <div className="space-y-6">
            {/* Type de demande */}
            <div>
              <label className="block font-semibold mb-2">📋 Type de demande *</label>
              <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
                <option value="">-- Sélectionnez --</option>
                <option value="cherche">🔍 Je cherche un ordinateur</option>
                <option value="propose">🎁 Je propose un ordinateur</option>
                <option value="technique">🔧 J'ai un problème technique</option>
                <option value="aide">🤝 Je propose mon aide</option>
              </select>
            </div>

            {/* Champs conditionnels pour "cherche" */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">💰 Budget</label>
                <input 
                  type="text" 
                  placeholder="Ex: 200 000 - 400 000 FCFA" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">⚙️ Spécifications</label>
                <input 
                  type="text" 
                  placeholder="Ex: Windows, 8GB RAM" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">⏱️ Urgence</label>
                <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                  <option>Normal</option>
                  <option>Très urgent</option>
                  <option>Pas pressé</option>
                </select>
              </div>
            </div>

            {/* Champs conditionnels pour "propose" */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">🏷️ Marque / Modèle</label>
                <input 
                  type="text" 
                  placeholder="Ex: HP Pavilion 15" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">⚙️ Caractéristiques</label>
                <input 
                  type="text" 
                  placeholder="Ex: i5, 8GB, 256GB SSD" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">🔧 État</label>
                <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                  <option>Excellent</option>
                  <option>Bon</option>
                  <option>Acceptable</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">💵 Type</label>
                <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                  <option>Don</option>
                  <option>Échange</option>
                  <option>Vente</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">💰 Prix</label>
                <input 
                  type="text" 
                  placeholder="Ex: 250 000 FCFA" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
            </div>

            {/* Champs conditionnels pour "technique" */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">💻 Ordinateur</label>
                <input 
                  type="text" 
                  placeholder="Ex: Dell Windows 10" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">🚨 Problème</label>
                <textarea 
                  placeholder="Décrivez le problème..." 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg h-24"
                ></textarea>
              </div>
              <div>
                <label className="block font-semibold mb-2">⏰ Depuis quand</label>
                <input 
                  type="text" 
                  placeholder="Ex: 2 jours" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
            </div>

            {/* Champs conditionnels pour "aide" */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">💡 Expertise</label>
                <input 
                  type="text" 
                  placeholder="Ex: Dépannage, Logiciels" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">📅 Disponibilité</label>
                <input 
                  type="text" 
                  placeholder="Ex: Soirs et week-end" 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
            </div>

            {/* Champs communs */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">👤 Nom / Prénom *</label>
                <input 
                  type="text" 
                  placeholder="Ex: Jean Dupont" 
                  required 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">📍 Localisation *</label>
                <input 
                  type="text" 
                  placeholder="Ex: Ouagadougou" 
                  required 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">📱 WhatsApp *</label>
                <input 
                  type="tel" 
                  placeholder="+226..." 
                  required 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">💬 Autres infos</label>
                <textarea 
                  placeholder="Détails supplémentaires..." 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg h-20"
                ></textarea>
              </div>
            </div>

            {/* Bouton de soumission */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50">
              📞 Envoyer via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// 2. INTERFACE ADMIN - TABLEAU DE BORD
// ========================================

const AdminInterface = () => (
  <div className="p-8">
    {/* En-tête admin */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">👨‍💼 Tableau de Bord Admin</h2>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50">
          <RefreshCw size={18} />
          Actualiser
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </div>

    {/* Filtres et recherche */}
    <div className="space-y-4 mb-6">
      <div>
        <label className="block font-semibold mb-2">🔎 Rechercher</label>
        <input 
          type="text" 
          placeholder="Tapez pour rechercher..." 
          className="w-full p-3 border-2 border-gray-300 rounded-lg" 
        />
      </div>

      {/* Boutons de filtrage */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-lg font-semibold transition bg-purple-600 text-white">
          📊 Tous (12)
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold transition bg-gray-200">
          🔍 Cherche (5)
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold transition bg-gray-200">
          🎁 Propose (3)
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold transition bg-gray-200">
          🔧 Technique (2)
        </button>
        <button className="px-4 py-2 rounded-lg font-semibold transition bg-gray-200">
          🤝 Aide (2)
        </button>
      </div>
    </div>

    {/* Liste des demandes */}
    <div className="space-y-4">
      {/* Exemple de carte de demande */}
      <div className="border-2 rounded-lg p-4 bg-blue-100 text-blue-800">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-3 items-center flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">🔍 Cherche</span>
            <span className="font-bold text-lg">Jean Dupont</span>
            <span className="text-sm">📍 Ouagadougou</span>
            <span className="text-sm">📅 15/12/2024</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white rounded-lg transition">
              <Eye size={20} />
            </button>
            <button className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <p className="mb-2">📱 <strong>+226 70 12 34 56</strong></p>

        {/* Détails expandables */}
        <div className="bg-white bg-opacity-50 p-3 rounded-lg text-sm space-y-1 mt-2">
          <p>💰 Budget: 200 000 - 400 000 FCFA</p>
          <p>⚙️ Specs: Windows, 8GB RAM</p>
          <p>⏱️ Urgence: Normal</p>
          <p>💬 Notes: Besoin urgent pour le travail</p>
        </div>
      </div>

      {/* Autres exemples de cartes */}
      <div className="border-2 rounded-lg p-4 bg-green-100 text-green-800">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-3 items-center flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">🎁 Propose</span>
            <span className="font-bold text-lg">Marie Konaté</span>
            <span className="text-sm">📍 Bobo-Dioulasso</span>
            <span className="text-sm">📅 14/12/2024</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white rounded-lg transition">
              <EyeOff size={20} />
            </button>
            <button className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        <p className="mb-2">📱 <strong>+226 76 54 32 10</strong></p>
      </div>

      <div className="border-2 rounded-lg p-4 bg-yellow-100 text-yellow-800">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-3 items-center flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">🔧 Technique</span>
            <span className="font-bold text-lg">Ahmed Sawadogo</span>
            <span className="text-sm">📍 Koudougou</span>
            <span className="text-sm">📅 13/12/2024</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white rounded-lg transition">
              <Eye size={20} />
            </button>
            <button className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        <p className="mb-2">📱 <strong>+226 65 43 21 98</strong></p>
      </div>
    </div>
  </div>
);

// ========================================
// 3. INTERFACE DE CONNEXION ADMIN
// ========================================

const AdminLoginInterface = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
          <LogIn size={32} className="text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Connexion Admin</h1>
        <p className="text-gray-600 mt-2">Accès réservé aux administrateurs</p>
      </div>

      <form className="space-y-4">
        {/* Message d'erreur */}
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Email ou mot de passe incorrect
        </div>

        <div>
          <label className="block font-semibold mb-2">📧 Email</label>
          <input
            type="email"
            placeholder="admin@example.com"
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">🔒 Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
        >
          🔓 Se connecter
        </button>
      </form>

      <p className="text-center text-gray-600 text-sm mt-6">
        Vous n'avez pas de compte admin ? Contactez le super administrateur.
      </p>
    </div>
  </div>
);

// ========================================
// 4. STRUCTURE HTML DE BASE
// ========================================

const HTMLStructure = `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Application de gestion d'ordinateurs - WhatForm" />
    <title>💻 Ordinateur à Gogo</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <noscript>Vous devez activer JavaScript pour utiliser cette application.</noscript>
    <div id="root"></div>
  </body>
</html>
`;

// ========================================
// 5. COULEURS ET STYLES ACTUELS
// ========================================

const CurrentDesignSystem = {
  colors: {
    primary: 'from-purple-600 to-pink-600',
    secondary: 'bg-purple-600',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  },
  spacing: {
    container: 'max-w-6xl mx-auto',
    padding: 'p-4',
    formSpacing: 'space-y-6'
  },
  borderRadius: 'rounded-lg',
  shadows: 'shadow-xl'
};

export {
  FormulaireInterface,
  AdminInterface,
  AdminLoginInterface,
  HTMLStructure,
  CurrentDesignSystem
};
