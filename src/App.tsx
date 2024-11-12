import { VerifyObsidianStatus } from "./components/verify-obsidian-status";
import "./globals.css";

export function App() {
  return (
    <div className="bg-[#121214] text-zinc-200 min-h-screen w-full">
      <div className="mx-12 py-18">
        <h1 className="font-sans text-2xl mb-12">Obsidian Sync</h1>

        <VerifyObsidianStatus />
      </div>
    </div>
  );
}
