"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal threshold={0.15}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-accent/10 px-4 text-xs font-semibold text-accent dark:bg-accent/20">
              <Mail className="mr-1.5 h-4 w-4" /> Connect
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get In Touch
            </h2>
            <div className="mt-2 h-1 w-12 bg-accent rounded" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6 lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal direction="right" delay={0.1} className="h-full flex flex-col gap-6">
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm flex-grow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Contact Details</CardTitle>
                  <CardDescription>Feel free to reach out for recruitment partnering, C-Suite consulting, or HR advisory opportunities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Location</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">Lahore, Punjab, Pakistan</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/kanza-i-bhutta-chrp-08b9b6135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline mt-0.5 block break-all"
                      >
                        linkedin.com/in/kanza-i-bhutta-chrp-08b9b6135
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional HR branding note card */}
              <Card className="border-border/40 bg-primary/5 dark:bg-primary/25 border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    "I drive strategic recruitment initiatives by partnering with hiring managers and cross-functional teams to ensure smooth and efficient hiring processes."
                  </p>
                  <span className="text-xs text-muted-foreground block mt-3 font-semibold">— Kanza I. Bhutta, CHRP</span>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Send Message</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Inquiry subject"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border/60 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 flex items-center justify-center gap-2 shadow-md shadow-accent/10"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : isSubmitted ? (
                        <>
                          <Check className="h-4 w-4" /> Message Sent Successfully
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
