D(
  "zeteco.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  // root & www
  GITHUB_A_PROXY,
  CNAME("www", "@", TTL(1), { cloudflare_proxy: "on" }),
  CNAME("wiki", "@", TTL(1), { cloudflare_proxy: "on" })
);
