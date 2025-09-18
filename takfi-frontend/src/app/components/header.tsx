import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between w-full px-6 border-b border-border">
    {/* Left side */}
    <div>
      <p className="text-2xl font-bold text-white">Welcome 👋</p>
    </div>
  
    {/* Right side */}
    <div className="flex items-center space-x-6">
      <Avatar className="h-8 w-8">
        <img src="/hedera_logo.png" alt="TakFi" className="w-100" />
      </Avatar>
      <Button
        className="text-primary-foreground font-medium"
        style={{ backgroundColor: "#12D96A", color: "#0B0F0E" }}
      >
        Connect Wallet
      </Button>
    </div>
  </header>
  
  )
}
