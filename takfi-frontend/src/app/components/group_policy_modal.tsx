"use client"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, ArrowLeft, Copy, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface CreateGroupPolicyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = 1 | 2 | 3 | 4

interface PolicyFormData {
  policyType: string
  assetType: string
  assetValue: string
  duration: string
  description: string
  groupName: string
  purpose: string
  contributionModel: string
  inviteLink: string
}

export function CreateGroupPolicyModal({ open, onOpenChange }: CreateGroupPolicyModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<PolicyFormData>({
    policyType: "",
    assetType: "",
    assetValue: "",
    duration: "",
    description: "",
    groupName: "",
    purpose: "",
    contributionModel: "",
    inviteLink: "https://takafi-ai/invite/group_764g1",
  })

  const handleInputChange = (field: keyof PolicyFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step)
    }
  }

  const handleSubmit = () => {
    console.log("Policy created:", formData)
    setCurrentStep((prev) => (prev + 1) as Step)
    // onOpenChange(false)
    // setCurrentStep(1)
  }

  const handleCancel = () => {
    onOpenChange(false)
    setCurrentStep(1)
    setFormData({
      policyType: "",
      assetType: "",
      assetValue: "",
      duration: "",
      description: "",
      groupName: "",
      purpose: "",
      contributionModel: "",
      inviteLink: "https://takafi-ai/invite/group_764g1",
    })
  }

  const copyInviteLink = () => {
    navigator.clipboard.writeText(formData.inviteLink)
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Select policy type</Label>
        <Select value={formData.policyType} onValueChange={(value) => handleInputChange("policyType", value)}>
          <SelectTrigger className="bg-input border-border text-foreground w-full">
            <SelectValue placeholder="Individual Policy" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="individual">Individual Policy</SelectItem>
            <SelectItem value="group">Group Policy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Select asset type</Label>
        <Select value={formData.assetType} onValueChange={(value) => handleInputChange("assetType", value)}>
          <SelectTrigger className="bg-input border-border text-foreground w-full">
            <SelectValue placeholder="Car/Motor" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="car-motor">Car/Motor</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="building">Building</SelectItem>
            <SelectItem value="health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Add asset value</Label>
        <Input
          placeholder="$14,045.00"
          value={formData.assetValue}
          onChange={(e) => handleInputChange("assetValue", e.target.value)}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Duration of Asset Holding</Label>
        <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
          <SelectTrigger className="bg-input border-border text-foreground w-full">
            <SelectValue placeholder="min. 6 months" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="6-months">min. 6 months</SelectItem>
            <SelectItem value="1-year">1 year</SelectItem>
            <SelectItem value="2-years">2 years</SelectItem>
            <SelectItem value="5-years">5 years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Asset Description</Label>
        <Textarea
          placeholder="Type something"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Upload Document</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-input/50">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Upload a document of ownership</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Group name</Label>
        <Select value={formData.groupName} onValueChange={(value) => handleInputChange("groupName", value)}>
          <SelectTrigger className="bg-input border-border text-foreground w-full">
            <SelectValue placeholder="Car/Motor" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="car-motor">Car/Motor</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="building">Building</SelectItem>
            <SelectItem value="health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Purpose</Label>
        <Input
          placeholder="Investment"
          value={formData.purpose}
          onChange={(e) => handleInputChange("purpose", e.target.value)}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Contribution Model</Label>
        <Select
          value={formData.contributionModel}
          onValueChange={(value) => handleInputChange("contributionModel", value)}
        >
          <SelectTrigger className="bg-input border-border text-foreground w-full">
            <SelectValue placeholder="Equal" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="equal">Equal</SelectItem>
            <SelectItem value="proportional">Proportional</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-card-foreground">Invite Link</Label>
        <div className="relative">
          <Input value={formData.inviteLink} readOnly className="bg-input border-border text-foreground pr-12" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={copyInviteLink}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted cursor-pointer"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-8">

      <div className="text-center space-y-6">
        <div className="space-y-4">
          <p className="text-muted-foreground">Your Calculated risk score</p>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#12D96A]"></div>
                <span className="text-muted-foreground">Low risk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">High risk</span>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
              </div>
            </div>

            <Progress value={25} className="h-2 bg-[#20B16C99] [&_.bg-primary]:bg-[#34C759]" />

            <p className="text-2xl font-bold text-[#12D96A]">15.8%</p>
          </div>
        </div>

        <div className="border-2 border-[#12D96A] rounded-lg p-8 bg-primary/5">
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-card-foreground">$3,200</p>
            <p className="text-lg font-medium text-card-foreground">Contribution Amount</p>
            <p className="text-sm text-muted-foreground">Based on your asset value and risk score</p>
          </div>
        </div>
      </div>
    </div>
  )
  const renderStep4 = () => (
    <div className="space-y-8">

      <div className="text-center space-y-6">
        <div className="space-y-4">
          <p className="text-muted-foreground">Policy created successfully!</p>

          <div className="flex justify-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-500 mx-auto mb-4">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const getTitle = () => {
    switch (currentStep) {
      case 1:
        return "Create New Policy"
      case 2:
        return "Group Details"
      case 3:
        return "Contribution Preview"
      case 4:
        return "Policy Created"
      default:
        return "Create New Policy"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
            {currentStep !== 1 && (
              <Button variant="ghost" size="sm" onClick={handleBack} className="p-0 h-auto hover:bg-transparent cursor-pointer">
                <ArrowLeft className="h-5 w-5 text-card-foreground" />
              </Button>
            )}
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {currentStep < 3 && (
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1 bg-secondary border-border text-secondary-foreground hover:bg-[red]/80 cursor-pointer"
            >
              Cancel
            </Button>
            <Button onClick={handleNext} className="flex-1 bg-[#12D96A] hover:bg-primary/90 text-primary-foreground cursor-pointer">
              Continue
            </Button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              className="w-full bg-[#12D96A] hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 cursor-pointer"
            >
              Proceed
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="pt-4">
            <Button
              onClick={() => {onOpenChange(false); setCurrentStep(1)}}
              className="w-full bg-[#12D96A] hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 cursor-pointer"
            >
              Done
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}