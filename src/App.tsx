import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CampaignPosters } from './components/CampaignPosters';
import { Proposals } from './components/Proposals';
import { Commitment } from './components/Commitment';
import { SocialLinks } from './components/SocialLinks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0B2B60] selection:text-white font-sans">
      {/* Header Fixo com Efeito de Scroll e Menu Mobile */}
      <Header />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main className="flex-grow">
        {/* Seção Hero - Alto Impacto Visual com Identidade Advogado Terror do INSS */}
        <Hero />

        {/* Seção Sobre - Quem é Maycon Matos com Narrativa em 1ª Pessoa */}
        <About />

        {/* Seção Cartazes Oficiais de Campanha com as 2 Imagens e Modal de Zoom */}
        <CampaignPosters />

        {/* Seção Propostas - Auxílio-Cuidador, BPC/LOAS e Defesa Previdenciária */}
        <Proposals />

        {/* Seção Compromisso - Destaque Visual Diferenciado com 1078 */}
        <Commitment />

        {/* Seção Acompanhe - Mais de 1M de Seguidores e Redes Oficiais */}
        <SocialLinks />

        {/* CTA Final - Encerramento e Chamada de Ação */}
        <FinalCTA />
      </main>

      {/* Footer Elegante com Identificação Eleitoral Obrigatória */}
      <Footer />
    </div>
  );
};

export default App;
