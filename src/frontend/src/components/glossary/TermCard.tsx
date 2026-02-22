import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface TermCardProps {
  term: string;
  definition: string;
  example: string;
  relatedTerms?: string[];
}

export default function TermCard({ term, definition, example, relatedTerms }: TermCardProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <span className="font-semibold text-lg">{term}</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-2">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Definition</h4>
            <p className="text-sm">{definition}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-1">Example</h4>
            <p className="text-sm italic">{example}</p>
          </div>
          {relatedTerms && relatedTerms.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-2">Related Terms</h4>
              <div className="flex flex-wrap gap-2">
                {relatedTerms.map((related) => (
                  <Badge key={related} variant="secondary">
                    {related}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
