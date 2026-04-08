"use client";
import Header from "../../components/Header";
import TechnicalSkills from "../../components/TechnicalSkills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f2027] to-[#2c5364] font-mono text-zinc-100">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <TechnicalSkills />
      </main>
    </div>
  );
}
