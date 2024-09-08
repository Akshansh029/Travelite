import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { Clipboard } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [url] = useState(window.location.href);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="flex gap-2" variant="default">
          <p className="text-sm text-white">Share</p>
          <Share2 size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white text-black rounded shadow-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm">{url}</p>
          <Button
            variant={"default"}
            onClick={handleCopy}
            className="bg-black p-2 rounded hover:bg-gray-800 transition"
          >
            {copied ? <Check size={16} /> : <Clipboard size={16} />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
