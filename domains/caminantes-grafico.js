D(
  "caminantes-grafico.org",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("www", "caminantes-grafico.org.", TTL(1))
);
