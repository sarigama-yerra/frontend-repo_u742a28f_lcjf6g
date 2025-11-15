export default function Footer() {
  return (
    <footer className="border-t mt-16 py-10 text-center text-sm text-slate-500 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Smart Water Tank. All rights reserved.</p>
        <p className="mt-2">Secure payments via Razorpay • Fast shipping via Shiprocket/Delhivery</p>
      </div>
    </footer>
  )
}
