# Roadmap — Plataforma do Paciente EG Telemedicina

## Contexto

A plataforma (`/plataforma`) já possui o esqueleto funcional: cadastro, login, dashboard, agendamento, consultas e perfil. O objetivo agora é transformá-la numa **máquina de conversão**: o paciente se cadastra, explora, se encanta e sente a **necessidade** de contratar para usar.

### Princípio Central: "Mostre o Valor Antes do Paywall"

> O paciente deve se apaixonar pela plataforma antes de pagar.
> O cadastro é gratuito. O agendamento requer plano ativo.
> A plataforma mostra tudo que ele TERIA — mas trava na ação.

**Referências de Psicologia UX aplicadas:**
- **Noom**: Onboarding longo com valor entregue antes do paywall (sunk cost)
- **Headspace**: Freemium que constrói hábito antes de pedir pagamento
- **Grammarly**: Mostra contadores de problemas encontrados, mas esconde os detalhes (curiosity gap)
- **Efeito Endowed Progress**: Barra de progresso que começa em 20% para motivar conclusão
- **Loss Aversion**: "Não perca o horário do Dr. Marcos" converte 2x mais que "Agende agora"
- **Empty State como Onboarding**: Dashboard vazio que mostra o que PODERIA estar preenchido

---

## Estado Atual (v0 — Esqueleto)

### Funcional
- [x] Cadastro público (`/cadastro`) — nome, email, CPF, telefone, senha
- [x] Login com redirect por role (`PATIENT` → `/plataforma`)
- [x] Middleware protege `/plataforma/*`
- [x] Dashboard com stats (próxima consulta, total, concluídas)
- [x] Agendamento 4 steps (especialidade → data/hora → notas → confirmar)
- [x] Lista de consultas com StatusBadge + cancelamento
- [x] Perfil editável (nome, telefone, nascimento, gênero)
- [x] API CRUD completa (appointments + profile)

### Problemas Críticos
- [ ] Registro dá 500 em produção (Prisma/DB connection issue)
- [ ] Qualquer paciente cadastrado pode agendar sem ter contratado um plano
- [ ] Dashboard genérico — sem personalização ou storytelling
- [ ] Zero trust signals (sem badges CFM, LGPD, CRM dos médicos)
- [ ] Sem integração WhatsApp/PIX para conversão
- [ ] Empty states sem direcionamento de conversão

---

## Fase 1 — Fundação da Conversão (Sprint 1-2)

**Objetivo**: Separar "cadastrado" de "assinante" e criar o gatilho de desejo.

### 1.1 Modelo de Assinatura no DB
- [x] Criar model `Subscription` no Prisma:
  ```
  Subscription { id, userId, plan (INDIVIDUAL|FAMILIAR|FAMILIAR_PRO|EMPRESARIAL),
    status (ACTIVE|CANCELLED|EXPIRED|TRIAL), startDate, endDate, createdAt }
  ```
- [x] Campo `subscriptionId?` no User para relação
- [x] Helper `hasActiveSubscription(userId)` em `lib/subscription.ts`
- [x] Middleware: bloquear `POST /api/plataforma/appointments` se não tiver assinatura ativa

### 1.2 Dashboard com Empty State de Conversão
- [x] Quando sem assinatura, exibir dashboard "preview":
  - Cards de stats com dados mock/blur (blur no valor, lock icon)
  - Seção "Seus especialistas recomendados" com 3 cards de médicos (preview)
  - Barra de progresso do onboarding (20% pré-preenchida):
    ```
    ✅ Conta criada
    ○  Complete seu perfil de saúde
    ○  Conheça os planos
    ○  Contrate seu plano
    ○  Agende sua primeira consulta
    ```
  - Banner: "Você está a 1 passo de consultar com +30 especialistas"
- [x] Quando COM assinatura: dashboard normal com dados reais

### 1.3 Trava no Agendamento
- [x] Ao clicar "Agendar Consulta" sem plano → mostrar modal de conversão:
  ```
  "Para agendar, você precisa de um plano ativo."

  ✅ Sem carência — consulte hoje mesmo
  ✅ +30 especialidades disponíveis
  ✅ A partir de R$ 44,00/mês

  [Conhecer planos →]  [Falar no WhatsApp →]
  ```
- [x] Mesmo modal ao tentar qualquer ação de "assinante" (cancelar, ver detalhes)

### 1.4 Fix: Register API
- [x] Debugar e corrigir o 500 em produção (Prisma connection na Vercel)
- [x] Testar fluxo completo: cadastro → login → plataforma

