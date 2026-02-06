import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Sliders } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Design Systems, Simplified
          </h1>
          <p className="text-lg text-muted-foreground">
            Build consistent, beautiful interfaces with a locked-in design language.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* 1. Theme Generator Block - Wide (spans 2 cols) */}
          <Card className="md:col-span-2 shadow-none border border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">The Hack</h2>
                  <p className="text-muted-foreground">
                    Use TweakCN to generate <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">:root</code> variables.
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className="border-[hsl(var(--ring))] text-foreground bg-transparent"
                >
                  Pro Tip
                </Badge>
              </div>
              
              {/* Mock UI - Sliders and Color Pickers */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-5">
                {/* Slider Row 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">--primary</span>
                    <span className="font-mono text-xs text-muted-foreground">hsl(24 95% 50%)</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-foreground/20 rounded-full" />
                  </div>
                </div>
                
                {/* Slider Row 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">--background</span>
                    <span className="font-mono text-xs text-muted-foreground">hsl(0 0% 100%)</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-full bg-foreground/10 rounded-full" />
                  </div>
                </div>
                
                {/* Color Swatches */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Tokens</span>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <div className="w-6 h-6 rounded border border-border bg-foreground" />
                    <div className="w-6 h-6 rounded border border-border bg-muted" />
                    <div className="w-6 h-6 rounded border border-border bg-background" />
                    <div className="w-6 h-6 rounded border border-border bg-[hsl(var(--ring))]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. North Star Block - Tall (Vertical) */}
          <Card className="md:row-span-2 shadow-none border border-border bg-card flex flex-col">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Visual North Star</h2>
                <p className="text-muted-foreground">
                  Upload screenshots to guide the AI.
                </p>
              </div>
              
              {/* Upload Zone */}
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-muted/30 min-h-[200px]">
                <div className="text-center">
                  <Upload className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drop your reference here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Guidelines Block - Standard */}
          <Card className="md:col-span-2 shadow-none border border-border bg-card">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">No Drift</h2>
                <p className="text-muted-foreground">
                  Lock design with <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">Guidelines.md</code>.
                </p>
              </div>
              
              {/* Mock Markdown Editor */}
              <div className="bg-muted/50 rounded-lg overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Guidelines.md</span>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                </div>
                
                {/* Editor Content */}
                <div className="p-4 font-mono text-sm space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold"># Design System</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground">## Colors</span>
                  </p>
                  <p className="text-muted-foreground pl-4">
                    - Primary: Dark Grey for all text
                  </p>
                  <p className="text-muted-foreground pl-4">
                    - Accent: Orange, used sparingly
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
