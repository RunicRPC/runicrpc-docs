import { Button } from '@runic-rpc/ui';
import { Zap, Shield, Gauge, Network } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-text-primary">
          Ancient Reliability for Modern Solana Infrastructure
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Production-grade RPC load balancer with zero dependencies, intelligent routing, and comprehensive observability.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/getting-started">
            <Button>Get Started</Button>
          </Link>
          <a href="https://github.com/RunicRPC/runic-rpc" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">View on GitHub</Button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <FeatureCard
          icon={<Zap size={32} />}
          title="Zero Dependencies"
          description="Only peer dependency on @solana/web3.js. No bloat, no conflicts."
        />
        <FeatureCard
          icon={<Shield size={32} />}
          title="Production Ready"
          description="Circuit breakers, retries, health checks, and rate limiting built-in."
        />
        <FeatureCard
          icon={<Gauge size={32} />}
          title="Intelligent Routing"
          description="4 routing strategies: round-robin, latency-based, weighted, and random."
        />
        <FeatureCard
          icon={<Network size={32} />}
          title="WebSocket Support"
          description="Auto-reconnect, resubscription, and failover for WebSocket connections."
        />
      </div>

      <div className="bg-dark-surface border border-border-dark rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Quick Example</h2>
        <pre className="bg-dark-elevated border border-border-dark rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-text-secondary font-mono">
{`import { RunicRPC } from '@runic-rpc/sdk';

const rpc = new RunicRPC({
  providers: {
    helius: { apiKey: 'your-key' }
  },
  strategy: 'latency-based'
});

const slot = await rpc.request('getSlot');
console.log('Current slot:', slot);`}
          </code>
        </pre>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-dark-surface border border-border-dark rounded-xl p-6">
      <div className="text-cyan-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