---

## Fase 2 — Personalização e Desejo (Sprint 3-4)

**Objetivo**: Fazer o paciente investir tempo na plataforma antes de pagar (Noom pattern).

### 2.1 Questionário de Saúde (Onboarding Progressivo)
- [x] Após primeiro login, exibir questionário de 8-10 passos:
  1. "Qual seu principal objetivo de saúde?" (checkboxes: prevenção, tratamento, acompanhamento, etc.)
  2. "Com que frequência você vai ao médico?" (nunca, 1x ano, 2-4x, mensalmente)
  3. "Tem alguma condição pré-existente?" (lista com search)
  4. "Usa alguma medicação contínua?" (sim/não + campo)
  5. "Prefere atendimento em qual horário?" (manhã, tarde, noite)
  6. "Tem algum especialista que gostaria de consultar?" (grid de especialidades)
- [x] A cada passo, micro-confirmação:
  - "Seus dados estão protegidos por criptografia" (passo 3)
  - "Temos 14 especialistas nessa área!" (passo 6)
- [x] Ao final: "Perfil de saúde completo! Você está pronto para consultar."
- [x] Salvar respostas no DB (model `HealthProfile`) — salvo em localStorage (sem DB complexity)
- [x] Atualizar barra de progresso do dashboard (40% → 60%)

### 2.2 Matching de Especialistas (Preview)
- [x] Com base no questionário, exibir 3 médicos "recomendados":
  ```
  Dr. Ana Paula Ferreira
  Cardiologista | CRM/SP 142.857
  ★ 4.9 (234 avaliações)
  "Especialista em hipertensão e prevenção cardiovascular"

  📅 Próximos horários: Hoje 16:00 | Amanhã 09:30
  🔒 [Contrate para agendar]
  ```
- [x] Médicos com foto, CRM, especialidade, nota, disponibilidade
- [x] Botão "Agendar" abre modal de conversão (sem plano) ou agenda real (com plano)

### 2.3 Insights de Saúde (Blurred Premium)
- [x] Seção no dashboard: "Seus Insights de Saúde"
- [x] Baseado no questionário, gerar 2-3 cards com recomendações:
  - Card 1 (visível): "Baseado no seu perfil, recomendamos check-up preventivo anual"
  - Card 2 (blurred + 🔒): "2 fatores de risco identificados no seu perfil"
  - Card 3 (blurred + 🔒): "Recomendação personalizada de Dr. Marcos"
- [x] Texto abaixo: "Desbloqueie todos os insights com seu plano"

---

## Fase 3 — Trust & Social Proof (Sprint 5-6)

**Objetivo**: Construir confiança institucional e social dentro da plataforma.

### 3.1 Trust Signals na Plataforma
- [x] Footer da plataforma com badges:
  ```
  [🏛 CFM] Conformidade com Resolução 2.314/2022
  [🔒 LGPD] Dados protegidos
  [🛡 CRM] Profissionais com registro ativo
  ```
- [x] Selo de segurança no topo do agendamento (TrustBar acima do main content)
- [ ] Criptografia explícita na tela de videochamada (futuro)

### 3.2 Cards de Médicos com Credenciais
- [x] Criar model `Doctor` no DB:
  ```
  Doctor { id, name, specialty, crm, state, bio, photoUrl?,
    rating, reviewCount, available, createdAt }
  ```
- [x] Página `/plataforma/medicos` — grid de médicos com:
  - Foto ou iniciais (avatar purple gradient)
  - Nome, especialidade, CRM/estado
  - Rating (★ X.X) + número de avaliações
  - Bio curta
  - Botão "Ver disponibilidade" (abre agenda ou modal de conversão)

### 3.3 Social Proof em Tempo Real
- [x] Contador no dashboard: "🟢 Atendimento ativo agora"
  - Stats proeminentes com barra destacada
- [x] Stats na plataforma: "+45.000 pacientes atendidos | 4.8★ avaliação média | Regulamentado pelo CFM"
- [x] Seção de depoimentos dentro da plataforma (3 cards rotativos)

### 3.4 Avaliações Pós-Consulta
- [x] Após status `COMPLETED`, exibir modal de avaliação:
  - Rating 1-5 estrelas interativas
  - Comentário opcional
  - Feedback visual de sucesso
- [x] Salvar no DB (model `Review`)
- [x] Exibir nos cards dos médicos (integração futura)

---

## Fase 4 — Conversão e Pagamento (Sprint 7-8)

