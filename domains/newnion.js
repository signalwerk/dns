D(
    "newnion.org",
    REG_NONE,
    DnsProvider(CLOUDFLARE),
  
    // root & www
    GITHUB_A,
    CNAME("www", "@", TTL(1))
  );
  