import { FolderGit2, FolderRoot } from "lucide-react";
import { Button } from "./ui/button";
import Separator from "./ui/separator";

export function RepoNotFound() {
  return (
    <div className="flex flex-col items-center gap-4 w-[300px] mx-auto">
      <Button>
        <FolderGit2 size={20} />
        Conectar repo
      </Button>

        <div className="flex flex-row w-full px-10 items-center gap-2">
            <Separator />
            ou 
            <Separator />
        </div>

      <Button>
        <FolderRoot size={20} />
        Inciar sync em pasta local
      </Button>
    </div>
  );
}
