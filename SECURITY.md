# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue in RunicRPC, please report it responsibly.

### How to Report

**Please do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please email security@runicrpc.com (or create a private security advisory on GitHub) with:

1. A description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact
4. Suggested fix (if you have one)

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt within 48 hours
- **Updates**: We'll provide regular updates on our investigation and remediation
- **Timeline**: We aim to address critical vulnerabilities within 7 days
- **Credit**: If you wish, we'll credit you in the security advisory

## Security Best Practices

When using RunicRPC:

### API Key Management

- **Never commit API keys** to version control
- Store keys in environment variables or secure vaults
- Rotate keys regularly
- Use different keys for development and production

### Network Security

- Use HTTPS/WSS endpoints only
- Verify TLS certificates
- Consider using a firewall or proxy for additional protection

### Rate Limiting

- Configure appropriate rate limits for your use case
- Monitor rate limit errors to prevent accidental DoS
- Use the built-in rate limiter to prevent overwhelming providers

### Monitoring

- Enable logging in production (but set appropriate log levels)
- Monitor circuit breaker states for suspicious patterns
- Track error rates and investigate spikes
- Use the metrics export feature for observability

### Dependencies

- Keep @solana/web3.js up to date
- Regularly check for security updates
- Run `pnpm audit` periodically

## Known Security Considerations

### API Key Masking

RunicRPC automatically masks API keys in logs and metrics. However:

- Keys may still appear in stack traces if errors occur during initialization
- Ensure your logging infrastructure doesn't expose environment variables

### WebSocket Security

- WebSocket connections automatically reconnect, which may expose retry behavior
- Consider implementing additional authentication if exposing WebSocket subscriptions

### Circuit Breaker

- Circuit breakers protect against cascading failures but may expose timing information
- Monitor circuit state transitions for unusual patterns

## Disclosure Policy

- We follow responsible disclosure practices
- Security issues are fixed before public disclosure
- We publish security advisories after fixes are released
- Critical vulnerabilities may result in expedited releases

## Contact

For security concerns: security@runicrpc.com (or use GitHub Security Advisories)

