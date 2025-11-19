'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Contact</h2>
            <p className="text-foreground/60 max-w-2xl">
              Get in touch if you'd like to discuss opportunities, collaborate, or just chat about tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" className="w-full rounded-sm">
                Send
              </Button>
              {submitted && (
                <p className="text-sm text-foreground/70">
                  Thanks for reaching out!
                </p>
              )}
            </form>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Direct</h3>
              <div className="space-y-2">
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Mail size={18} />
                  <span>your@email.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Twitter size={18} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
