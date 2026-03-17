import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from './_articles'

export const metadata: Metadata = {
  title: 'Blog | EG Telemedicina',
  description:
    'Conteúdo médico com base científica: dicas de saúde, prevenção, bem-estar e orientações de especialistas.',
}

const categoryColors: Record<string, string> = {
  Cardiologia: 'bg-red-50 text-red-600',
  Psicologia: 'bg-purple-50 text-purple-600',
  Pediatria: 'bg-blue-50 text-blue-600',
  Dermatologia: 'bg-orange-50 text-orange-600',
  Nutrição: 'bg-yellow-50 text-yellow-700',
  Tecnologia: 'bg-[#EEEDFE] text-[#7F77DD]',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Blog EG Telemedicina
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Conteúdo médico com base científica: dicas de saúde, prevenção, bem-estar e orientações de especialistas.
          </p>
        </div>
      </section>

      {/* Grid de artigos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group block"
              >
                {/* Imagem */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                  {/* Badge categoria sobre a imagem */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  {/* Título */}
                  <h2 className="text-base font-bold text-[#26215C] mb-2 line-clamp-2 leading-snug group-hover:text-[#7F77DD] transition-colors">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-[#EEEDFE] rounded-2xl p-10 text-center">
          <div className="w-14 h-14 bg-[#7F77DD] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#26215C] mb-2">
            Quer receber conteúdo de saúde no seu e-mail?
          </h2>
          <p className="text-gray-500 mb-8">
            Inscreva-se e receba dicas, novidades e artigos de especialistas diretamente na sua caixa de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#7F77DD] focus:ring-2 focus:ring-[#7F77DD]/20 transition"
            />
            <button
              type="button"
              className="bg-[#7F77DD] hover:bg-[#26215C] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
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
