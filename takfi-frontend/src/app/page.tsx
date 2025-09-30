"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Upload, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [claimFormData, setClaimFormData] = useState({
    policyId: "Car/Motor",
    claimType: "e.g Car, Land, Health",
    estimatedCost: "min. 6 months",
    dateOfIncident: "min. 6 months",
    locationOfIncident: "Ar-Riyadh city, Saudi",
    description: "Type something",
  })

  const handleClaimInputChange = (field: string, value: string) => {
    setClaimFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0f0d]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00ff88] rounded flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-white">TakFi</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-[#00ff88] hover:text-[#00ff88]/80 transition-colors font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
                How it works
              </Link>
              <Link href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </Link>
              <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold">
                Launch DApp
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0f0d] pt-20 pb-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-16 relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              <span className="text-white">Insure your Assets </span>
              <span className="text-[#00ff88]">Ethically</span>
              <span className="text-white">, the</span>
              <br />
              <span className="text-[#00ff88]">Halal</span>
              <span className="text-white"> Way</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Protect your assets with the world's first blockchain-powered ethical insurance platform. Built on Hedera,
              powered by AI, and rooted in fairness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold px-8">
                Launch DApp
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                Try live demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="relative max-w-6xl mx-auto perspective-1000">
            <div className="relative transform-gpu" style={{ transform: "rotateX(8deg) rotateY(0deg)" }}>

              {/* Dashboard content */}
              <div className="relative rounded-2xl overflow-auto">
                <img src="/policies.png" alt="TakFi Dashboard Preview" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Needs Change Section */}
      <section className="py-20 px-6 bg-[#141A16]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12 justify-center items-center">
            {/* Left Side - Title */}
            <div className="basis-6/12">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Why Insurance<br/>Needs Change
              </h2>
            </div>

            {/* Right Side - Cards */}
            <div className="space-y-6">
              {/* Traditional Insurance Card */}
              <div className="bg-gradient-to-br from-[#2a4a3a] to-[#1e3a2a] rounded-3xl pr-8 border border-[#00ff88]/10">
              <div className="flex pr-6 gap-8 items-center">
                  <img src="/bro.png" alt="" />
                  <div>
                    <p className="text-xl leading-relaxed">
                      Traditional insurance is expensive, profit-driven, and often excludes communities seeking Sharia-compliant solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-6">
                {/* Lack of Transparency Card */}
                <div className="bg-gradient-to-br from-[#2a4a3a] to-[#1e3a2a] rounded-3xl border border-[#00ff88]/10">
                  <div className="flex flex-col px-6 py-24 gap-8 items-center">
                    <img src="/brolast.svg" alt="" />
                    <div>
                      <p className="text-xl leading-relaxed">
                        Lack of transparency, creating distrust in claims and payouts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Millions Uninsured Card */}
                <div className="bg-gradient-to-br from-[#2a4a3a] to-[#1e3a2a] rounded-3xl border border-[#00ff88]/10">
                  <div className="flex flex-col px-6 py-20 gap-8 items-center">
                    <img src="/rafiki.svg" alt="" />
                    <div>
                    <p className="text-xl leading-relaxed">
                        Millions remain uninsured because current models are inaccessible and unfair.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Need to Revolutionize Insurance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-white">The Need to </span>
            <span className="text-[#00ff88]">Revolutionize</span>
            <span className="text-white"> Insurance</span>
          </h2>

          {/* Main Content Frame */}
          <div className="relative max-w-6xl mx-auto">

            {/* Content Container */}
            <div className="grid lg:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                {/* Left side - Policy Cards Mockup */}
                <div className="space-y-6">
                  <img src="/carinsurance.svg" alt="" />
                </div>

                {/* Right side - Text Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Individual and Group Policies
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Protect yourself with an individual plan or join your family, friends, or community in a group
                    policy — fair, transparent, and Sharia-compliant coverage powered by blockchain.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Fast Claims Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/claimbg.png')",
          backgroundPosition: "right center",
          backgroundColor: "#141A16",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Fast Claims content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Fast Claims <Zap className="inline w-12 h-12 text-[#12D96A]" />
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Protect yourself with an individual plan or join your family, friends, or community in a group policy
                  — fair, transparent, and Sharia-compliant coverage powered by blockchain.
                </p>
              </div>
              <Button size="lg" className="bg-[#12D96A] hover:bg-primary/90 text-primary-foreground">
                Try live demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right side - Submit Claim Form */}
            <div className="relative">
              <img src="/submit_claim.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Secure and Transparent Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify between gap-6">
          <div className="basis-6/12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Secure and
              <br />
              Transparent
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on blockchain technology for complete transparency and security. Every transaction is recorded,
              every claim is traceable, and every decision is auditable.
            </p>
          </div>
          <div>
            <img src="/secure.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Sharia-Compliant & Ethical Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Sharia-Compliant
                <br />& Ethical
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our insurance model follows Islamic finance principles, ensuring ethical practices without interest,
                gambling, or excessive uncertainty. Fair coverage for everyone, regardless of background.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">No interest-based transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Risk-sharing community model</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Transparent and fair practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9d94kzv8nZ4PwtVXiAPRelQP9dgcwH.png"
                alt="Blockchain technology illustration"
                className="w-full max-w-lg ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Insurance Needs Change</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional insurance is broken. We're building the future of ethical, transparent, and community-driven
              coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparent Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden clauses or surprise denials. Every policy term is clear, every claim process is transparent,
                  and every decision is explainable.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community-Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join groups with similar risk profiles. Share premiums fairly, benefit from collective bargaining, and
                  build lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Claims</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Submit claims in minutes, get approvals in hours. Our AI-powered system processes claims faster than
                  traditional insurers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section id="pricing" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Need to <span className="text-primary">Revolutionize</span> Insurance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose between individual policies or join community groups for better rates and shared benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Individual Policies</h3>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">Starting at</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">$15,000</div>
                <p className="text-muted-foreground mb-6">Average coverage amount</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Personal asset protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Flexible premium payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>24/7 claim support</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-primary/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Group Policies</h3>
                  <Label className="bg-primary text-primary-foreground">Recommended</Label>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">$73,000</div>
                <p className="text-muted-foreground mb-6">Average group coverage</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Shared risk, lower premiums</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Community support network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Surplus sharing benefits</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Claims Processing</h4>
                    <p className="text-sm text-muted-foreground">Average 2-hour approval time</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our AI-powered system processes claims 10x faster than traditional insurers, getting you back on track
                  quickly.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Secure & Transparent</h4>
                    <p className="text-sm text-muted-foreground">Blockchain-verified transactions</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Every transaction is recorded on the blockchain for complete transparency and immutable
                  record-keeping.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sharia-Compliant</h4>
                    <p className="text-sm text-muted-foreground">Ethical insurance principles</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Built on Islamic finance principles with no interest, gambling, or excessive uncertainty. Ethical
                  insurance for everyone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get covered in minutes with our streamlined process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Choose Your Coverage</h3>
              <p className="text-muted-foreground">
                Select individual or group policies based on your needs and risk profile.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Get Instant Quote</h3>
              <p className="text-muted-foreground">
                Our AI calculates your premium based on asset value, risk score, and community factors.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Start Coverage</h3>
              <p className="text-muted-foreground">
                Activate your policy instantly and join the TakFi community of ethical insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to revolutionize your insurance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have already made the switch to ethical, transparent insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button size="lg" className="sm:w-auto">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No credit card required. Start with a free quote.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold">TakFi</span>
              </div>
              <p className="text-muted-foreground">
                Ethical insurance for the modern world. Transparent, community-driven, and Sharia-compliant.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Individual Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Group Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Claims
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 TakFi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
