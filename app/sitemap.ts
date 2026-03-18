import { MetadataRoute } from 'next'

const BASE_URL = 'https://egtelemedicina24h.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/especialidades`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/especialidades/adulto`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/especialidades/infantil`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/especialidades/terapias`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/para-pacientes`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/empresas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/planos`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/como-funciona`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sobre-nos`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contato`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/protocolos`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/protocolos/telemedicina`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/protocolos/nr1`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/protocolos/mounjaro`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/protocolos/tea`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/protocolos/entrevista-qualificada`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]

  return staticRoutes
}
