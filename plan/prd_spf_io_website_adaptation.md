# PRD: spf.io Website Adaptation

## 1. Document Control

- Product: spf.io marketing and product website
- Document type: Product Requirements Document (PRD)
- Date: 2026-03-30
- Status: Draft v3
- Prepared by: GitHub Copilot

## 2. References Used

This PRD is derived from the following internal reference documents:

1. plan/docs/spf_io/features.md
2. plan/docs/spf_io/integrations.md
3. plan/docs/spf_io/pricing_and_faq.md
4. plan/docs/spf_io/resources_and_about.md
5. plan/docs/spf_io/solutions.md
6. plan/spf_io_research.md
7. plan/scratchpad_b7nrehr1.md
8. plan/scratchpad_ou4zd1hl.md
9. skills-lock.json

## 3. Problem Statement

The current spf.io footprint has strong product capabilities, but website adaptation is needed to:

1. Clarify product architecture across Events, Content, and Conversations.
2. Improve conversion from discovery to Request a Quote/Demo.
3. Better communicate industry-specific value propositions.
4. Make technical integration paths easier to understand.
5. Strengthen SEO, accessibility, performance, and design consistency.

## 4. Product Vision

Adapt spf.io into a high-clarity, high-conversion, accessibility-first website that helps decision-makers quickly understand:

1. What spf.io does.
2. Whether it fits their platform and use case.
3. How pricing and onboarding work.
4. What proof points support adoption.

## 5. Goals and Non-Goals

### 5.1 Goals

1. Increase qualified quote/demo submissions.
2. Reduce user confusion between product categories and solution pages.
3. Improve discoverability of integrations and setup requirements.
4. Present stronger trust signals through case studies and outcomes.
5. Establish a scalable UI and content system for future updates.

### 5.2 Non-Goals

1. Rebuilding core translation engine functionality.
2. Replacing operator dashboards or internal admin tools.
3. Launching a fully self-serve checkout flow in this phase.

## 6. Target Users and Primary Jobs

1. Event Producer/Organizer
   - Job: Run multilingual events with predictable setup and quality.
2. Church or Community Leader
   - Job: Make services and meetings inclusive for multilingual audiences.
3. Corporate Communications or DEI Lead
   - Job: Improve accessibility and compliance across internal/external events.
4. Education Program Owner
   - Job: Provide multilingual instruction and parent communication.
5. Technical Operator/AV Lead
   - Job: Verify integration fit (Zoom, YouTube, RTMP, overlays) and launch fast.

## 7. Key Insights from Research

1. Product strengths are broad: live captioning, translation, subtitling, document translation, and multilingual conversations.
2. Integrations and setup details are a major buying factor (Zoom API token, YouTube ingestion URL, loopback choices).
3. Pricing is quote-oriented with usage-minute logic, requiring transparent framing even without fixed public tiers.
4. Industry solutions are strong proof vectors and should be surfaced earlier in the funnel.
5. Accessibility and multilingual positioning are core differentiators and must be reflected in UX and content hierarchy.

## 8. Scope

### 8.1 In Scope

1. Information architecture and navigation redesign.
2. Homepage and top-level pillar page redesign.
3. Product pages: Events, Content, Conversations and sub-products.
4. Integrations hub with setup matrix and requirements.
5. Solutions pages with reusable vertical templates.
6. Pricing and FAQ reframe for quote-led conversion.
7. Resources hub (blog, docs, training, support).
8. Case studies structure and proof module system.
9. Analytics instrumentation and conversion tracking.
10. Performance, accessibility, and SEO baseline improvements.
11. Containerized development and production execution workflows.
12. Interactive price calculator with quote prefill workflow.

### 8.2 Out of Scope

1. Full CMS migration beyond required templates.
2. Billing engine or account provisioning workflows.
3. Deep feature launches unrelated to website adaptation.

## 9. Success Metrics

### 9.1 Primary KPIs

1. +30% increase in qualified Request a Quote submissions within 90 days post-launch.
2. +20% increase in demo request completion rate from product pages.
3. -25% reduction in bounce rate on homepage and product pillar pages.

### 9.2 Secondary KPIs

1. +25% increase in integrations page engagement depth.
2. +20% increase in case-study to CTA click-through rate.
3. 90+ Lighthouse Performance and Best Practices score on key pages.
4. WCAG 2.2 AA conformance for public pages.
5. Price calculator completion rate >= 35% on pricing page sessions.

