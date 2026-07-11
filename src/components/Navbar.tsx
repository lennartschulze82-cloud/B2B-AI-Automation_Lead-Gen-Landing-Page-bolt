interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-[#f0f0f0] font-semibold text-lg tracking-tight">Autonova</span>
        <button
          onClick={onOpenModal}
          className="text-sm font-medium text-[#f0f0f0] border border-[#2a2a2a] hover:border-[#4f6ef7]/60 hover:text-[#4f6ef7] px-4 py-2 rounded-lg transition-all duration-200"
        >
          Request an Audit
        </button>
      </div>
    </header>
  );
}
