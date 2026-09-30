

export const Button = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <button className={`rounded-full bg-volt px-6 py-3 text-[17px] font-medium text-ink ${className}`}>{children}</button>
)
