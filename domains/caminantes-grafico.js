D(
  "caminantes-grafico.org",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  // root & www
  GITHUB_A,
  CNAME("www", "@", TTL(1), { cloudflare_proxy: "on" }),
);
