import { ArrowUp } from "lucide-react";

interface BackToNavButtonProps {
  targetId?: string;
}

const BackToNavButton = ({ targetId = "quick-nav" }: BackToNavButtonProps) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-[#F36F21] transition-colors duration-200 border border-slate-200 hover:border-[#F36F21]/40"
      >
        <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        Back to Quick Nav
      </button>
    </div>
  );
};

export default BackToNavButton;
