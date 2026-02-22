import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LessonCard from '@/components/education/LessonCard';
import Tutorial from '@/components/education/Tutorial';
import QuickReferenceCard from '@/components/reference/QuickReferenceCard';
import { advancedContent } from '@/data/advancedContent';
import { quickReferences } from '@/data/quickReferences';

export default function AdvancedPage() {
  const advancedReferences = quickReferences.filter((ref) => ref.level === 'advanced');

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/assets/generated/advanced-icon.dim_128x128.png"
            alt="Advanced level"
            className="h-32 w-32"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Advanced Level</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Master sophisticated trading strategies, complex financial instruments, and advanced risk management
          techniques. For experienced investors seeking to deepen their expertise.
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
            {advancedContent
              .filter((item) => item.type === 'lesson' && item.content)
              .map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  content={lesson.content!}
                  difficulty="advanced"
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-8">
          <div className="space-y-8">
            {advancedContent
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
          {advancedReferences.map((reference) => (
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
