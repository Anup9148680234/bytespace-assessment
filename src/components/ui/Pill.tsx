

export const Pill = ({ children, on }: { children: React.ReactNode; on?: boolean }) => (
  <span className={`inline-block cursor-pointer rounded-full px-4 py-2 text-sm ${on ? 'bg-volt' : 'bg-gray-100'}`}>{children}</span>
)
