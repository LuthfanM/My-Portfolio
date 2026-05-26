export default function EchoFlowDataDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-white/85">
      <h1 className="mb-4 text-3xl font-bold">
        Echo Flow Account and Data Deletion
      </h1>

      <p className="mb-6">
        Echo Flow is developed by Schenedev. This page explains how users can
        request account and associated data deletion.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">
          How to Request Account or Data Deletion
        </h2>

        <p className="mb-4">
          To request deletion of your Echo Flow account and associated data,
          please contact us by email:
        </p>

        <p className="mb-4 font-semibold">mursyidanluthfan@gmail.com</p>

        <p className="mb-4">Please include:</p>

        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            The email address used to sign in to Echo Flow, if you used Google
            Sign-In.
          </li>
          <li>
            A short message saying that you want to delete your Echo Flow
            account and associated data.
          </li>
        </ul>

        <p>
          For guest users, Echo Flow uses a guest user ID. Guest data is
          automatically deleted when it expires.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Data That May Be Deleted</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Account-related information</li>
          <li>Guest user ID data</li>
          <li>Uploaded audio files</li>
          <li>Audio file names and paths</li>
          <li>Transcripts</li>
          <li>Summaries</li>
          <li>Important points</li>
          <li>Action items</li>
          <li>Processing records related to the user</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Data Retention</h2>

        <p className="mb-4">
          For free users, uploaded audio and related transcription data are
          automatically set to expire after 5 days. Expired data may be deleted
          automatically by the system.
        </p>

        <p>
          Some data may be retained temporarily if required for security, abuse
          prevention, legal compliance, or system backup purposes.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Contact</h2>

        <p>
          Developer: Schenedev
          <br />
          Country: Indonesia
          <br />
          Email: mursyidanluthfan@gmail.com
        </p>
      </section>
    </main>
  );
}