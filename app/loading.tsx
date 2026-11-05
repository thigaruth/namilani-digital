export default function Loading() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-paper pt-24">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex items-end gap-1.5" aria-hidden="true">
          <span className="h-6 w-1 animate-pulse bg-coral [animation-delay:-0.3s]" />
          <span className="h-9 w-1 animate-pulse bg-teal [animation-delay:-0.15s]" />
          <span className="h-4 w-1 animate-pulse bg-orange" />
        </div>
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted">
          Loading Namilani Digital
        </p>
      </div>
    </div>
  );
}
