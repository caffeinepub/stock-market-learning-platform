import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/glossary/TermCard';
import { glossaryTerms } from '@/data/glossaryTerms';

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return glossaryTerms;

    const query = searchQuery.toLowerCase();
    return glossaryTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.example.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof glossaryTerms> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Stock Market Glossary</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Search and explore comprehensive definitions of stock market terms, concepts, and financial instruments.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 mx-auto max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search terms, definitions, or examples..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Terms List */}
      <div className="space-y-8">
        {Object.keys(groupedTerms)
          .sort()
          .map((letter) => (
            <div key={letter}>
              <h2 className="mb-4 text-2xl font-bold sticky top-16 bg-background/95 backdrop-blur py-2 border-b">
                {letter}
              </h2>
              <div className="grid gap-4">
                {groupedTerms[letter].map((term) => (
                  <TermCard
                    key={term.id}
                    term={term.term}
                    definition={term.definition}
                    example={term.example}
                    relatedTerms={term.relatedTerms}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No terms found matching your search.</p>
        </div>
      )}
    </div>
  );
}
