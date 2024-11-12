import { RepoNotFound } from "./components/repo-not-found";
import "./globals.css";

export function App() {
  return (
    <div className="bg-[#121214] text-zinc-200 min-h-screen w-full">
      <div className="mx-12 py-12">
        <h1 className="font-sans text-3xl text-center">Obsidian Sync</h1>

        <div className="h-[350px] flex items-center justify-center">
          <RepoNotFound />
        </div>
      </div>
    </div>
  );
}
