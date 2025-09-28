"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Upload, Zap } from "lucide-react"
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TakFi</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Button asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fast Claims Section */}
      <section className="relative overflow-hidden bg-background">
        {/* Green accent triangles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary transform rotate-45 translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary transform rotate-45 translate-x-12 translate-y-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Fast Claims content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Fast Claims <Zap className="inline w-12 h-12 text-primary" />
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Protect yourself with an individual plan or join your family, friends, or community in a group policy
                  — fair, transparent, and Sharia-compliant coverage powered by blockchain.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Try live demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right side - Submit Claim Form */}
            <div className="relative">
              <Card className="bg-card border-border max-w-lg ml-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-8">Submit a Claim</h2>

                  <div className="space-y-6">
                    {/* Policy ID */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">Policy ID</Label>
                      <Select
                        value={claimFormData.policyId}
                        onValueChange={(value) => handleClaimInputChange("policyId", value)}
                      >
                        <SelectTrigger className="bg-input border-border text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          <SelectItem value="Car/Motor">Car/Motor</SelectItem>
                          <SelectItem value="Land">Land</SelectItem>
                          <SelectItem value="Building">Building</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Claim Type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">Claim Type</Label>
                      <Input
                        placeholder="e.g Car, Land, Health"
                        value={claimFormData.claimType}
                        onChange={(e) => handleClaimInputChange("claimType", e.target.value)}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    {/* Estimated Repair Cost and Date of Incident */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-card-foreground">Estimated Repair Cost</Label>
                        <Input
                          placeholder="min. 6 months"
                          value={claimFormData.estimatedCost}
                          onChange={(e) => handleClaimInputChange("estimatedCost", e.target.value)}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-card-foreground">Date of Incident</Label>
                        <Input
                          placeholder="min. 6 months"
                          value={claimFormData.dateOfIncident}
                          onChange={(e) => handleClaimInputChange("dateOfIncident", e.target.value)}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    {/* Location of Incident */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">Location of Incident</Label>
                      <Input
                        placeholder="Ar-Riyadh city, Saudi"
                        value={claimFormData.locationOfIncident}
                        onChange={(e) => handleClaimInputChange("locationOfIncident", e.target.value)}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    {/* Description of Incident */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">Description of Incident</Label>
                      <Textarea
                        placeholder="Type something"
                        value={claimFormData.description}
                        onChange={(e) => handleClaimInputChange("description", e.target.value)}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px] resize-none"
                      />
                    </div>

                    {/* Upload Evidence */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-card-foreground">Upload Evidence</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-input/50">
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Upload a document as an evidence</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        className="flex-1 bg-secondary border-border text-secondary-foreground hover:bg-secondary/80"
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Submit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Needs Change Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Main heading */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Why Insurance
                <br />
                Needs Change
              </h2>
            </div>

            {/* Right side - Top illustration and text */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cjoOhaX21niWAPcqe9uXbouUAODLCc.png"
                  alt="Traditional insurance illustration"
                  className="w-full max-w-md ml-auto"
                />
                <div className="mt-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Traditional insurance is expensive, profit-driven, and often excludes communities seeking
                    Sharia-compliant solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-card border-border p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl">✕</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Lack of transparency</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Lack of transparency, creating distrust in claims and payouts.
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground text-2xl">$</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Accessibility issues</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Millions remain uninsured because current models are inaccessible and unfair.
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secure and Transparent Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VNbdd2zBLceUGqgSzQDXrGTW9sBLCJ.png"
                alt="Security shield"
                className="w-full h-full object-contain"
              />
            </div>
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
