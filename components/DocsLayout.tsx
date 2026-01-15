'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Book, BookOpen, Rocket, Server, Settings, Radio, Shield, Wrench, ArrowLeftRight, Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { label: 'Quick Guide', href: '/quick-guide', icon: Zap },
  { label: 'Getting Started', href: '/getting-started', icon: Rocket },
  { label: 'Installation', href: '/installation', icon: Book },
  { label: 'Usage', href: '/usage', icon: BookOpen },
  { label: 'Providers', href: '/providers', icon: Server },
  { label: 'Configuration', href: '/configuration', icon: Settings },
  { label: 'Events', href: '/events', icon: Radio },
  { label: 'WebSockets', href: '/websockets', icon: Radio },
  { label: 'Production', href: '/production', icon: Shield },
  { label: 'Troubleshooting', href: '/troubleshooting', icon: Wrench },
  { label: 'Migration', href: '/migration', icon: ArrowLeftRight },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-dark-surface border-b border-border-dark z-50 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="RunicRPC Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <div>
            <div className="text-sm font-semibold text-text-primary flex items-center gap-2">
              RunicRPC
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-cyan-primary/20 text-cyan-primary">
                v0.1
              </span>
            </div>
            <div className="text-xs text-text-muted">Documentation</div>
          </div>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-dark-surface border-r border-border-dark
          flex flex-col z-40 transition-transform duration-300
          lg:translate-x-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo - Hidden on mobile (shown in header instead) */}
        <div className="hidden lg:flex p-6 border-b border-border-dark">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="RunicRPC Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <div>
              <div className="text-lg font-semibold text-text-primary flex items-center gap-2">
                RunicRPC
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-cyan-primary/20 text-cyan-primary">
                  v0.1
                </span>
              </div>
              <div className="text-xs text-text-muted">Documentation</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 mt-16 lg:mt-0">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  w-full h-10 px-4 flex items-center gap-3 rounded-lg
                  text-sm font-medium transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-cyan-primary
                  ${
                    pathname === item.href
                      ? 'bg-dark-elevated text-text-primary border-l-2 border-cyan-primary'
                      : 'text-text-secondary hover:bg-dark-elevated hover:text-text-primary'
                  }
                `}
              >
                <item.icon size={20} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border-dark">
          <a
            href="https://github.com/RunicRPC/runic-rpc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
