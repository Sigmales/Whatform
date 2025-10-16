// src/components/Ticket.js
import React, { useRef } from 'react';
import { Download, X, Home } from 'lucide-react';

export default function Ticket({ ticketData, onClose }) {
  const ticketRef = useRef();

  const typeLabels = {
    cherche: '🔍 Je cherche un ordinateur',
    propose: '🎁 Je propose un ordinateur',
    technique: '🔧 J\'ai un problème technique',
    aide: '🤝 Je propose mon aide'
  };

  const downloadPDF = () => {
    const element = ticketRef.current;
    const printWindow = window.open('', '', 'width=800,height=600');
    const content = element.innerHTML;
    printWindow.document.write(`
      <html>
        <head>
          <title>Ticket-${ticketData.ticket_id}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .ticket { max-width: 600px; margin: 0 auto; }
          </style>
        </head>
        <body>
          <div class="ticket">${content}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Ticket Preview */}
        <div ref={ticketRef} className="bg-white rounded-lg shadow-2xl p-8 mb-6">
          {/* Header */}
          <div className="text-center border-b-4 border-purple-600 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              🎫 TICKET
            </h1>
            <p className="text-gray-600 text-sm mt-2">Ordinateur à Gogo - Plateforme d'Entraide</p>
          </div>

          {/* Ticket ID */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4 text-center mb-6">
            <p className="text-sm opacity-90">Numéro de Ticket</p>
            <p className="text-3xl font-bold font-mono">{ticketData.ticket_id}</p>
          </div>

          {/* Date */}
          <div className="text-center text-gray-500 text-sm mb-6 pb-4 border-b border-gray-300">
            📅 {ticketData.created_at}
          </div>

          {/* Type de Demande */}
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600 mb-6">
            <p className="text-gray-600 text-xs font-semibold uppercase">Type de Demande</p>
            <p className="text-lg font-bold text-purple-600 mt-2">{typeLabels[ticketData.type]}</p>
          </div>

          {/* Informations Principales */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-600 text-xs font-semibold uppercase">Nom / Prénom</p>
              <p className="text-lg font-bold text-blue-600 mt-2">{ticketData.nom}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-gray-600 text-xs font-semibold uppercase">Localisation</p>
              <p className="text-lg font-bold text-green-600 mt-2">📍 {ticketData.lieu}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-yellow-50 rounded-lg p-4 mb-6">
            <p className="text-gray-600 text-xs font-semibold uppercase">Contact WhatsApp</p>
            <p className="text-lg font-bold text-yellow-600 mt-2">📱 {ticketData.contact}</p>
          </div>

          {/* Détails selon le type */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
            {ticketData.type === 'cherche' && (
              <>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Budget</p>
                  <p className="text-gray-800 mt-1">💰 {ticketData.budget || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Spécifications</p>
                  <p className="text-gray-800 mt-1">⚙️ {ticketData.specs || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Urgence</p>
                  <p className="text-gray-800 mt-1">⏱️ {ticketData.urgence || 'Normal'}</p>
                </div>
              </>
            )}

            {ticketData.type === 'propose' && (
              <>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Marque / Modèle</p>
                  <p className="text-gray-800 mt-1">🏷️ {ticketData.marque || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Caractéristiques</p>
                  <p className="text-gray-800 mt-1">⚙️ {ticketData.specs2 || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">État</p>
                  <p className="text-gray-800 mt-1">🔧 {ticketData.etat || 'Excellent'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Type</p>
                  <p className="text-gray-800 mt-1">💵 {ticketData.proposition || 'Don'}</p>
                </div>
                {ticketData.prix && (
                  <div>
                    <p className="text-gray-600 text-xs font-semibold uppercase">Prix</p>
                    <p className="text-gray-800 mt-1">💰 {ticketData.prix}</p>
                  </div>
                )}
              </>
            )}

            {ticketData.type === 'technique' && (
              <>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Ordinateur</p>
                  <p className="text-gray-800 mt-1">💻 {ticketData.ordi || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Problème</p>
                  <p className="text-gray-800 mt-1">🚨 {ticketData.probleme || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Depuis quand</p>
                  <p className="text-gray-800 mt-1">⏰ {ticketData.depuis || 'Non spécifié'}</p>
                </div>
              </>
            )}

            {ticketData.type === 'aide' && (
              <>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Expertise</p>
                  <p className="text-gray-800 mt-1">💡 {ticketData.expertise || 'Non spécifié'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase">Disponibilité</p>
                  <p className="text-gray-800 mt-1">📅 {ticketData.dispo || 'Non spécifié'}</p>
                </div>
              </>
            )}

            {ticketData.details && (
              <div>
                <p className="text-gray-600 text-xs font-semibold uppercase">Informations Supplémentaires</p>
                <p className="text-gray-800 mt-1">💬 {ticketData.details}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t-4 border-purple-600 pt-6 text-center text-gray-600 text-xs">
            <p>✅ Demande enregistrée avec succès</p>
            <p className="mt-2">Notre équipe vous contactera très bientôt via WhatsApp</p>
            <p className="mt-4 text-purple-600 font-semibold">Merci d'avoir choisi Ordinateur à Gogo ! 🙏</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-lg transition"
          >
            <Download size={20} />
            Télécharger / Imprimer
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-lg font-bold hover:shadow-lg transition"
          >
            <Home size={20} />
            Retour Accueil
          </button>
        </div>

        {/* Info Message */}
        <div className="bg-white rounded-lg p-6 shadow-lg text-center">
          <p className="text-gray-700 font-semibold mb-2">📋 Votre ticket a été généré avec succès !</p>
          <p className="text-gray-600 text-sm">Conservez votre numéro de ticket pour pouvoir suivre votre demande</p>
          <p className="text-gray-600 text-sm mt-3">Vous recevrez un message WhatsApp de confirmation</p>
        </div>
      </div>
    </div>
  );
}