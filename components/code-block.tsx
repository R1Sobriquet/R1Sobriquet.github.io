"use client"

import { useEffect, useRef, useState } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-css"
import "prismjs/components/prism-markup-templating" // Ajout de cette ligne
import "prismjs/components/prism-python"
import "prismjs/components/prism-php"
import "prismjs/components/prism-sql"
import "prismjs/themes/prism-tomorrow.css"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-md overflow-hidden group">
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-gray-800 hover:bg-gray-700"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Copié!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-1" />
            Copier
          </>
        )}
      </Button>
      <pre className="p-4 overflow-x-auto bg-gray-900 text-sm">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