## 10. Experience Principles

1. Clarity before complexity: communicate outcomes in plain language.
2. Decision-first UX: each page must answer fit, setup, and next step.
3. Accessibility is product truth: captions, language, and inclusion must be visible in UX patterns.
4. Trust by evidence: highlight customers, scenarios, and measurable outcomes.
5. Conversion continuity: every page has contextual CTA paths.

## 11. Information Architecture (Proposed)

1. Home
2. Product
   - Events
   - Content
   - Conversations
   - Integrations
   - Custom AI
3. Solutions
   - Church
   - Conferences
   - Corporate Events
   - Education
   - Government
   - Theater/Performing Arts
4. Resources
   - Blog
   - Case Studies
   - Training Center
   - Documentation
   - FAQ
5. About
6. Request a Quote

## 12. Functional Requirements

### 12.1 Global Navigation and Layout

1. FR-001: Sticky top navigation with Product, Solutions, Resources, About, and Request a Quote CTA.
2. FR-002: Mobile navigation must preserve the same taxonomy and CTA prominence.
3. FR-003: Global language selector pattern for website localization readiness.

### 12.2 Homepage

1. FR-010: Hero must communicate core value in one line and offer two CTAs (Request Quote, Watch Demo).
2. FR-011: Feature triad section for Events, Content, Conversations with clear comparison.
3. FR-012: Integration logos with quick compatibility links (Zoom, YouTube, Teams, Webex, RTMP tools).
4. FR-013: Trust module with customer logos and case-study snippets.
5. FR-014: Conversion module with usage-based pricing explanation and quote CTA.

### 12.3 Product Pillar Pages

1. FR-020: Each pillar page must include use cases, key features, setup model, and CTA.
2. FR-021: Events page must include automatic captions/translation, audio streaming, multilingual polls.
3. FR-022: Content page must include subtitling/transcription, document translation, slide translation.
4. FR-023: Conversations page must include 1-on-1/small group real-time multilingual communication.

### 12.4 Integrations Hub

1. FR-030: Display platform matrix with input/output mechanism and setup complexity.
2. FR-031: Include audio input methods (Cloud Loopback, Local Loopback, direct mic) with guidance.
3. FR-032: Include delivery modes (native CC API, overlay, iframe, mobile link/QR).
4. FR-033: Include technical requirements and permission checklist for Zoom/YouTube.

### 12.5 Solutions Pages

1. FR-040: Each vertical page must include challenges, mapped capabilities, and outcomes.
2. FR-041: Include vertical proof points (example customers/case studies).
3. FR-042: Include vertical-specific CTA to request tailored quote/demo.

### 12.6 Pricing and FAQ

1. FR-050: Explain subscription + usage-minute model clearly without exposing unsupported fixed tiers.
2. FR-051: Include drivers that affect price (volume, language count, service level, custom AI, onboarding).
3. FR-052: Add interactive price calculator input fields (non-binding) to improve quote quality.
4. FR-053: FAQ must answer language support, internet dependency, caption viewing methods, real-time correction, and integrations.

### 12.7 Resources and Support

1. FR-060: Unified resources hub for blog, docs, training, troubleshooting, and support.
2. FR-061: Getting started flow as a 5-step onboarding guide.
3. FR-062: Case studies index with filter by industry and deployment type.

### 12.8 Conversion Flow

1. FR-070: Request a Quote form with progressive profiling.
2. FR-071: Capture event volume, languages, platforms, timeline, and service level needs.
3. FR-072: Route submissions to CRM with campaign metadata.
4. FR-073: Thank-you page with next-step expectations and optional calendar booking.

### 12.9 Frontend Stack and Container Workflow

1. FR-080: Frontend framework must use Next.js App Router as the primary architecture.
2. FR-081: Styling system must use Tailwind CSS with tokenized design patterns.
3. FR-082: UI primitives and composed components must use shadcn conventions.
4. FR-083: Development environment must run via Docker Compose with hot reloading enabled.
5. FR-084: Production environment must run via Docker Compose using optimized production image stages.
6. FR-085: Development and production must use the existing repository files Dockerfile, docker-compose.dev.yml, and docker-compose.yml as source-of-truth.
7. FR-086: Next.js production build must support standalone output for the production runner stage.
8. FR-087: Development profile must mount source code and keep container node_modules isolated from host to prevent dependency drift.
9. FR-088: Development profile must persist .next cache volume for faster restart cycles.

