# RunicRPC

> Ancient reliability for modern Solana infrastructure

A production-ready, zero-dependency Solana RPC load balancer with circuit breaking, intelligent routing, and comprehensive observability.

### Published Packages (npm)

- **[@runic-rpc/sdk](https://www.npmjs.com/package/@runic-rpc/sdk)** – Core RPC load balancer library
- **[@runic-rpc/cli](https://www.npmjs.com/package/@runic-rpc/cli)** – Operational CLI tools
- **[@runic-rpc/dashboard](https://www.npmjs.com/package/@runic-rpc/dashboard)** – Web monitoring dashboard
- **[@runic-rpc/ui](https://www.npmjs.com/package/@runic-rpc/ui)** – Shared design system components

### Install Packages

```bash
# Install SDK (use in your app)
npm install @runic-rpc/sdk @solana/web3.js

# Install CLI globally (operational tools)
npm install -g @runic-rpc/cli

# Install Dashboard globally (monitoring UI)
npm install -g @runic-rpc/dashboard
```

## 🎯 Features

### SDK Features

- **Zero runtime dependencies** (only peer dep on @solana/web3.js)
- **Circuit breaker** prevents cascading failures
- **Intelligent routing** with 4 strategies:
  - Round-robin
  - Latency-based (EWMA + success rate)
  - Weighted
  - Random
- **Automatic retries** with exponential backoff
- **Rate limiting** with token bucket algorithm
- **Request caching** with TTL
- **Request deduplication** for in-flight requests
- **Health checks** with configurable intervals
- **WebSocket support** with auto-reconnect and resubscription
- **Comprehensive events** for observability
- **Prometheus metrics** export
- **API key masking** in all logs

### Supported Providers

- **Helius** - `createHeliusEndpoint(apiKey)`
- **Alchemy** - `createAlchemyEndpoint(apiKey)`
- **QuickNode** - `createQuicknodeEndpoint(rpcUrl, wsUrl?)`
- **Public Solana** - `createPublicEndpoint()` (fallback)

## 📖 Documentation

- Getting Started (5-min guide)
- Installation
- Provider Setup
- Configuration Reference
- Events & Metrics
- WebSocket Behavior
- Production Tips
- Troubleshooting
- Migration Guidet

## 📄 License

MIT

## 🔒 Security

See [SECURITY.md](./SECURITY.md) for security policy and vulnerability reporting.

---

**Built with ❤️ for the Solana ecosystem**
