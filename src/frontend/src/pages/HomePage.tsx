import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, TrendingUp, LineChart } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const levels = [
    {
      title: 'Beginner',
      description: 'Start your journey into the world of stocks and investing',
      icon: '/assets/generated/beginner-icon.dim_128x128.png',
      path: '/beginner',
      color: 'from-success/20 to-success/5',
      features: ['Stock Basics', 'Market Fundamentals', 'Getting Started', 'Risk Awareness'],
    },
    {
      title: 'Intermediate',
      description: 'Build on your knowledge with technical and fundamental analysis',
      icon: '/assets/generated/intermediate-icon.dim_128x128.png',
      path: '/intermediate',
      color: 'from-primary/20 to-primary/5',
      features: ['Chart Reading', 'Technical Analysis', 'Trading Strategies', 'Portfolio Management'],
    },
    {
      title: 'Advanced',
      description: 'Master sophisticated strategies and complex financial instruments',
      icon: '/assets/generated/advanced-icon.dim_128x128.png',
      path: '/advanced',
      color: 'from-chart-4/20 to-chart-4/5',
      features: ['Advanced Strategies', 'Risk Management', 'Options & Derivatives', 'Market Psychology'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success">
              <TrendingUp className="h-4 w-4" />
              Learn. Invest. Grow.
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Master the{' '}
              <span className="bg-gradient-to-r from-success via-primary to-chart-4 bg-clip-text text-transparent">
                Stock Market
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Your comprehensive guide to understanding stocks, trading strategies, and investment principles. From
              complete beginner to advanced investor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/beginner' })} className="gap-2">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/glossary' })} className="gap-2">
                <BookOpen className="h-4 w-4" />
                Browse Glossary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Choose Your Learning Path</h2>
          <p className="text-lg text-muted-foreground">
            Select the level that matches your experience and start building your investment knowledge
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {levels.map((level) => (
            <Card
              key={level.path}
              className="group relative overflow-hidden transition-all hover:shadow-lg cursor-pointer"
              onClick={() => navigate({ to: level.path })}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <CardHeader className="relative">
                <div className="mb-4 flex justify-center">
                  <img src={level.icon} alt={`${level.title} icon`} className="h-24 w-24" />
                </div>
                <CardTitle className="text-center text-2xl">{level.title}</CardTitle>
                <CardDescription className="text-center">{level.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                  Explore {level.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Everything You Need to Learn</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive resources designed to make stock market education accessible to everyone
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: 'Step-by-Step Tutorials',
                description: 'Structured lessons that build your knowledge progressively',
              },
              {
                icon: LineChart,
                title: 'Visual Diagrams',
                description: 'Clear illustrations of complex concepts and patterns',
              },
              {
                icon: TrendingUp,
                title: 'Quick References',
                description: 'Handy cheat sheets for formulas and strategies',
              },
              {
                icon: BookOpen,
                title: 'Searchable Glossary',
                description: 'Comprehensive dictionary of stock market terms',
              },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 mb-2 text-success" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
