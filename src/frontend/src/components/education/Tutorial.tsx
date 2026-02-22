import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target } from 'lucide-react';

interface TutorialProps {
  title: string;
  description: string;
  prerequisites: string[];
  objectives: string[];
  steps: { title: string; content: string }[];
}

export default function Tutorial({ title, description, prerequisites, objectives, steps }: TutorialProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Prerequisites */}
        {prerequisites.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              Prerequisites
            </h3>
            <ul className="space-y-1">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-success mt-0.5">•</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learning Objectives */}
        {objectives.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              Learning Objectives
            </h3>
            <ul className="space-y-1">
              {objectives.map((objective, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        <div>
          <h3 className="font-semibold mb-4">Tutorial Steps</h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="h-8 w-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </Badge>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
