// Pill button used in trip card footers. `active` shows the filled "done" state.
const tones = {
  rose: 'border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300',
  blue: 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300',
}

const TripActionButton = ({ icon: Icon, label, onClick, active, tone = 'blue', className = '' }) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition active:scale-95 ${
      active
        ? tones[tone]
        : 'border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400'
    } ${className}`}
  >
    <Icon size={16} className={active ? 'fill-current' : ''} />
    {label}
  </button>
)

export default TripActionButton
