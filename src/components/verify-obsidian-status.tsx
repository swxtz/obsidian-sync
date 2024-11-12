import { FolderGit2 } from "lucide-react";
import { Button } from "./ui/Button";

export function VerifyObsidianStatus() {
    return (
        <Button>
            <FolderGit2 size={20} />
            Conectar repo
        </Button>
    )
}