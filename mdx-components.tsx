import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-text-primary mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-text-primary mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-text-primary mb-3 mt-4">{children}</h3>
    ),
    p: ({ children }) => <p className="text-text-secondary mb-4 leading-relaxed">{children}</p>,
    code: ({ children }) => (
      <code className="px-2 py-1 bg-dark-elevated text-cyan-light rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-dark-elevated border border-border-dark rounded-lg p-4 mb-4 overflow-x-auto">
        {children}
      </pre>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-text-secondary">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-text-secondary">{children}</ol>,
    li: ({ children }) => <li className="ml-4">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-cyan-primary hover:text-cyan-light transition-colors underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-primary pl-4 py-2 mb-4 bg-dark-elevated rounded-r">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
