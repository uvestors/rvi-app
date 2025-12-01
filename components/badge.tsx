const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
    {children}
  </span>
);

export default Badge;
