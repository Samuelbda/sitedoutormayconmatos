import React from 'react';
import { candidateData } from '../data/candidate';
import { User, Briefcase, MapPin, Award, Flag, ChevronRight, CheckCircle2, Users, HeartHandshake, ShieldAlert, Sparkles, Scale } from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToProposals = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#propostas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPosters = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#cartazes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIconForLabel = (label: string) => {
    switch (label.toUpperCase()) {
      case 'NOME':
        return <User className="w-4 h-4 text-yellow-600" />;
      case 'RECONHECIDO COMO':
        return <ShieldAlert className="w-4 h-4 text-yellow-600" />;
      case 'ATUAÇÃO':
        return <Scale className="w-4 h-4 text-yellow-600" />;
      case 'AUDIÊNCIA':
        return <Users className="w-4 h-4 text-yellow-600" />;
      case 'BANDEIRA PRINCIPAL':
        return <HeartHandshake className="w-4 h-4 text-yellow-600" />;
      case 'CARGO E NÚMERO':
        return <Award className="w-4 h-4 text-yellow-600" />;
      case 'ESTADO E PARTIDO':
        return <Flag className="w-4 h-4 text-yellow-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-yellow-600" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="container-custom">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 border border-yellow-300 text-[#0B2B60] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Trajetória e Compromisso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2B60] tracking-tight">
            {candidateData.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            {candidateData.about.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-yellow-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* CARDS DE DESTAQUE NUMÉRICO / STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {candidateData.about.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-yellow-50/50 border-2 border-yellow-200/80 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0B2B60] block tracking-tight">
                  {item.number}
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-yellow-800 block mt-1">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-3 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LAYOUT CONTEÚDO PRINCIPAL: FOTO & NARRATIVA EM 1ª PESSOA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* FOTO E CARD INSTITUCIONAL À ESQUERDA */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Moldura Decorativa */}
              <div className="bg-slate-50 p-4 rounded-3xl border-2 border-yellow-300 shadow-xl relative overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={candidateData.photoUrl}
                    alt={`${candidateData.name} - ${candidateData.nickname}`}
                    className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl"
                    loading="lazy"
                  />
                  {/* Badge sobre a imagem */}
                  <div className="absolute top-3 left-3 bg-[#0B2B60]/90 backdrop-blur-xs text-yellow-300 px-3 py-1 rounded-full text-xs font-black border border-yellow-400/50 shadow-md">
                    Advogado Terror do INSS
                  </div>
                </div>

                {/* Card de Identificação */}
                <div className="mt-4 p-4 bg-white rounded-2xl border border-yellow-200 text-center shadow-xs">
                  <span className="font-display font-black text-[#0B2B60] text-lg block leading-tight">
                    {candidateData.name}
                  </span>
                  <span className="text-xs text-yellow-800 font-extrabold uppercase tracking-wide block mt-0.5">
                    {candidateData.nickname}
                  </span>
                  <span className="text-xs text-slate-500 font-bold block mt-1">
                    Candidato a Deputado Federal • Nº 1078
                  </span>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-black text-[#0B2B60]">
                    <span className="bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300">REPUBLICANOS 10</span>
                    <span>•</span>
                    <span className="text-slate-600">Com Cleitinho Governador</span>
                  </div>
                </div>
              </div>

              {/* Botão Ver Cartazes */}
              <div className="mt-4 text-center">
                <a
                  href="#cartazes"
                  onClick={handleScrollToPosters}
                  className="inline-flex items-center gap-2 text-xs font-black text-[#0B2B60] hover:text-yellow-700 transition-colors p-2"
                >
                  <span>Ver cartazes oficiais de divulgação</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* NARRATIVA BIOGRÁFICA EM 1ª PESSOA E INFORMAÇÕES */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Bloco de Apresentação em Destaque */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8 w-full">
              
              {/* Parágrafo 1 */}
              <div className="bg-gradient-to-r from-yellow-50/80 via-white to-slate-50 p-5 rounded-2xl border-l-4 border-yellow-400 border-t border-r border-b border-slate-200 shadow-xs">
                <p className="font-bold text-[#0B2B60] text-lg sm:text-xl">
                  {candidateData.about.paragraphs[0]}
                </p>
              </div>

              {/* Parágrafo 2 */}
              <div className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200 hover:border-yellow-300 transition-colors">
                <p>
                  {candidateData.about.paragraphs[1]}
                </p>
              </div>

              {/* Parágrafo 3 */}
              <div className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200 hover:border-yellow-300 transition-colors">
                <p>
                  {candidateData.about.paragraphs[2]}
                </p>
              </div>

              {/* Parágrafo 4 - Destaque do Auxílio-Cuidador */}
              <div className="bg-gradient-to-br from-yellow-100/70 via-yellow-50 to-white p-5 rounded-2xl border-2 border-yellow-300 shadow-sm">
                <div className="flex items-center gap-2 text-yellow-800 text-xs font-black uppercase tracking-wider mb-2">
                  <HeartHandshake className="w-4 h-4 text-yellow-700" />
                  <span>Proposta Central de Campanha</span>
                </div>
                <p className="font-extrabold text-[#0B2B60] text-base sm:text-lg leading-relaxed">
                  {candidateData.about.paragraphs[3]}
                </p>
              </div>

              {/* Parágrafo 5 & Assinatura Oficial */}
              <div className="bg-[#0B2B60] text-white p-6 rounded-2xl shadow-md border-2 border-yellow-400/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest block mb-1">
                    Candidatura Oficial
                  </span>
                  <p className="text-lg font-black text-white">
                    {candidateData.about.paragraphs[4]}
                  </p>
                  <p className="text-sm font-extrabold text-yellow-300 mt-1">
                    {candidateData.about.signature}
                  </p>
                </div>
                <div className="bg-yellow-400 text-[#061A3B] px-5 py-2.5 rounded-xl font-display font-black text-2xl tracking-wider shadow-inner self-stretch sm:self-auto text-center">
                  1078
                </div>
              </div>

            </div>

            {/* TABELA / GRID DE INFORMAÇÕES INSTITUCIONAIS */}
            <div className="w-full mb-8">
              <h3 className="text-xs font-black text-yellow-800 uppercase tracking-wider mb-3">
                Informações Institucionais e Eleitorais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {candidateData.about.quickInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-yellow-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {getIconForLabel(info.label)}
                      <span className="text-[11px] font-bold text-slate-400 uppercase">
                        {info.label}
                      </span>
                    </div>
                    <span className="font-extrabold text-[#0B2B60] text-sm block">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#propostas"
                onClick={handleScrollToProposals}
                className="btn-yellow py-3.5 px-7 text-sm font-black"
              >
                <span>CONHEÇA AS PROPOSTAS</span>
                <ChevronRight className="w-4 h-4 text-[#061A3B]" />
              </a>

              <a
                href="#cartazes"
                onClick={handleScrollToPosters}
                className="btn-secondary py-3.5 px-6 text-sm font-bold"
              >
                <span>VER MATERIAIS DE CAMPANHA</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
