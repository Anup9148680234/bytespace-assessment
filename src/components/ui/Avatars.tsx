

export const Avatars = () => (
  <div className="flex items-center">
    {['bg-rose-300', 'bg-amber-300', 'bg-stone-600', 'bg-sky-300'].map((c, i) => <span key={i} className={`-ml-2 h-8 w-8 rounded-full border-2 border-white first:ml-0 ${c}`} />)}
    <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full bg-volt text-xs font-medium">26+</span>
  </div>
)
