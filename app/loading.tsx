export default function Loading() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-deep pt-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 animate-bounce rounded-full bg-coral [animation-delay:-0.3s]" />
          <span className="size-2 animate-bounce rounded-full bg-teal [animation-delay:-0.15s]" />
          <span className="size-2 animate-bounce rounded-full bg-orange" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
          Loading Namilani Digital
        </p>
      </div>
    </div>
  );
}
