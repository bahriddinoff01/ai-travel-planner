import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Shared layout for the Privacy and Terms pages: dark header with the navbar, then readable text
const LegalPage = ({ title, intro, updated, sections }) => (
  <div className="min-h-screen bg-white dark:bg-slate-800">
    <header className="relative bg-slate-950">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-10 sm:px-8">
        <h1 className="heading-font text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base text-gray-300 sm:text-lg">{intro}</p>
        <p className="mt-3 text-sm text-gray-500">Last updated {updated}</p>
      </div>
    </header>

    <main className="mx-auto max-w-3xl space-y-8 px-6 py-12 sm:px-8">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        Questions? Read more <Link to="/about" className="font-medium text-blue-600 hover:underline dark:text-blue-400">about the team</Link>.
      </p>
    </main>

    <Footer />
  </div>
)

export default LegalPage
