D(
  "caminantes-grafico.org",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", "87.230.27.223", TTL(1)),
  CNAME("*", "caminantes-grafico.org.", TTL(1)),
  CNAME("www", "caminantes-grafico.org.", TTL(1))
);