### 12.10 Price Calculator Feature

1. FR-090: Provide a dedicated Price Calculator module on pricing and quote-entry pages.
2. FR-091: Calculator inputs must include billing period, monthly usage volume, target language count, service level (self-service or assisted), and add-ons.
3. FR-092: Add-on inputs must support Custom AI, onboarding/training package, and human-in-the-loop option.
4. FR-093: Calculator must return estimated monthly and annual ranges, not final contractual pricing.
5. FR-094: Calculator output must show transparent assumptions including included minutes and overage model.
6. FR-095: Users must be able to push calculator selections into Request a Quote form fields automatically.
7. FR-096: Calculator must show confidence disclaimer text that estimate is indicative and subject to final quote.
8. FR-097: Calculation rules must be configuration-driven and editable without frontend code changes.
9. FR-098: Default currency must be USD with extensible support for additional currencies.
10. FR-099: Calculator interactions must emit analytics events for input changes, completion, and quote handoff.

## 13. Non-Functional Requirements

### 13.1 Accessibility

1. NFR-001: WCAG 2.2 AA compliance on all new/updated pages.
2. NFR-002: Keyboard-first navigation and focus visibility for all interactive elements.
3. NFR-003: Color contrast and semantic structure validated in CI.

### 13.2 Performance

1. NFR-010: Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1 on key pages.
2. NFR-011: Use optimized image/video loading strategy and route-level code splitting.
3. NFR-012: Minimize client-side JS on content-heavy pages.

### 13.3 SEO

1. NFR-020: Metadata, canonical links, Open Graph, and structured data on key templates.
2. NFR-021: Indexable, descriptive URLs aligned with Product/Solutions/Resources IA.
3. NFR-022: Programmatic schema for FAQ and case-study pages.

### 13.4 Reliability and Security

1. NFR-030: Form spam protection and robust server-side validation.
2. NFR-031: Privacy-safe analytics and consent handling by region.
3. NFR-032: Environment parity must be preserved through Dockerized dev and prod workflows.
4. NFR-033: Development hot reload latency target should be under 2 seconds for standard page edits.
5. NFR-034: Price calculation response latency should be under 300ms for standard input changes.
6. NFR-035: Pricing rule configurations must support versioning and effective-date control.
7. NFR-036: Calculator must include legal-safe estimate disclaimer and no-guarantee language.

## 14. Skill-Informed Implementation Standards

The adaptation must follow installed skill guidance listed in skills-lock.json.

### 14.1 nextjs-app-router-patterns

1. Use Next.js App Router conventions.
2. Default to Server Components; use Client Components only for interactivity.
3. Use streaming with Suspense for heavy sections where appropriate.
4. Use route handlers/server actions for form handling and revalidation-safe flows.

### 14.2 vercel-react-best-practices

1. Prioritize eliminating waterfalls via parallel data fetching.
2. Enforce bundle optimization and dynamic imports for heavy interactive modules.
3. Apply server-side caching and deduplication patterns where feasible.

### 14.3 tailwind-design-system

1. Use Tailwind v4 token-driven theming with semantic CSS variables.
2. Adopt consistent component variant architecture and responsive utility patterns.
3. Standardize spacing, typography, and color tokens across templates.

### 14.4 shadcn

1. Use shadcn components as source-of-truth UI primitives.
2. Follow composition rules (Card structure, Tabs hierarchy, accessible dialog/sheet patterns).
3. Use semantic class patterns and avoid ad-hoc styling drift.

### 14.5 web-design-guidelines

1. Validate each major page template against web interface guideline checks before release.
2. Capture and resolve guideline findings as release criteria.

### 14.6 multi-stage-dockerfile

1. Ensure deployment containerization uses secure, optimized multi-stage builds.
2. Runtime image must be minimal, non-root, and production-configured.

## 15. Content Model Requirements

1. Entities: Product, Feature, Integration, Solution, Case Study, Resource, FAQ.
2. Shared fields: title, summary, audience, value proposition, CTA variant, proof points.
3. Integrations fields: input method, output method, prerequisites, setup steps, caveats.
4. Case study fields: customer profile, challenge, solution used, measurable result.
5. PricingCalculatorConfig fields: billing options, base price bands, usage bands, language multipliers, service level multipliers, add-on fees, disclaimer text, currency metadata, effective date.
6. PricingCalculatorSession fields: selected inputs, estimated output range, timestamp, referral source, quote handoff flag.

