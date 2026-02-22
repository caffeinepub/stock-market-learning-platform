import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LessonCard from '@/components/education/LessonCard';
import Tutorial from '@/components/education/Tutorial';
import QuickReferenceCard from '@/components/reference/QuickReferenceCard';
import { intermediateContent } from '@/data/intermediateContent';
import { quickReferences } from '@/data/quickReferences';

export default function IntermediatePage() {
  const intermediateReferences = quickReferences.filter((ref) => ref.level === 'intermediate');

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/assets/generated/intermediate-icon.dim_128x128.png"
            alt="Intermediate level"
            className="h-32 w-32"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Intermediate Level</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Ready to take your investing knowledge to the next level? Learn chart reading, technical analysis, trading
          strategies, and portfolio management techniques.
        </p>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="lessons" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {intermediateContent
              .filter((item) => item.type === 'lesson' && item.content)
              .map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  content={lesson.content!}
                  image={lesson.image}
                  difficulty="intermediate"
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-8">
          <div className="space-y-8">
            {intermediateContent
              .filter((item) => item.type === 'tutorial')
              .map((tutorial) => (
                <Tutorial
                  key={tutorial.id}
                  title={tutorial.title}
                  description={tutorial.description}
                  prerequisites={tutorial.prerequisites || []}
                  objectives={tutorial.objectives || []}
                  steps={tutorial.steps || []}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Reference Section */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">Quick Reference Guides</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {intermediateReferences.map((reference) => (
            <QuickReferenceCard
              key={reference.id}
              title={reference.title}
              description={reference.description}
              items={reference.items}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
