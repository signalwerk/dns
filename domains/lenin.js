D(
  "lenin.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  // root & www
  GITHUB_A,
  CNAME("www", "@", TTL(1))
);
