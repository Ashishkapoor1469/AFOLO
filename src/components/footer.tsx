"use client";

import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-semibold">Ashish Kapoor</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashish Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