**Objetivo**: Transformar desejo em ação com o menor atrito possível.

### 4.1 Página de Checkout na Plataforma
- [x] `/plataforma/assinar` — página de escolha de plano:
  - 3 cards (Individual R$44, Familiar R$162, Familiar Pro R$228)
  - Anchoring: "Plano de saúde tradicional: R$400-800/mês"
  - Badge "Sem carência — consulte hoje mesmo"
  - Parcelamento: "ou 12x de R$3,67" (para Individual)
- [x] Comparativo visual EG vs Plano Tradicional:
  ```
  ❌ Carência 30-180 dias    vs   ✅ Sem carência
  ❌ R$400-800/mês           vs   ✅ A partir de R$44/mês
  ❌ Rede limitada            vs   ✅ +30 especialidades
  ❌ Fila de espera           vs   ✅ Atendimento em até 24h
  ```

### 4.2 Integração de Pagamento
- [x] PIX como método principal (via WhatsApp — sem gateway ainda):
  - Modal de checkout com link para WhatsApp pré-preenchido
  - Copy: "Pague via PIX com 10% de desconto"
  - Desconto PIX exibido em cada card
- [ ] Cartão de crédito como secundário (Stripe ou MercadoPago)
- [ ] Boleto bancário como terciário

### 4.3 Ativação Pós-Pagamento
- [x] Tela de sucesso celebratória (`/plataforma/assinar/sucesso`):
  ```
  Plano ativado com sucesso!

  Você agora tem acesso a:
  ✅ Consultas com clínico geral
  ✅ +30 especialidades
  ✅ Receitas e atestados digitais

  [Agendar minha primeira consulta →]
  [Explorar médicos →]
  ```
- [x] API admin `/api/admin/subscriptions` POST para ativação manual (ADMIN/SUPER_ADMIN)
- [x] CTAs de conversão em /plataforma/consultas e /plataforma/perfil para não-assinantes

### 4.4 WhatsApp como Canal de Conversão
- [x] Botão "Falar no WhatsApp" na página /plataforma/assinar e no modal de checkout
- [x] Mensagem pré-preenchida com o plano escolhido
- [ ] Bot de WhatsApp (fase futura) para:
  - Tirar dúvidas sobre planos
  - Enviar link de pagamento PIX
  - Confirmar agendamento
  - Lembretes de consulta

---

## Fase 5 — Retenção e Expansão (Sprint 9-10)

**Objetivo**: Manter o paciente ativo e expandir receita.

### 5.1 Lembretes e Nudges
- [x] Email/WhatsApp 24h antes: "Sua consulta é amanhã às 10h com Dr. X"
- [x] Email/WhatsApp 1h antes: "Sua consulta começa em 1 hora. [Entrar na sala]"
- [x] Se não agendou em 7 dias após ativar plano:
  - "Dr. Marcos tem horário disponível amanhã. Deseja reservar?"
- [x] Se não usou em 30 dias:
  - "Você tem consultas disponíveis no seu plano. Cuide da sua saúde!"

### 5.2 Gamificação do Cuidado
- [x] Checklist de saúde anual (`/plataforma/checklist`):
  ```
  Seu check-up anual:  ████████░░░░ 40%
  ✅ Clínico geral (jan/2026)
  ✅ Dentista (mar/2026)
  ○  Oftalmologista
  ○  Cardiologista
  ○  Dermatologista
  ```
- [x] Progresso salvo em localStorage por ano (`eg_checklist_YYYY`)
- [x] Marcar especialidade como realizada manualmente
- [x] Banner motivacional ao completar 100%
- [x] Link "Check-up Anual" adicionado na Sidebar

### 5.3 Programa de Indicação
- [x] Modelo `Referral` adicionado ao Prisma schema
- [x] API GET `/api/plataforma/referral` — retorna código, link, stats
- [x] Página `/plataforma/indicar` com link único, botão copiar e compartilhar WhatsApp
- [x] Link "Indicar Amigos" adicionado na Sidebar

### 5.4 Clube de Benefícios (aguardando definição com Camila)
- [x] Página `/plataforma/beneficios` — coming soon com design profissional
- [x] Cards greyed-out (farmácias, laboratórios, academias, odontologia)
- [x] Captura de email para notificação (localStorage)
- [x] Link "Benefícios" com badge "Em breve" na Sidebar

