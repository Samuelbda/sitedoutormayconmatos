import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { Eye, Heart, Share2, Sparkles, Check, Download, Instagram, ZoomIn, X, ShieldAlert, Award } from 'lucide-react';

export const CampaignPosters: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'poster1' | 'poster2' | 'both' | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Caminho da imagem oficial fornecida
  const bannerSrc = candidateData.campaignBannerUrl;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Maycon Matos 1078 - Terror do INSS',
        text: 'Conheça Maycon Matos (1078), Advogado Terror do INSS e defensor do Auxílio-Cuidador de 1 salário mínimo!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="cartazes" className="py-20 md:py-28 bg-gradient-to-b from-[#061A3B] via-[#0B2B60] to-[#061A3B] text-white relative overflow-hidden">
      {/* Luzes e Efeitos Decorativos de Fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Materiais Oficiais de Divulgação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {candidateData.campaignPosters.title}
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 font-normal max-w-2xl mx-auto">
            {candidateData.campaignPosters.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* GRID DOS 2 CARTAZES OFICIAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* CARTAZ 1: MAYCON MATOS - TERROR DO INSS / 1078 */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-5 sm:p-7 border-2 border-yellow-400/40 hover:border-yellow-300 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-[#061A3B] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5" />
                  Cartaz Oficial 01
                </span>
                <span className="text-xs font-bold text-yellow-200">
                  Maycon Matos • 1078
                </span>
              </div>

              {/* Moldura da Imagem 1 (Recorte Esquerdo do Banner) */}
              <div 
                onClick={() => setActiveModal('poster1')}
                className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border-2 border-yellow-300/60 shadow-lg cursor-pointer group-hover:shadow-yellow-400/20 transition-all"
              >
                <img
                  src={bannerSrc}
                  alt="Maycon Matos - Advogado Terror do INSS - Deputado Federal 1078 com Cleitinho Governador"
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay de Ação no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A3B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-white bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-xs flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-yellow-300" /> Clique para ampliar
                  </span>
                  <span className="bg-yellow-400 text-[#061A3B] text-xs font-black px-2.5 py-1 rounded-md">
                    Nº 1078
                  </span>
                </div>
              </div>

              {/* Informações e Destaques do Cartaz 1 */}
              <div className="mt-5 space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-300 transition-colors">
                  Advogado Terror do INSS — Deputado Federal 1078
                </h3>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Apresentação oficial da candidatura de Maycon Matos, o <strong className="text-yellow-300">Advogado do BPC</strong> e defensor dos aposentados, ao lado de <strong className="text-white">Cleitinho Governador (10)</strong> pelo Republicanos.
                </p>

                {/* Tags Rápidas */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="bg-white/10 text-yellow-200 px-2.5 py-1 rounded-md border border-yellow-300/30">
                    Advogado Terror do INSS
                  </span>
                  <span className="bg-white/10 text-yellow-200 px-2.5 py-1 rounded-md border border-yellow-300/30">
                    Com Cleitinho 10
                  </span>
                  <span className="bg-yellow-400/20 text-yellow-300 px-2.5 py-1 rounded-md border border-yellow-400/50">
                    Nº 1078
                  </span>
                </div>
              </div>
            </div>

            {/* Botões do Card 1 */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModal('poster1')}
                className="btn-yellow py-2.5 px-4 text-xs font-black flex items-center gap-1.5 flex-1 justify-center"
              >
                <Eye className="w-4 h-4" />
                <span>VER CARTAZ COMPLETO</span>
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-yellow-300/30 text-yellow-300 hover:text-white transition-colors"
                title="Compartilhar material"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* CARTAZ 2: AUXÍLIO-CUIDADOR (1 SALÁRIO MÍNIMO POR MÊS) */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-5 sm:p-7 border-2 border-yellow-400/40 hover:border-yellow-300 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-400 text-[#061A3B] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  Cartaz Oficial 02
                </span>
                <span className="text-xs font-bold text-yellow-200">
                  Pauta Prioritária
                </span>
              </div>

              {/* Moldura da Imagem 2 (Recorte Direito do Banner) */}
              <div 
                onClick={() => setActiveModal('poster2')}
                className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border-2 border-yellow-300/60 shadow-lg cursor-pointer group-hover:shadow-yellow-400/20 transition-all"
              >
                <img
                  src={bannerSrc}
                  alt="Defendo a Criação do Auxílio-Cuidador - 1 Salário Mínimo por Mês para mães atípicas e cuidadores"
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay de Ação no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A3B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-white bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-xs flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-yellow-300" /> Clique para ampliar
                  </span>
                  <span className="bg-emerald-400 text-[#061A3B] text-xs font-black px-2.5 py-1 rounded-md">
                    1 Salário Mínimo
                  </span>
                </div>
              </div>

              {/* Informações e Destaques do Cartaz 2 */}
              <div className="mt-5 space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-300 transition-colors">
                  Criação do Auxílio-Cuidador — 1 Salário Mínimo/Mês
                </h3>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Proposta fundamental para garantir remuneração e dignidade para <strong className="text-yellow-300">mães e pais atípicos</strong>, quem cuida de <strong className="text-white">pessoa com deficiência</strong> e quem cuida de <strong className="text-white">idoso doente</strong>.
                </p>

                {/* 3 Pilares do Cartaz 2 */}
                <div className="pt-2 grid grid-cols-3 gap-1.5 text-[11px] font-bold text-center">
                  <div className="bg-red-500/20 border border-red-400/40 text-red-200 p-1.5 rounded-lg">
                    Mães e Pais Atípicos
                  </div>
                  <div className="bg-blue-500/20 border border-blue-400/40 text-blue-200 p-1.5 rounded-lg">
                    Pessoas c/ Deficiência
                  </div>
                  <div className="bg-amber-500/20 border border-amber-400/40 text-amber-200 p-1.5 rounded-lg">
                    Idosos Doentes
                  </div>
                </div>
              </div>
            </div>

            {/* Botões do Card 2 */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModal('poster2')}
                className="btn-yellow py-2.5 px-4 text-xs font-black flex items-center gap-1.5 flex-1 justify-center"
              >
                <Eye className="w-4 h-4" />
                <span>VER CARTAZ COMPLETO</span>
              </button>
              <a
                href="https://www.instagram.com/mayconmatos.adv?stkn=MXV5ejRpd3Fra2pzNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-pink-600/30 hover:bg-pink-600/50 border border-pink-400/40 text-pink-200 hover:text-white transition-colors"
                title="Seguir no Instagram @mayconmatos.adv"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BANNER INFORMATIVO INFERIOR */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-white/10 border border-yellow-300/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest block">
              Compartilhe nas Redes Sociais
            </span>
            <span className="text-sm font-semibold text-white">
              Ajude a levar as propostas do Auxílio-Cuidador e a defesa do BPC para toda Minas Gerais!
            </span>
          </div>
          <button
            onClick={() => setActiveModal('both')}
            className="btn-outline-white py-2.5 px-5 text-xs font-bold whitespace-nowrap"
          >
            <ZoomIn className="w-4 h-4 text-yellow-300" />
            <span>VISUALIZAR AMBOS OS CARTAZES</span>
          </button>
        </div>

      </div>

      {/* MODAL / LIGHTBOX DE VISUALIZAÇÃO AMPLIADA */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#0B2B60] rounded-3xl border-2 border-yellow-400 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header do Modal */}
            <div className="p-4 sm:p-5 bg-[#061A3B] border-b border-yellow-400/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <h4 className="font-extrabold text-white text-base sm:text-lg">
                  {activeModal === 'poster1' && 'Cartaz Oficial 01: Maycon Matos — Advogado Terror do INSS (1078)'}
                  {activeModal === 'poster2' && 'Cartaz Oficial 02: Defesa da Criação do Auxílio-Cuidador (1 Salário Mínimo)'}
                  {activeModal === 'both' && 'Cartazes Oficiais de Campanha — Maycon Matos 1078'}
                </h4>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-yellow-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo da Imagem Ampliada */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950">
              <div className="max-w-3xl w-full overflow-hidden rounded-2xl border-2 border-yellow-400/50 shadow-2xl">
                {activeModal === 'poster1' && (
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={bannerSrc}
                      alt="Maycon Matos 1078"
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                )}
                {activeModal === 'poster2' && (
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={bannerSrc}
                      alt="Auxílio-Cuidador 1 Salário Mínimo"
                      className="w-full h-full object-cover object-right"
                    />
                  </div>
                )}
                {activeModal === 'both' && (
                  <img
                    src={bannerSrc}
                    alt="Cartazes de Campanha Maycon Matos 1078"
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="p-4 bg-[#061A3B] border-t border-yellow-400/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveModal('poster1')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeModal === 'poster1'
                      ? 'bg-yellow-400 text-[#061A3B]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Cartaz 1 (1078)
                </button>
                <button
                  onClick={() => setActiveModal('poster2')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeModal === 'poster2'
                      ? 'bg-yellow-400 text-[#061A3B]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Cartaz 2 (Auxílio)
                </button>
                <button
                  onClick={() => setActiveModal('both')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeModal === 'both'
                      ? 'bg-yellow-400 text-[#061A3B]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Ambos Lado a Lado
                </button>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="btn-yellow py-2 px-5 text-xs font-black"
              >
                Fechar Visualização
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
