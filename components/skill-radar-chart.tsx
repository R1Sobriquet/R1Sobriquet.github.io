"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
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

export function SkillRadarChart({ skills, title, description }: SkillRadarChartProps) {
  return (
    <Card>
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
            <Radar
              name="Niveau"
              dataKey="level"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.5}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
