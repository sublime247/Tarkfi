"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
// import { SubmitClaimModal } from "@/components/submit-claim-modal"
import { SquarePen, Eye, Dot } from "lucide-react"

export default function DashboardPage() {
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  return (
    <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h1 className="text-3xl font-bold text-foreground">Active Policies</h1>
          <Button className="bg-[#12D96A] hover:bg-green text-black cursor-pointer transition-transform duration-200 hover:scale-105">
            <SquarePen className="h-4 w-4 mr-2" />
            Create Policy
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Individual Policies */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">My Policies (Individual)</h2>
              <Button variant="link" className="text-primary hover:text-primary/80">
                view all
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Car Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Car Insurance</CardTitle>
                    <Badge className="bg-[#12D96A30] text-[#27C840]">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">ID: 329768</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$15,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                    <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Land Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Land</CardTitle>
                    <Badge className="bg-[#FEBC2F4D] text-[#FEBC2F]">Pending</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">ID: 329768</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$5,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                    <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Building Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Building</CardTitle>
                    <Badge className="bg-[#FF383C4D] text-[#FF383C]">Expired</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">ID: 329768</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$7,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                    <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Group Policies */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">My Policies (Group)</h2>
              <Button variant="link" className="text-primary hover:text-primary/80">
                view all
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Group Car Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Car Insurance</CardTitle>
                    <Badge className="bg-[#12D96A30] text-[#27C840]">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">ID: 329768</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>👥</span>
                      <span>9</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$15,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                      <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Surplus Eligibility</p>
                      <Badge className="bg-[#FF383C4D] text-[#FF383C] flex items-center">
                        <Dot style={{ fontSize: 24, width: 24, height: 32 }} />
                        <span className="ml-0 text-base" style={{ marginLeft: '-10px' }}>No</span>
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">3 of 9</p>
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Health Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Health</CardTitle>
                    <Badge className="bg-[#FEBC2F4D] text-[#FEBC2F]">Pending</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">ID: 329768</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>👥</span>
                      <span>9</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$73,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                      <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Surplus Eligibility</p>
                      <Badge className="bg-[#12D96A30] text-[#27C840]">
                        <Dot style={{ fontSize: 24, width: 24, height: 32 }} />
                        <span className="ml-0 text-base" style={{ marginLeft: '-10px' }}>Yes</span>
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">3 of 9</p>
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>

              {/* Fire Insurance */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Fire Insurance</CardTitle>
                    <Badge className="bg-[#12D96A30] text-[#27C840]">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">ID: 329768</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>👥</span>
                      <span>9</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Amount</p>
                    <p className="text-2xl font-bold">$85,000</p>
                    <p className="text-xs text-muted-foreground text-right">≈ 63,131 HBAR</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Claim Status</p>
                      <Badge variant="destructive" className="bg-[#FF383C4D] text-[#FF383C]">None</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Surplus Eligibility</p>
                      <Badge className="bg-[#FF383C4D] text-[#FF383C] flex items-center">
                        <Dot style={{ fontSize: 24, width: 24, height: 32 }} />
                        <span className="ml-0 text-base" style={{ marginLeft: '-10px' }}>No</span>
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Contribution Progress</span>
                      <span className="text-primary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">3 of 9</p>
                  </div>

                  <Button
                    variant="outline"
                    className="cursor-pointer w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* <SubmitClaimModal open={showSubmitModal} onOpenChange={setShowSubmitModal} /> */}
      </main>
  )
}
