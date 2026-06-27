"use client";
import Header from "../../components/Header";
import Certifications from "../../components/Certifications";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen font-sans text-zinc-100">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-4">
        <Certifications />
      </main>
    </div>
  );
}
