import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticle } from '../_articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | EG Telemedicina`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [{ url: article.image, width: 800, height: 450 }],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

const categoryColors: Record<string, string> = {
  Cardiologia: 'bg-red-50 text-red-600',
  Psicologia: 'bg-purple-50 text-purple-600',
  Pediatria: 'bg-blue-50 text-blue-600',
  Dermatologia: 'bg-orange-50 text-orange-600',
  Nutrição: 'bg-yellow-50 text-yellow-700',
  Tecnologia: 'bg-[#EEEDFE] text-[#7F77DD]',
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Header */}
      <div className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] pt-16 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-white text-center pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-purple-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-purple-200 truncate max-w-[200px]">{article.category}</span>
          </div>

          {/* Categoria */}
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
            {article.category}
          </span>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-sm text-purple-200">
            <span className="font-medium text-white">{article.author}</span>
            <span className="text-purple-400">·</span>
            <span>{article.authorCredential}</span>
            <span className="text-purple-400">·</span>
            <span>{article.date}</span>
            <span className="text-purple-400">·</span>
            <span>{article.readTime} de leitura</span>
          </div>
        </div>

        {/* Imagem hero — sobrepõe a seção */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 translate-y-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo do artigo */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-[#26215C] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-[#3D3580]
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-[#26215C]
            prose-ul:text-gray-600 prose-ul:my-4
            prose-li:mb-1
            prose-blockquote:border-l-4 prose-blockquote:border-[#7F77DD] prose-blockquote:bg-[#EEEDFE] prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-[#26215C]
            prose-a:text-[#7F77DD] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-2xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Fale com um especialista agora</h2>
          <p className="text-purple-100 mb-8">
            Consultas online com médicos qualificados, disponíveis 24h. Rápido, seguro e acessível.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Agendar consulta
            </Link>
            <Link
              href="/blog"
              className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Mais artigos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
