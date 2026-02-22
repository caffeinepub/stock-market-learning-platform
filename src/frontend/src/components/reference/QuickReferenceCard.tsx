import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

interface QuickReferenceCardProps {
  title: string;
  description: string;
  items: { label: string; value: string }[];
}

export default function QuickReferenceCard({ title, description, items }: QuickReferenceCardProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="print:shadow-none">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={handlePrint} className="print:hidden">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border-l-2 border-success pl-3">
              <div className="font-medium text-sm">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
