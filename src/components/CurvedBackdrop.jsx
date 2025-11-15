import { motion } from 'framer-motion'

export default function CurvedBackdrop({ children }) {
  return (
    <div className="relative isolate">
      <svg className="absolute -z-10 -top-24 left-0 w-full" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,200 C240,120 480,160 720,120 C960,80 1200,120 1440,60 L1440,0 L0,0 Z"
          fill="url(#grad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  )
}
