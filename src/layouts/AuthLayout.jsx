import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-creamAlt px-4">
      <Link to="/" className="mb-8 flex items-center gap-2">
        <img src="/images/logo/coffira-logo-mark.svg" alt="Coffira" className="h-12 w-12" />
        <span className="font-serif text-2xl font-bold text-brand-dark">Coffira</span>
      </Link>
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}
