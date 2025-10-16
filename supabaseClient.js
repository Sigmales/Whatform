import React, { useState, useEffect } from 'react';
import { Trash2, Eye, EyeOff, RefreshCw } from 'lucide-react';

// ⚠️ REMPLACEZ CES VALEURS PAR VOS CLÉS SUPABASE
const SUPABASE_URL = 'https://dhmveclwvoofnbgzpqvc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobXZlY2x3dm9vZm5iZ3pwcXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NjA2MTEsImV4cCI6MjA3NjEzNjYxMX0.b7TyxqkVmU-KF5raxESsb4DQLNy9YkxSXff7g0dpS0o';

export default function OrdinatoirGogo() {
  const [activeTab, setActiveTab] = useState('form');
  const [formData, setFormData] = useState({
    type: '',
    nom: '',
    lieu: '',
    contact: '',
    details: '',
    budget: '',
    specs: '',
    urgence: 'Normal',
    marque: '',
    specs2: '',
    etat: 'Excellent',
    proposition: 'Don',
    prix: '',
    ordi: '',
    probleme: '',
    depuis: '',
    expertise: '',
    dispo: ''
  });

  const [donnees, setDonnees] = useState([]);
  const [filtre, setFiltre] = useState('');
  const [recherche, setRecherche] = useState('');
  const [detailsVisible, setDetailsVisible] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const chargerDonnees = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/demandes?select=*&order=created_at.desc`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setDonnees(data);
      } else {
        setMessage('❌ Erreur de chargement');
      }
    } catch (error) {
      setMessage('❌ Erreur de connexion');
    }
    setLoading(false);
  };

  useEffect(() => {
    chargerDonnees();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.type || !formData.nom || !formData.lieu) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setLoading(true);

    const newEntry = {
      type: formData.type,
      nom: formData.nom,
      lieu: formData.lieu,
      contact: formData.contact,
      details: formData.details,
      budget: formData.budget,
      specs: formData.specs,
      urgence: formData.urgence,
      marque: formData.marque,
      specs2: formData.specs2,
      etat: formData.etat,
      proposition: formData.proposition,
      prix: formData.prix,
      ordi: formData.ordi,
      probleme: formData.probleme,
      depuis: formData.depuis,
      expertise: formData.expertise,
      dispo: formData.dispo
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/demandes`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(newEntry)
      });

      if (response.ok) {
        setMessage('✅ Demande enregistrée !');
        await chargerDonnees();

        const typeLabels = {
          cherche: '🔍 Je cherche un ordinateur',
          propose: '🎁 Je propose un ordinateur',
          technique: '🔧 J\'ai un problème technique',
          aide: '🤝 Je propose mon aide'
        };

        let whatsappMessage = `Bonjour 👋\n\n**${typeLabels[formData.type]}**\n\n`;
        whatsappMessage += `👤 Nom: ${formData.nom}\n📍 Lieu: ${formData.lieu}\n📱 Contact: ${formData.contact}\n\n`;

        if (formData.type === 'cherche') {
          whatsappMessage += `💰 Budget: ${formData.budget}\n⚙️ Spécifications: ${formData.specs}\n⏱️ Urgence: ${formData.urgence}\n\n`;
        } else if (formData.type === 'propose') {
          whatsappMessage += `🏷️ Marque: ${formData.marque}\n⚙️ Caractéristiques: ${formData.specs2}\n🔧 État: ${formData.etat}\n💵 Type: ${formData.proposition}\n`;
          if (formData.prix) whatsappMessage += `💰 Prix: ${formData.prix}\n`;
          whatsappMessage += '\n';
        } else if (formData.type === 'technique') {
          whatsappMessage += `💻 Ordinateur: ${formData.ordi}\n🚨 Problème: ${formData.probleme}\n⏰ Depuis: ${formData.depuis}\n\n`;
        } else if (formData.type === 'aide') {
          whatsappMessage += `💡 Expertise: ${formData.expertise}\n📅 Disponibilité: ${formData.dispo}\n\n`;
        }

        whatsappMessage += `💬 Autres infos: ${formData.details || 'Aucune'}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/22653591517?text=${encodedMessage}`, '_blank');

        setFormData({
          type: '',
          nom: '',
          lieu: '',
          contact: '',
          details: '',
          budget: '',
          specs: '',
          urgence: 'Normal',
          marque: '',
          specs2: '',
          etat: 'Excellent',
          proposition: 'Don',
          prix: '',
          ordi: '',
          probleme: '',
          depuis: '',
          expertise: '',
          dispo: ''
        });
      } else {
        setMessage('❌ Erreur d\'enregistrement');
      }
    } catch (error) {
      setMessage('❌ Erreur de connexion');
    }

    setLoading(false);
    setTimeout(() => setMessage(''), 3000);
  };

  const supprimerEntree = async (id) => {
    if (!confirm('Voulez-vous vraiment supprimer cette demande ?')) return;

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/demandes?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });

      if (response.ok) {
        setMessage('✅ Supprimé !');
        await chargerDonnees();
      }
    } catch (error) {
      setMessage('❌ Erreur de suppression');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const toggleDetails = (id) => {
    setDetailsVisible({ ...detailsVisible, [id]: !detailsVisible[id] });
  };

  const donneesFiltrees = donnees.filter(d => {
    const matchType = !filtre || d.type === filtre;
    const matchSearch = !recherche || 
      d.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      d.lieu.toLowerCase().includes(recherche.toLowerCase()) ||
      d.contact.includes(recherche);
    return matchType && matchSearch;
  });

  const typeLabels = {
    cherche: '🔍 Cherche',
    propose: '🎁 Propose',
    technique: '🔧 Technique',
    aide: '🤝 Aide'
  };

  const typeColors = {
    cherche: 'bg-blue-100 text-blue-800',
    propose: 'bg-green-100 text-green-800',
    technique: 'bg-yellow-100 text-yellow-800',
    aide: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4">
      <div className="max-w-6xl mx-auto">
        {message && (
          <div className="mb-4 p-4 bg-white rounded-lg shadow-lg text-center font-bold">
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-4 text-center font-semibold transition ${
                activeTab === 'form' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📝 Formulaire
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-4 text-center font-semibold transition ${
                activeTab === 'admin' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👨‍💼 Admin ({donnees.length})
            </button>
          </div>

          {activeTab === 'form' && (
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-2">💻 Ordinateur à Gogo</h1>
              <p className="text-gray-600 mb-6">Remplissez ce formulaire pour nous contacter</p>

              <div className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2">📋 Type de demande *</label>
                  <select name="type" value={formData.type} onChange={handleChange} required className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none">
                    <option value="">-- Sélectionnez --</option>
                    <option value="cherche">🔍 Je cherche un ordinateur</option>
                    <option value="propose">🎁 Je propose un ordinateur</option>
                    <option value="technique">🔧 J'ai un problème technique</option>
                    <option value="aide">🤝 Je propose mon aide</option>
                  </select>
                </div>

                {formData.type === 'cherche' && (
                  <>
                    <div><label className="block font-semibold mb-2">💰 Budget</label>
                      <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="Ex: 200 000 - 400 000 FCFA" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">⚙️ Spécifications</label>
                      <input type="text" name="specs" value={formData.specs} onChange={handleChange} placeholder="Ex: Windows, 8GB RAM" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">⏱️ Urgence</label>
                      <select name="urgence" value={formData.urgence} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg">
                        <option>Normal</option>
                        <option>Très urgent</option>
                        <option>Pas pressé</option>
                      </select></div>
                  </>
                )}

                {formData.type === 'propose' && (
                  <>
                    <div><label className="block font-semibold mb-2">🏷️ Marque / Modèle</label>
                      <input type="text" name="marque" value={formData.marque} onChange={handleChange} placeholder="Ex: HP Pavilion 15" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">⚙️ Caractéristiques</label>
                      <input type="text" name="specs2" value={formData.specs2} onChange={handleChange} placeholder="Ex: i5, 8GB, 256GB SSD" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">🔧 État</label>
                      <select name="etat" value={formData.etat} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg">
                        <option>Excellent</option>
                        <option>Bon</option>
                        <option>Acceptable</option>
                      </select></div>
                    <div><label className="block font-semibold mb-2">💵 Type</label>
                      <select name="proposition" value={formData.proposition} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg">
                        <option>Don</option>
                        <option>Échange</option>
                        <option>Vente</option>
                      </select></div>
                    <div><label className="block font-semibold mb-2">💰 Prix</label>
                      <input type="text" name="prix" value={formData.prix} onChange={handleChange} placeholder="Ex: 250 000 FCFA" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                  </>
                )}

                {formData.type === 'technique' && (
                  <>
                    <div><label className="block font-semibold mb-2">💻 Ordinateur</label>
                      <input type="text" name="ordi" value={formData.ordi} onChange={handleChange} placeholder="Ex: Dell Windows 10" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">🚨 Problème</label>
                      <textarea name="probleme" value={formData.probleme} onChange={handleChange} placeholder="Décrivez le problème..." className="w-full p-3 border-2 border-gray-300 rounded-lg h-24"></textarea></div>
                    <div><label className="block font-semibold mb-2">⏰ Depuis quand</label>
                      <input type="text" name="depuis" value={formData.depuis} onChange={handleChange} placeholder="Ex: 2 jours" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                  </>
                )}

                {formData.type === 'aide' && (
                  <>
                    <div><label className="block font-semibold mb-2">💡 Expertise</label>
                      <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} placeholder="Ex: Dépannage, Logiciels" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                    <div><label className="block font-semibold mb-2">📅 Disponibilité</label>
                      <input type="text" name="dispo" value={formData.dispo} onChange={handleChange} placeholder="Ex: Soirs et week-end" className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                  </>
                )}

                <div><label className="block font-semibold mb-2">👤 Nom / Prénom *</label>
                  <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Ex: Jean Dupont" required className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                <div><label className="block font-semibold mb-2">📍 Localisation *</label>
                  <input type="text" name="lieu" value={formData.lieu} onChange={handleChange} placeholder="Ex: Ouagadougou" required className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                <div><label className="block font-semibold mb-2">📱 WhatsApp *</label>
                  <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="+226..." required className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>
                <div><label className="block font-semibold mb-2">💬 Autres infos</label>
                  <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Détails supplémentaires..." className="w-full p-3 border-2 border-gray-300 rounded-lg h-20"></textarea></div>

                <button onClick={handleSubmit} disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50">
                  {loading ? '⏳ Envoi...' : '📞 Envoyer via WhatsApp'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">👨‍💼 Tableau de Bord Admin</h2>
                <button onClick={chargerDonnees} disabled={loading} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50">
                  <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                  Actualiser
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div><label className="block font-semibold mb-2">🔎 Rechercher</label>
                  <input type="text" value={recherche} onChange={(e) => setRecherche(e.target.value)} placeholder="Tapez pour rechercher..." className="w-full p-3 border-2 border-gray-300 rounded-lg" /></div>

                <div className="flex gap-2 flex-wrap">
                  <button onClick={() => setFiltre('')} className={`px-4 py-2 rounded-lg font-semibold transition ${!filtre ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                    📊 Tous ({donnees.length})
                  </button>
                  <button onClick={() => setFiltre('cherche')} className={`px-4 py-2 rounded-lg font-semibold transition ${filtre === 'cherche' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    🔍 Cherche ({donnees.filter(d => d.type === 'cherche').length})
                  </button>
                  <button onClick={() => setFiltre('propose')} className={`px-4 py-2 rounded-lg font-semibold transition ${filtre === 'propose' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                    🎁 Propose ({donnees.filter(d => d.type === 'propose').length})
                  </button>
                  <button onClick={() => setFiltre('technique')} className={`px-4 py-2 rounded-lg font-semibold transition ${filtre === 'technique' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}>
                    🔧 Technique ({donnees.filter(d => d.type === 'technique').length})
                  </button>
                  <button onClick={() => setFiltre('aide')} className={`px-4 py-2 rounded-lg font-semibold transition ${filtre === 'aide' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                    🤝 Aide ({donnees.filter(d => d.type === 'aide').length})
                  </button>
                </div>
              </div>

              {donneesFiltrees.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Aucune demande trouvée</p>
              ) : (
                <div className="space-y-4">
                  {donneesFiltrees.map(entry => (
                    <div key={entry.id} className={`border-2 rounded-lg p-4 ${typeColors[entry.type]}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-3 items-center flex-wrap">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${typeColors[entry.type]}`}>{typeLabels[entry.type]}</span>
                          <span className="font-bold text-lg">{entry.nom}</span>
                          <span className="text-sm">📍 {entry.lieu}</span>
                          <span className="text-sm">📅 {entry.created_at ? new Date(entry.created_at).toLocaleDateString('fr-FR') : 'N/A'}</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => toggleDetails(entry.id)} className="p-2 hover:bg-white rounded-lg transition">
                            {detailsVisible[entry.id] ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                          <button onClick={() => supprimerEntree(entry.id)} className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>

                      <p className="mb-2">📱 <strong>{entry.contact}</strong></p>

                      {detailsVisible[entry.id] && (
                        <div className="bg-white bg-opacity-50 p-3 rounded-lg text-sm space-y-1 mt-2">
                          {entry.type === 'cherche' && (
                            <>
                              <p>💰 Budget: {entry.budget}</p>
                              <p>⚙️ Specs: {entry.specs}</p>
                              <p>⏱️ Urgence: {entry.urgence}</p>
                            </>
                          )}
                          {entry.type === 'propose' && (
                            <>
                              <p>🏷️ Marque: {entry.marque}</p>
                              <p>⚙️ Specs: {entry.specs2}</p>
                              <p>🔧 État: {entry.etat}</p>
                              <p>💵 Type: {entry.proposition}</p>
                              {entry.prix && <p>💰 Prix: {entry.prix}</p>}
                            </>
                          )}
                          {entry.type === 'technique' && (
                            <>
                              <p>💻 Ordinateur: {entry.ordi}</p>
                              <p>🚨 Problème: {entry.probleme}</p>
                              <p>⏰ Depuis: {entry.depuis}</p>
                            </>
                          )}
                          {entry.type === 'aide' && (
                            <>
                              <p>💡 Expertise: {entry.expertise}</p>
                              <p>📅 Dispo: {entry.dispo}</p>
                            </>
                          )}
                          {entry.details && <p>💬 Notes: {entry.details}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}