"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillData {
  name: string
  level: number
}

interface SkillRadarChartProps {
  skills: SkillData[]
  title: string
  description: string
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg shadow-lg p-3">
        <p className="font-semibold text-foreground">{payload[0].payload.name}</p>
        <p className="text-sm text-muted-foreground">
          Niveau: <span className="text-primary font-medium">{payload[0].value}%</span>
        </p>
      </div>
    )
  }
  return null
}

export function SkillRadarChart({ skills, title, description }: SkillRadarChartProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skills}>
            <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.3} />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 2 }} />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "14px",
                color: "hsl(var(--foreground))"
              }}
            />
            <Radar
              name="Niveau de compétence"
              dataKey="level"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.5}
              strokeWidth={2}
              animationDuration={1000}
              animationBegin={0}
              isAnimationActive={true}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
