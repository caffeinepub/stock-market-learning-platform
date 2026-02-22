import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DiagramDisplay from './DiagramDisplay';

interface LessonCardProps {
  title: string;
  description: string;
  content: string;
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export default function LessonCard({ title, description, content, image, difficulty }: LessonCardProps) {
  const difficultyColors = {
    beginner: 'bg-success/10 text-success hover:bg-success/20',
    intermediate: 'bg-primary/10 text-primary hover:bg-primary/20',
    advanced: 'bg-chart-4/10 text-chart-4 hover:bg-chart-4/20',
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {image && (
          <div className="mb-4">
            <DiagramDisplay src={image} alt={title} caption={`Illustration for ${title}`} />
          </div>
        )}
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground whitespace-pre-line">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
