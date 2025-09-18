import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
    title: string
    value: string
    icon: LucideIcon
}

export function MetricCard({ title, value, icon: Icon }: MetricCardProps) {
    return (
        <Card className="bg-[#1E2722]">
            <CardContent className="p-6 pl-10">
                <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{title}</span>
                </div>
                <div className="mt-3">
                    <span className="text-3xl font-bold text-foreground">{value}</span>
                </div>
            </CardContent>
        </Card>
    )
}


// interface MetricCardProps {
//   title: string
//   value: string
//   icon: LucideIcon
// }

export function ClaimCard({ value }: MetricCardProps) {
    return (
        <Card className="bg-[#1E2722]">
            <CardContent className="py-6 pl-10">
                <div className="flex items-center space-x-3">

                    <span className="text-3xl font-bold text-foreground">{value}</span>
                </div>


            </CardContent>
        </Card>
    )
}
