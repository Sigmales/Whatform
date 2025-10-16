// src/App.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import OrdinatoirGogo from './components/OrdinatoirGogo';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier la session au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Écouter les changements de session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">⏳ Chargement...</div>
      </div>
    );
  }

  return (
    <div>
      <OrdinatoirGogo session={session} />
    </div>
  );
}