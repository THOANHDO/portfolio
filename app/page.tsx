'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import { ArrowUpRight, Download, Mail, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }
  })
};

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const badges = [
  'IT Comtor',
  'JP-VN-EN Translator',
  'Agile Facilitator',
  'Bilingual Documentation'
];

const skillGroups = [
  {
    title: 'Language Mastery',
    description: 'Nuôi dưỡng sự đồng cảm giữa các nền văn hoá để giữ tinh thần dự án',
    items: [
      { label: 'Japanese', detail: 'JLPT N1・ビジネスネイティブ' },
      { label: 'English', detail: 'TOEIC 915・Business Communication' },
      { label: 'Vietnamese', detail: 'Native・Kỹ năng viết chuyên ngành IT' }
    ]
  },
  {
    title: 'IT Knowledge',
    description: 'Chủ động đề xuất giải pháp và đặt câu hỏi kỹ thuật chuẩn xác',
    items: [
      { label: 'SDLC & Agile/Scrum', detail: 'User stories, backlog refinement, sprint review' },
      { label: 'System Design', detail: 'API specs, AWS cloud basics, database schema' },
      { label: 'Documentation', detail: 'SRS, ADR, release note, meeting minutes song ngữ' }
    ]
  },
  {
    title: 'Tools',
    description: 'Tối ưu hoá luồng giao tiếp đa chiều giữa các team',
    items: [
      { label: 'Jira / Confluence', detail: 'Workflow automation & knowledge base' },
      { label: 'Figma / Miro', detail: 'UI handoff, journey mapping, workshop facilitation' },
      { label: 'Postman / VSCode / GitHub', detail: 'API testing, code review hỗ trợ dev' }
    ]
  }
];

const projects = [
  {
    company: 'Pasona Tech Vietnam',
    role: 'IT Comtor / BA Translator',
    description:
      'Phiên dịch workshop kick-off, chuyển hóa requirement thành backlog, hỗ trợ BA viết SRS và user manual song ngữ.',
    tags: ['#Translation', '#BA', '#Documentation', '#Agile']
  },
  {
    company: 'Fintech Platform (NDA)',
    role: 'Communication Bridge',
    description:
      'Đảm bảo align giữa team JP product owner và VN dev: note meeting, dịch tài liệu API, điều phối test cycles.',
    tags: ['#Fintech', '#API', '#QA', '#Scrum']
  },
  {
    company: 'E-commerce SaaS Expansion',
    role: 'Localization Lead',
    description:
      'Thiết kế quy trình dịch thuật chuẩn SEO, quản lý term base, training team CS về tone of voice đa ngôn ngữ.',
    tags: ['#Localization', '#SEO', '#Training', '#CX']
  }
];

const translationSamples = [
  {
    title: 'Software Development Contract',
    pair: 'JP → VN',
    summary: 'Điều khoản dự án offshore, timeline & SLA song ngữ.',
    link: '#'
  },
  {
    title: 'API Documentation',
    pair: 'EN ⇄ JP',
    summary: 'Tài liệu RESTful API, auth flow, ví dụ request-response.',
    link: '#'
  },
  {
    title: 'Sprint Review Minutes',
    pair: 'JP ⇄ VN',
    summary: 'Biên bản họp sprint với highlight action items và risk log.',
    link: '#'
  }
];

const testimonials = [
  {
    quote:
      'Ngoc nắm bắt kỹ thuật rất nhanh, luôn chuẩn bị glossary giúp dev và khách hàng hiểu nhau chỉ trong một lần họp.',
    name: 'Tran Minh Hoang',
    role: 'Project Manager, Pasona Tech'
  },
  {
    quote:
      'Her bilingual documentation dramatically reduced review cycles. She anticipates questions before they surface.',
    name: 'Sato Emi',
    role: 'Product Owner, Tokyo'
  }
];

function useSectionInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return { ref, isInView };
}

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const heroFloating = useMemo(
    () => ({
      initial: { y: 0 },
      animate: {
        y: [-6, 6, -6],
        rotate: [-2, 2, -2],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      }
    }),
    []
  );

  const { ref: aboutRef, isInView: aboutInView } = useSectionInView<HTMLDivElement>();
  const { ref: skillsRef, isInView: skillsInView } = useSectionInView<HTMLDivElement>();
  const { ref: workflowRef, isInView: workflowInView } = useSectionInView<HTMLDivElement>();
  const { ref: projectsRef, isInView: projectsInView } = useSectionInView<HTMLDivElement>();
  const { ref: translationRef, isInView: translationInView } = useSectionInView<HTMLDivElement>();
  const { ref: testimonialsRef, isInView: testimonialsInView } = useSectionInView<HTMLDivElement>();
  const { ref: contactRef, isInView: contactInView } = useSectionInView<HTMLDivElement>();

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,199,95,0.15),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(255,133,179,0.2),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(124,244,198,0.18),transparent_60%)]" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-24 text-center md:text-left md:pt-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <motion.div
            {...heroFloating}
            className="gradient-border rounded-3xl bg-midnight/50 p-6 backdrop-blur"
          >
            <motion.div
              className="flex h-28 w-28 items-center justify-center rounded-2xl bg-azure/40 text-4xl font-semibold text-white shadow-[0_12px_40px_rgba(94,155,255,0.3)]"
              animate={{
                boxShadow: [
                  '0 12px 30px rgba(94,155,255,0.3)',
                  '0 12px 30px rgba(255,133,179,0.45)',
                  '0 12px 30px rgba(124,244,198,0.35)'
                ],
                transition: { repeat: Infinity, duration: 6 }
              }}
            >
              🌸
            </motion.div>
          </motion.div>

          <div className="flex max-w-2xl flex-col items-center gap-6 md:items-start">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sunshine shadow-[0_10px_30px_rgba(255,199,95,0.2)] backdrop-blur"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Sparkles className="h-4 w-4" /> Hello! Xin chào • こんにちは
            </motion.span>
            <motion.h1
              className="text-4xl font-bold leading-tight text-white md:text-6xl"
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
            >
              Bridging Language & Technology
            </motion.h1>
            <motion.p className="text-lg text-slate-200/90 md:text-xl" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
              IT Comtor & Translator (JP–VN–EN) specialized in system development communication, bilingual documentation, and
              agile product delivery.
            </motion.p>
            <motion.div className="flex flex-wrap items-center justify-center gap-3 md:justify-start" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
              {badges.map((badge) => (
                <motion.span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-100 shadow-[0_8px_20px_rgba(124,244,198,0.2)]"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(124,244,198,0.2)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
            <motion.div className="flex flex-wrap items-center justify-center gap-4 md:justify-start" variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-azure px-6 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(94,155,255,0.4)] transition hover:-translate-y-1 hover:bg-azure/90"
              >
                View My Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-sakura hover:text-sakura"
              >
                Book an Intro Call <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="about" ref={aboutRef} className="mx-auto max-w-5xl px-6 py-24">
        <motion.div className="space-y-10" initial="hidden" animate={aboutInView ? 'visible' : 'hidden'} variants={sectionReveal}>
          <div className="flex flex-col gap-4">
            <h2 className="section-heading">Xin chào, tôi là Ngọc — IT Comtor tại Pasona Group</h2>
            <p className="section-subheading">
              Tôi là IT Comtor tại Pasona Group, chuyên hỗ trợ phiên dịch và điều phối yêu cầu kỹ thuật giữa team Nhật – Việt. Tôi
              yêu thích việc kết nối con người bằng ngôn ngữ và công nghệ để tạo ra sản phẩm hữu ích.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(94,155,255,0.15)] backdrop-blur">
              <h3 className="text-xl font-semibold text-sunshine">プロフィール (JP)</h3>
              <p className="mt-4 text-slate-200/90">
                パソナテックベトナムのITコミュニケーター。要件定義からテストサポートまで、日越間の技術的な橋渡しを担当。プロジェクトの温度感を保つために、背景理解とリスク共有を大切にしています。
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                <li>• 拠点: Ho Chi Minh City — Tokyo remote collaboration</li>
                <li>• 強み: Technical translation, meeting facilitation, cross-cultural coaching</li>
                <li>• 趣味: カフェ巡り、UXリサーチ、Japanese podcasts</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(255,133,179,0.18)] backdrop-blur">
              <h3 className="text-xl font-semibold text-mint">Career Timeline</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-10 rounded-full bg-azure/30 text-center text-sm font-semibold leading-10 text-white">2024</span>
                  <p className="text-sm text-slate-200/80">
                    Lead IT Comtor cho dự án SaaS mở rộng sang thị trường Nhật, xây dựng playbook communication chuẩn Agile.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-10 rounded-full bg-sakura/30 text-center text-sm font-semibold leading-10 text-white">2022</span>
                  <p className="text-sm text-slate-200/80">
                    Gia nhập Pasona Group • Hỗ trợ 12+ dự án system development, phát triển kỹ năng BA & translation chuyên sâu.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-10 rounded-full bg-sunshine/30 text-center text-sm font-semibold leading-10 text-white">2019</span>
                  <p className="text-sm text-slate-200/80">
                    Bắt đầu sự nghiệp phiên dịch công nghệ • Đồng hành cùng team Nhật đào tạo kỹ năng giao tiếp cho dev Việt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" ref={skillsRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 backdrop-blur-xl"
          initial="hidden"
          animate={skillsInView ? 'visible' : 'hidden'}
          variants={sectionReveal}
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="section-heading">Skills & Tools</h2>
            <p className="section-subheading">
              Bản đồ năng lực giúp tôi giữ nhịp độ trao đổi rõ ràng, đồng nhất giữa stakeholder và đội ngũ phát triển.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                className="gradient-border h-full rounded-3xl bg-midnight/40 p-6 text-left shadow-[0_20px_50px_rgba(14,25,49,0.45)]"
                whileHover={{ translateY: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                custom={index * 0.1}
              >
                <motion.h3 className="text-xl font-semibold text-white" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }}>
                  {group.title}
                </motion.h3>
                <p className="mt-3 text-sm text-slate-200/80">{group.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-100/90">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="font-medium text-sunshine">{item.label}</span>
                      <span className="text-xs text-slate-200/80">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="workflow" ref={workflowRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="rounded-[36px] border border-white/10 bg-[#121b35]/70 p-10 backdrop-blur-xl"
          initial="hidden"
          animate={workflowInView ? 'visible' : 'hidden'}
          variants={sectionReveal}
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="section-heading">Workflow & Communication Style</h2>
            <p className="section-subheading">
              Tôi là cầu nối giúp luồng thông tin Client → BA/PM → IT Comtor → Dev Team diễn ra trôi chảy, minh bạch.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-azure/10 via-white/5 to-sakura/10 p-8">
              <motion.div
                className="absolute inset-0 opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(124,244,198,0.25),transparent_60%)]" />
              </motion.div>
              <div className="relative space-y-6">
                {['Client', 'BA/PM', 'IT Comtor', 'Dev Team'].map((stage, idx) => (
                  <motion.div
                    key={stage}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 text-left shadow-[0_15px_35px_rgba(18,27,53,0.35)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={workflowInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
                  >
                    <span className="text-lg font-semibold text-white">{stage}</span>
                    <motion.span
                      className="rounded-full bg-mint/30 px-3 py-1 text-xs font-medium text-midnight"
                      animate={{ scale: [1, 1.08, 1], transition: { repeat: Infinity, duration: 2.8, delay: idx * 0.2 } }}
                    >
                      {idx === 2 ? 'Bridge' : 'Sync'}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Communication Highlights</h3>
              <ul className="space-y-3 text-sm text-slate-200/80">
                <li>• Live simultaneous translation for requirement & sprint planning meetings.</li>
                <li>• Visual collaboration với Miro + FigJam giúp align persona & user flow.</li>
                <li>• Risk radar và recap mail song ngữ, đảm bảo stakeholder luôn nắm rõ.</li>
                <li>• Coaching team dev về nuance tiếng Nhật, giảm 35% vòng lặp feedback.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" ref={projectsRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.div initial="hidden" animate={projectsInView ? 'visible' : 'hidden'} variants={sectionReveal} className="space-y-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="section-heading">Projects & Case Studies</h2>
            <p className="section-subheading">
              Một vài dự án tiêu biểu thể hiện khả năng kết nối đa ngôn ngữ, quản lý tài liệu và hỗ trợ quy trình Agile.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.company}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121c39]/80 p-8 shadow-[0_25px_60px_rgba(10,15,28,0.55)] backdrop-blur"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <motion.span
                  className="text-sm font-semibold uppercase tracking-wide text-sunshine"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                >
                  {project.company}
                </motion.span>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.role}</h3>
                <p className="mt-4 text-sm text-slate-200/80">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,133,179,0.3),transparent_60%)]" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="portfolio" ref={translationRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.div initial="hidden" animate={translationInView ? 'visible' : 'hidden'} variants={sectionReveal} className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1d294a]/80 via-[#16213b]/80 to-[#101830]/80 p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="section-heading">Translation Portfolio</h2>
            <p className="section-subheading">
              Chắt lọc những sản phẩm ngôn ngữ tiêu biểu chứng minh khả năng truyền tải thông tin chính xác và tối ưu SEO.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {translationSamples.map((sample) => (
              <motion.a
                key={sample.title}
                href={sample.link}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_30px_50px_rgba(29,41,74,0.5)] backdrop-blur"
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="space-y-3">
                  <span className="rounded-full bg-mint/30 px-3 py-1 text-xs font-semibold text-midnight">{sample.pair}</span>
                  <h3 className="text-lg font-semibold text-white">{sample.title}</h3>
                  <p className="text-sm text-slate-200/80">{sample.summary}</p>
                </div>
                <motion.span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sunshine" whileHover={{ x: 4 }}>
                  View sample <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="testimonials" ref={testimonialsRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.div initial="hidden" animate={testimonialsInView ? 'visible' : 'hidden'} variants={sectionReveal} className="space-y-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="section-heading">Testimonials</h2>
            <p className="section-subheading">Những lời nhận xét từ PM, BrSE và khách hàng Nhật mà tôi từng hợp tác.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_40px_rgba(94,155,255,0.18)] backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
              >
                <p className="text-base text-slate-100/90">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm text-slate-200/70">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" ref={contactRef} className="mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          variants={sectionReveal}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-azure/20 via-sakura/20 to-mint/20 p-10 backdrop-blur-xl"
        >
          <motion.div
            className="absolute right-[-50px] top-[-50px] h-60 w-60 rounded-full bg-white/10"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0], transition: { repeat: Infinity, duration: 8 } }}
          />
          <div className="relative z-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">Let’s co-create global-ready products</h2>
              <p className="text-sm text-slate-200/80">
                Available for freelance or full-time cooperation. Tôi ưu tiên các dự án đề cao trải nghiệm người dùng, cần cầu nối ngôn ngữ và kiến thức kỹ thuật chắc chắn.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
                <a href="mailto:hello@itcomtor.jp" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
                  <Mail className="h-4 w-4" /> hello@itcomtor.jp
                </a>
                <a href="https://www.linkedin.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
                  <ArrowUpRight className="h-4 w-4" /> LinkedIn QR
                </a>
              </div>
            </div>
            <form className="space-y-4 rounded-3xl bg-white/10 p-6 shadow-[0_20px_40px_rgba(12,23,46,0.5)]">
              <div className="grid gap-3 md:grid-cols-2">
                <label className="space-y-1 text-sm text-slate-200/80">
                  Name
                  <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:border-mint focus:outline-none" />
                </label>
                <label className="space-y-1 text-sm text-slate-200/80">
                  Email
                  <input type="email" placeholder="you@email.com" className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:border-azure focus:outline-none" />
                </label>
              </div>
              <label className="space-y-1 text-sm text-slate-200/80">
                Project Details
                <textarea rows={4} placeholder="Tell me about your project" className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:border-sakura focus:outline-none" />
              </label>
              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-sunshine px-5 py-3 text-sm font-semibold text-midnight shadow-[0_15px_40px_rgba(255,199,95,0.4)]"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
              >
                Send Message <ArrowUpRight className="h-4 w-4" />
              </motion.button>
              <p className="text-center text-xs text-slate-300/70">I respond within 24 hours • Vercel Analytics enabled</p>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
