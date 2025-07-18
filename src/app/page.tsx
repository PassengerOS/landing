'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroPlaceholder from '../components/HeroPlaceholder';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // Placeholder for future Context7 integration
  const handleAsk = async () => {
    setLoading(true);
    setResult('');
    // TODO: Wire up to backend endpoint that calls Context7 MCP
    setTimeout(() => {
      setResult('📚 [Context7] Documentation and code examples will appear here!');
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <HeroPlaceholder />
    </main>
  );
}