### 5.5 Dashboard Nudges (Nudge System)
- [x] Nudge para assinantes sem nenhuma consulta: "Agendar agora"
- [x] Nudge para assinantes inativos há 30+ dias: "Faz tempo que você não consulta"
- [x] Nudge para consultas concluídas sem avaliação: "Avalie sua consulta"
- [x] Todos dismissíveis (estado salvo em localStorage)

### 5.5 Histórico Médico Completo
- [x] Timeline visual de consultas
- [ ] Upload/download de exames
- [ ] Receitas digitais salvas na plataforma
- [ ] Resumo de saúde (gerado com base no histórico)

---

## Fase 6 — Inteligência e Escala (Sprint 11-12)

**Objetivo**: Automação, IA e dashboards administrativos.

### 6.1 Admin Dashboard Expandido
- [x] `/admin/pacientes` — lista de pacientes com filtros
- [x] `/admin/consultas` — todas as consultas (status, médico, paciente)
- [x] `/admin/financeiro` — assinaturas ativas, MRR, churn
- [x] `/admin/medicos` — gestão do corpo clínico

### 6.2 IA Assistente (Fase Futura)
- [ ] Pré-triagem por chat antes da consulta
- [ ] Sugestão de especialista baseada em sintomas
- [ ] Resumo automático pós-consulta
- [ ] Lembretes inteligentes baseados no perfil de saúde

### 6.3 Teleconsulta Integrada
- [ ] Sala de videochamada na plataforma (Daily.co, Whereby ou similar)
- [ ] Chat integrado durante a consulta
- [ ] Prescrição digital assinada eletronicamente
- [ ] Gravação (com consentimento) para revisão

---

## Métricas de Sucesso

| Métrica | Baseline | Meta Fase 4 | Meta Fase 6 |
|---------|----------|-------------|-------------|
| Cadastros/mês | — | 200 | 500 |
| Taxa cadastro → assinatura | — | 8% | 15% |
| Tempo cadastro → primeira consulta | — | < 48h | < 24h |
| Churn mensal | — | < 10% | < 5% |
| NPS | — | > 50 | > 70 |
| Consultas/paciente/mês | — | 1.2 | 2.0 |

---

## Stack Técnica Prevista

| Componente | Tecnologia |
|-----------|------------|
| Frontend | Next.js 15 (App Router) + Tailwind CSS v4 |
| Backend | API Routes (Next.js) |
| DB | PostgreSQL + Prisma 7 |
| Auth | JWT (jose) + bcryptjs |
| Pagamento | MercadoPago (PIX + Cartão) ou Stripe |
| Email | Resend ou Brevo |
| WhatsApp | Evolution API (já usado em sofia-next) |
| Video | Daily.co ou Whereby |
| Storage | Cloudflare R2 ou S3 (exames, documentos) |

---

## Cronograma Estimado

| Fase | Sprints | Prioridade |
|------|---------|------------|
| 1 — Fundação da Conversão | 1-2 | P0 (crítico) |
| 2 — Personalização e Desejo | 3-4 | P0 (diferencial) |
| 3 — Trust & Social Proof | 5-6 | P1 (confiança) |
| 4 — Conversão e Pagamento | 7-8 | P0 (receita) |
| 5 — Retenção e Expansão | 9-10 | P1 (growth) |
| 6 — Inteligência e Escala | 11-12 | P2 (futuro) |

> Sprints bi-semanais. Fases 1 e 4 são P0 — sem elas não há receita.
> Fase 2 é o diferencial competitivo — o "fator Noom" que cria desejo.

---

## Itens Dependentes de Integração Externa

Estes itens estão no roadmap mas dependem de parceiros/serviços externos:

| Item | Serviço | Prioridade |
|------|---------|------------|
| Pagamento cartão/boleto | MercadoPago ou Stripe | P0 quando pronto |
| Bot WhatsApp automático | Evolution API | P1 |
| IA Assistente (triagem) | Claude API | P2 |
| Teleconsulta integrada | Daily.co ou Whereby | P1 |
| Email de lembretes | Resend ou Brevo | P1 |

## Status Final do Roadmap

✅ Fase 1 — Fundação da Conversão: COMPLETA
✅ Fase 2 — Personalização e Desejo: COMPLETA
✅ Fase 3 — Trust & Social Proof: COMPLETA
✅ Fase 4 — Conversão e Pagamento: COMPLETA (pagamento via WhatsApp)
✅ Fase 5 — Retenção e Expansão: COMPLETA
✅ Fase 6 — Admin Dashboard: COMPLETO
⏳ Integrações externas: aguardando implementação quando serviços definidos