## 16. Analytics and Instrumentation

1. Track CTA click-through by page type and audience segment.
2. Track quote form completion funnel by step and drop-off reason.
3. Track integrations matrix interactions and doc/support exits.
4. Track case-study assisted conversions.
5. Track calculator_start, calculator_input_change, calculator_complete, calculator_to_quote, and calculator_abandon events.

## 17. Rollout Plan

### Phase 1: Foundation (Weeks 1-2)

1. Finalize IA, template inventory, and content model.
2. Define design tokens and UI primitives.
3. Define analytics event taxonomy.
4. Finalize Docker development and production standards.

### Phase 2: Core Build (Weeks 3-6)

1. Implement home, product, integrations, and quote flow.
2. Implement solutions templates and case studies.
3. Implement resources and FAQ structure.
4. Implement Next.js App Router pages with Tailwind + shadcn component system.
5. Validate development hot reload workflow in Docker.
6. Implement Price Calculator module and quote prefill integration.

### Phase 3: Quality and Optimization (Weeks 7-8)

1. Accessibility, performance, SEO hardening.
2. Content QA and legal/compliance review.
3. Web guideline audit pass.

### Phase 4: Launch and Learn (Weeks 9-10)

1. Soft launch and monitoring.
2. KPI review at 30/60/90 days.
3. Iterative optimization backlog.
4. Run production image smoke tests before release cutover.

## 18. Risks and Mitigations

1. Risk: Ambiguous pricing communication can reduce trust.
   - Mitigation: Transparent estimator framing and clear quote process.
2. Risk: Integration complexity may intimidate non-technical buyers.
   - Mitigation: Guided setup tiers (easy/assisted/advanced).
3. Risk: Design inconsistency across many page types.
   - Mitigation: Tokenized design system + shadcn component constraints.
4. Risk: Performance regressions due to rich media.
   - Mitigation: Strict Core Web Vitals budgets and media optimization.
5. Risk: Price estimate mismatch with final sales quote can reduce trust.
   - Mitigation: Transparent assumptions, visible disclaimer, and regularly versioned pricing rules.

## 19. Open Questions

1. Which CMS or content workflow will own ongoing updates after launch?
2. Will website localization be launched in phase 1 or phased later?
3. Should calculator support multi-scenario comparison in v1 or post-launch iteration?
4. Which CRM and marketing automation platform is the source of truth for lead scoring?
5. Which pricing authority owns rule updates and approval workflow?

## 20. Release Readiness Checklist

1. All in-scope templates implemented and content-complete.
2. WCAG 2.2 AA checks passed.
3. Core Web Vitals targets met on key routes.
4. Analytics events validated in production-like environment.
5. Quote funnel E2E tested with CRM handoff.
6. Stakeholder sign-off from product, marketing, engineering, and support.
7. Docker development workflow verified with hot reload.
8. Docker production workflow verified using runner stage image.
9. Price Calculator outputs validated against approved pricing rule set.
10. Calculator-to-quote prefill flow validated in staging and production-like environment.

## 21. Docker Execution Requirements (Development and Production)

### 21.1 Development (Hot Reload)

1. Must run using docker-compose.dev.yml.
2. Container must use the dev target from Dockerfile.
3. Port mapping target: localhost:3000.
4. Source must be bind-mounted for instant code reflection.
5. node_modules must remain container-managed.
6. .next cache must use a named Docker volume.

Command:

docker compose -f docker-compose.dev.yml up --build

Acceptance Criteria:

1. Editing a page/component file triggers live update without rebuilding the image.
2. Dependency install remains stable across host machines.
3. Container restart keeps Next.js cache volume for faster warm start.

### 21.2 Production

1. Must run using docker-compose.yml.
2. Container must use the runner target from Dockerfile.
3. Port mapping target: localhost:3001 to container 3000.
4. Production build must run with NODE_ENV=production and non-root runtime user.
5. Final image must include only required runtime artifacts from multi-stage build.

Command:

docker compose -f docker-compose.yml up --build -d

Acceptance Criteria:

1. Production container boots successfully and serves Next.js site on port 3001.
2. Runtime image does not rely on bind-mounted source code.
3. Image uses standalone build output and minimal runtime footprint.
