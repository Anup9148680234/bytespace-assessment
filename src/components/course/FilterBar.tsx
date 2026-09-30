

export const FilterBar = () => (
  <div className="flex justify-between">
    <div className="flex gap-3">{['Filter', 'Level', 'Category'].map(f => <span key={f} className="rounded-full border border-gray-300 px-5 py-2.5">{f}</span>)}</div>
    <span className="rounded-full border border-gray-300 px-5 py-2.5">Most relevant</span>
  </div>
)
