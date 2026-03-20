'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function CadastroPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', cpf: '', phone: '', password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirm) {
      setError('As senhas não coincidem')
      return
    }

    setLoading(true)
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone || undefined,
        cpf: form.cpf || undefined,
      }),
    })

    if (res.ok) {
      router.push('/login?registered=true')
    } else {
      try {
        const data = await res.json()
        setError(data.error ?? 'Erro ao criar conta')
      } catch {
        setError('Erro ao criar conta. Tente novamente.')
      }
    }
    setLoading(false)
  }

  const inputCls = 'w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#7F77DD] focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/20 transition-colors'

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1650] via-[#26215C] to-[#3d3589] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src="/logo.png" alt="EG Telemedicina" width={180} height={72} className="h-16 w-auto object-contain brightness-0 invert" priority />
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-[#26215C] mb-1">Criar sua conta</h1>
          <p className="text-sm text-gray-500 mb-6">Cadastre-se para acessar a plataforma</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
              <input id="name" required value={form.name} onChange={set('name')} placeholder="Seu nome" className={inputCls} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
              <input id="email" type="email" autoComplete="email" required value={form.email} onChange={set('email')} placeholder="seu@email.com" className={inputCls} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                <input id="cpf" value={form.cpf} onChange={set('cpf')} placeholder="000.000.000-00" className={inputCls} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input id="phone" value={form.phone} onChange={set('phone')} placeholder="(00) 00000-0000" className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha *</label>
              <input id="password" type="password" autoComplete="new-password" required minLength={6} value={form.password} onChange={set('password')} placeholder="Mínimo 6 caracteres" className={inputCls} />
            </div>

            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirmar senha *</label>
              <input id="confirm" type="password" autoComplete="new-password" required value={form.confirm} onChange={set('confirm')} placeholder="Repita a senha" className={inputCls} />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
            )}

            <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#7F77DD] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#26215C] disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Criando conta...
                </span>
              ) : (
                'Criar minha conta'
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Já tem conta?{' '}
            <Link href="/login" className="text-[#7F77DD] font-semibold hover:underline">Entrar</Link>
          </p>
        </div>

        <p className="text-center text-xs text-white/40 mt-6">
          &copy; {new Date().getFullYear()} EG Telemedicina
        </p>
      </div>
    </div>
  )
}
