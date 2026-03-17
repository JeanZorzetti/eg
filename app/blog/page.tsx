import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | EG Telemedicina',
  description:
    'Conteúdo médico com base científica: dicas de saúde, prevenção, bem-estar e orientações de especialistas.',
}

type Article = {
  title: string
  category: string
  excerpt: string
  author: string
  date: string
  readTime: string
}

const articles: Article[] = [
  {
    title: 'Hipertensão: como controlar sem sair de casa',
    category: 'Cardiologia',
    excerpt: 'Saiba como monitorar e controlar a pressão arterial com orientação médica online e hábitos simples do dia a dia.',
    author: 'Dr. João Silva',
    date: '10 mar 2026',
    readTime: '5 min',
  },
  {
    title: 'Saúde mental: quando buscar ajuda profissional',
    category: 'Psicologia',
    excerpt: 'Entenda os sinais de alerta e saiba como a psicologia online pode ser tão eficaz quanto o atendimento presencial.',
    author: 'Dra. Ana Costa',
    date: '07 mar 2026',
    readTime: '7 min',
  },
  {
    title: 'Pediatria online: dúvidas mais comuns dos pais',
    category: 'Pediatria',
    excerpt: 'Respondemos as perguntas mais frequentes dos pais sobre telemedicina pediátrica e segurança no atendimento infantil.',
    author: 'Dra. Maria Santos',
    date: '03 mar 2026',
    readTime: '4 min',
  },
  {
    title: 'Dermatologia digital: o que pode ser diagnosticado por vídeo',
    category: 'Dermatologia',
    excerpt: 'Conheça as condições de pele que podem ser identificadas e tratadas com consulta por videochamada.',
    author: 'Dr. Lucas Oliveira',
    date: '28 fev 2026',
    readTime: '6 min',
  },
  {
    title: 'Nutrição: mitos e verdades sobre emagrecimento',
    category: 'Nutrição',
    excerpt: 'Um nutricionista especializado desmistifica as dietas da moda e apresenta o caminho sustentável para perder peso.',
    author: 'Nutricionista Paula',
    date: '24 fev 2026',
    readTime: '8 min',
  },
  {
    title: 'Telemedicina e LGPD: como seus dados são protegidos',
    category: 'Tecnologia',
    excerpt: 'Transparência total sobre como a EG Telemedicina trata e protege suas informações de saúde com conformidade à LGPD.',
    author: 'Equipe EG',
    date: '20 fev 2026',
    readTime: '5 min',
  },
]

const categoryColors: Record<string, string> = {
  Cardiologia: 'bg-red-50 text-red-600',
  Psicologia: 'bg-purple-50 text-purple-600',
  Pediatria: 'bg-blue-50 text-blue-600',
  Dermatologia: 'bg-orange-50 text-orange-600',
  Nutrição: 'bg-yellow-50 text-yellow-700',
  Tecnologia: 'bg-[#f0fdf4] text-[#029641]',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#062e24] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Blog EG Telemedicina
          </h1>
          <p className="text-lg text-green-100 leading-relaxed">
            Conteúdo médico com base científica: dicas de saúde, prevenção, bem-estar e orientações de especialistas.
          </p>
        </div>
      </section>

      {/* Grid de artigos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Imagem placeholder */}
                <div className="bg-[#f0fdf4] h-48 flex items-center justify-center">
                  <svg className="w-14 h-14 text-[#029641]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                <div className="p-5">
                  {/* Categoria */}
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                      categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {article.category}
                  </span>

                  {/* Título */}
                  <h2 className="text-base font-bold text-[#062e24] mb-2 line-clamp-2 leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <span>{article.author}</span>
                    <span className="text-gray-300">·</span>
                    <span>{article.date}</span>
                    <span className="text-gray-300">·</span>
                    <span>{article.readTime} de leitura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-[#f0fdf4] rounded-2xl p-10 text-center">
          <div className="w-14 h-14 bg-[#029641] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#062e24] mb-2">
            Quer receber conteúdo de saúde no seu e-mail?
          </h2>
          <p className="text-gray-500 mb-8">
            Inscreva-se e receba dicas, novidades e artigos de especialistas diretamente na sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#029641] focus:ring-2 focus:ring-[#029641]/20 transition"
            />
            <button
              type="button"
              className="bg-[#029641] hover:bg-[#016d2f] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Sem spam. Cancele quando quiser.</p>
        </div>
      </section>
    </>
  )
}
