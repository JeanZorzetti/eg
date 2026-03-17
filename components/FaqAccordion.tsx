'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é agendada pelo site. Você receberá um link para a sala virtual segura 15 minutos antes do horário marcado. Basta clicar no link no horário agendado e seu médico estará disponível para atendimento.',
  },
  {
    question: 'Quanto custa uma consulta?',
    answer:
      'Os valores variam por especialidade. Consulte nossa tabela de preços ou entre em contato para mais informações. Oferecemos planos acessíveis e opções de parcelamento para facilitar o acesso à saúde de qualidade.',
  },
  {
    question: 'As consultas são reconhecidas pelo CFM?',
    answer:
      'Sim, todas as nossas consultas seguem as regulamentações do Conselho Federal de Medicina (CFM) para telemedicina. Atuamos em conformidade com a Resolução CFM nº 2.314/2022 que regulamenta a prática da telemedicina no Brasil.',
  },
  {
    question: 'Como recebo minha receita médica?',
    answer:
      'As receitas são emitidas digitalmente com assinatura eletrônica, com validade em todo território nacional. Você recebe o documento por e-mail e pode apresentá-lo em qualquer farmácia que aceite receitas digitais.',
  },
  {
    question: 'Posso usar pelo plano de saúde?',
    answer:
      'Trabalhamos com alguns convênios. Entre em contato para verificar se seu plano é aceito. Também oferecemos opções de atendimento particular com preços competitivos caso seu plano ainda não seja coberto.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#EEEDFE] transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-[#26215C] text-sm sm:text-base pr-4">
              {faq.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? 'bg-[#7F77DD] text-white rotate-180'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-[#EEEDFE] border-t border-green-100">
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
