const caseStudyCards = [
  [
    "My Role",
    "Mobile structure, backend integration, authentication flow, upload logic, transcription status, and cloud processing architecture.",
  ],
  [
    "Key Features",
    "Voice recording, audio upload, AI transcription, background processing, guest login, Google login, Free/Pro limits, Sheets export, and AdMob.",
  ],
  [
    "Tech Stack",
    "Flutter, Go, Gin, Firestore, Cloud Run, Cloud Tasks, Google Cloud Storage, and Gemini API.",
  ],
  [
    "Challenges",
    "Async transcription status, audio upload limits, internal endpoint security, and a clean recording/preview experience.",
  ],
] as const;

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="web3-section web3-section-alt relative py-24"
    >
      <div className="container relative z-10 mx-auto">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_55px_rgba(14,165,233,0.08)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
              Selected case study
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-secondary md:text-5xl">
              Echo Flow
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/75">
              Users often record long voice notes but do not want to manually
              rewrite, summarize, or organize them. Echo Flow processes audio
              into transcript, summary, important points, and action items.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudyCards.map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-secondary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
