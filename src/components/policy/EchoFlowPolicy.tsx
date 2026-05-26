export default function EchoFlowPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 text-white/90">
      <h1 className="mb-4 text-3xl font-bold">Privacy Policy for Echo Flow</h1>

      <p className="mb-6 text-sm text-gray-500">Effective date: May 26, 2026</p>

      <p className="mb-4">
        Echo Flow is a mobile application developed by Schenedev. This Privacy
        Policy explains how Echo Flow collects, uses, stores, and protects user
        data when you use the application.
      </p>

      <p className="mb-8">
        By using Echo Flow, you agree to the collection and use of information
        in accordance with this Privacy Policy.
      </p>

      <Section title="1. Information We Collect">
        <h3 className="mb-2 font-semibold">Account Information</h3>
        <p className="mb-4">
          When you sign in or use the app, we may collect your email address,
          Google account name, Google profile photo, guest user ID, and user
          plan information such as Free or Pro.
        </p>

        <h3 className="mb-2 font-semibold">Audio and Transcription Data</h3>
        <p className="mb-4">
          Echo Flow allows users to record and upload audio. We may collect and
          process audio recordings, audio file names, audio file paths,
          transcript text, summary text, important points, action items,
          processing status, and timestamps.
        </p>

        <h3 className="mb-2 font-semibold">Google Sheets Integration</h3>
        <p className="mb-4">
          If you choose to export transcription results to Google Sheets, Echo
          Flow may use your Google authorization token to perform the export
          action. Echo Flow does not intentionally store your Google Sheets
          access token in the database. The token is used only as needed to
          complete the requested Google Sheets export.
        </p>

        <h3 className="mb-2 font-semibold">Advertising Data</h3>
        <p>
          Echo Flow may show advertisements to guest and free users using Google
          AdMob. AdMob may collect device identifiers, advertising identifiers,
          and usage-related information to provide and improve advertising
          services.
        </p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>
          We use the collected information to provide audio recording
          functionality, upload and store audio files, generate transcripts
          using AI, generate summaries and action items, display transcription
          history, export transcription results to Google Sheets when requested,
          manage free user limits and expiration rules, show advertisements,
          improve app reliability, and protect user data.
        </p>
      </Section>

      <Section title="3. Data Storage">
        <p>
          Echo Flow uses Google Cloud Run for backend services, Google Cloud
          Firestore for database storage, Google Cloud Storage for audio file
          storage, Google Gemini for AI transcription and summarization, Google
          AdMob for advertisements, and Google Sheets API for optional export
          features.
        </p>
      </Section>

      <Section title="4. Data Retention">
        <p>
          For free users, uploaded audio and related transcription data are set
          to expire after 5 days. Expired data may be automatically deleted by
          the system. For Pro users, longer or unlimited retention may be
          introduced in a future version. If this changes, this Privacy Policy
          will be updated.
        </p>
      </Section>

      <Section title="5. Data Sharing">
        <p>
          Echo Flow does not sell your personal data. We may process data with
          Google Cloud services, Google Gemini, Google Sheets API, and Google
          AdMob only when necessary to provide app functionality.
        </p>
      </Section>

      <Section title="6. Children’s Privacy">
        <p>
          Echo Flow is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13.
        </p>
      </Section>

      <Section title="7. Security">
        <p>
          We take reasonable measures to protect user data from unauthorized
          access, loss, misuse, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure.
        </p>
      </Section>

      <Section title="8. User Choices">
        <p>
          Users may choose to continue as a guest, sign in with Google, record
          or not record audio, upload or not upload audio, and export or not
          export transcription results to Google Sheets.
        </p>
      </Section>

      <Section title="9. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </Section>

      <Section title="10. Contact Us">
        <p>
          Developer: Schenedev
          <br />
          Country: Indonesia
          <br />
          Email: mursyidanluthfan@gmail.com
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <div className="space-y-2 leading-7">{children}</div>
    </section>
  );
}
