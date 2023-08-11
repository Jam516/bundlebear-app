import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/new-york-ui/card";
import React, { ReactNode } from "react";

interface StatCardProps {
  title: string;
  content: string;
  subheader: string;
  icon: ReactNode;
}

export function StatCard({ title, content, subheader, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-xs text-muted-foreground">{subheader}</p>
      </CardContent>
    </Card>
  );
}
