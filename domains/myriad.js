D(
  "myriad.de",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", GITHUB_IP1_A, TTL(1)),
  A("@", GITHUB_IP2_A, TTL(1)),
  A("@", GITHUB_IP3_A, TTL(1)),
  A("@", GITHUB_IP4_A, TTL(1)),
  CNAME("www", GITHUB_SIGNALWERK_CNAME, TTL(1))
);
