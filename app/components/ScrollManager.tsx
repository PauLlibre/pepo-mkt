"use client"

import { useEffect, useState } from "react"

export default function ScrollManager() {
  const [isProcessSection, setIsProcessSection] = useState(false)

  useEffect(() => {
    const processSection = document.getElementById("process-section")

    if (!processSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the process section is more than 50% visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setIsProcessSection(true)
        } else {
          setIsProcessSection(false)
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      },
    )

    observer.observe(processSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Add a class to the body when in process section
  useEffect(() => {
    if (isProcessSection) {
      document.body.classList.add("in-process-section")
    } else {
      document.body.classList.remove("in-process-section")
    }
  }, [isProcessSection])

  return null
}

