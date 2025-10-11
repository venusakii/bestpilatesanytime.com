"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-serif text-lg">Cookie Notice</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} className="flex-shrink-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent to
              the use of cookies.
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Accept Cookies
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
