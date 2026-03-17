import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | EG Telemedicina',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="bg-[#062e24] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-white/80">Dicas de saúde, novidades e conteúdo educativo.</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-24 text-center text-gray-500">
        <p className="text-lg">Conteúdo em breve.</p>
      </section>
    </main>
  )
}
