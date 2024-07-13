D(
  "signalwerk.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  // root & www
  GITHUB_A,
  CNAME("www", "@", TTL(1), { cloudflare_proxy: "on" }),

  // cname to SRV03
  A("srv03", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("ftp", "srv03", TTL(1)),
  CNAME("digital", "srv03", TTL(1)),
  // CNAME("media", "srv03", TTL(1)),
  CNAME("podcast", "srv03", TTL(1)),
  CNAME("sh", "srv03", TTL(1)),
  CNAME("signage", "srv03", TTL(1)),

  //  Certification Authority Authorization (CAA) record
  CAA("@", "issue", "letsencrypt.org"),

  // coolify
  A("coolify", HETZNER_SRV_COOLIFY_IPv4, TTL(1)),
  AAAA("coolify", HETZNER_SRV_COOLIFY_IPv6 + "1000", TTL(1)),

  A("*.srv", HETZNER_SRV_COOLIFY_IPv4, TTL(1)),
  AAAA("*.srv", HETZNER_SRV_COOLIFY_IPv6 + "1000", TTL(1)),

  A("typesense", HETZNER_SRV_COOLIFY_IPv4, TTL(1)),
  AAAA("typesense", HETZNER_SRV_COOLIFY_IPv6 + "1000", TTL(1)),
  A("media", HETZNER_SRV_COOLIFY_IPv4, TTL(1)),
  AAAA("media", HETZNER_SRV_COOLIFY_IPv6 + "1001", TTL(1)),
  // LanguageTool
  A("lt", HETZNER_SRV_COOLIFY_IPv4, TTL(1)),
  AAAA("lt", HETZNER_SRV_COOLIFY_IPv6 + "1001", TTL(1)),

  // github-pages
  // add a CNAME file
  // add the full domain-name on one line (without http)
  // xxx.signalwerk.ch
  TXT(
    "_github-pages-challenge-signalwerk",
    "873370cf4183399ffd8bd7a945059b",
    TTL(1)
  ),
  CNAME("paramatters", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("webtypo", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("typesetting", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("typometer", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("cv", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("avatar", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("cal", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("fontfiller", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("fonts", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("handwerk-der-gestaltung", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("paramatters-ui", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("obfuscator", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("docs", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("nasdaq", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("notzer", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("ssh", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("md", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("uptime", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("portrait", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("snowflake", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("publisher", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("parser", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("dos-day-2021", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("digital-typography", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("ddos2022", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("ddos2023", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("dosday2022", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("zeteco2017", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("fahrplan.zeteco2017", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("pixelfont", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("label-maker", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("esg", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("marc-media", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("mediator", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("marc", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("ai-text", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("sos", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("cross-origin-link", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("2023.birthday.luan", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("typography.japan", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("2024.new-year", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("editor", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("mavica", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("ai-publishers", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("performance.ai", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("beowolf", GITHUB_SIGNALWERK_CNAME, TTL(1)),

  // sfgz IAD
  CNAME("IAD2017", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("IAD2019", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("IAD2021", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("interaction", GITHUB_SIGNALWERK_CNAME, TTL(1)),

  CNAME("migros-gruppe-jobs", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("js-tutorial", GITHUB_SIGNALWERK_CNAME, TTL(1)),

  // dyn ssh
  A("ssh-dns", "167.71.107.60", TTL(1)),
  CNAME("ci", "ssh-dns", TTL(1)),
  CNAME("foo", "ssh-dns", TTL(1)),

  // keybase pad
  CNAME("pad", "kbp.keybaseapi.com.", TTL(1)),
  TXT(
    "_keybase_pages.pad",
    "kbp=/keybase/private/signalwerk,kbpbot/pad",
    TTL(1)
  ),

  // cloudflare Workers
  // CF_WORKER_ROUTE("paged.worker.signalwerk.ch/*", "pagedjs"),
  AAAA("paged.worker", "100::", TTL(1), {
    cloudflare_proxy: "on",
    id: "d4e5603c379125a33c8a2398139dc103"
  }),

  // ChatGPT (Open AI) domain verification
  TXT("@", "openai-domain-verification=dv-wwzn4AXJy3U7WQQMqJlfhgji", TTL(1)),

  // local testing
  // The entire sub domain name *.local.signalwerk.ch point to 127.0.0.1
  // https://www.rfc-editor.org/rfc/rfc6761.html
  A("*.localhost", "127.0.0.1", TTL(1)),

  // MAIL
  A("mx0", "176.28.14.63", TTL(1)),
  MX("@", 50, "mx0.signalwerk.ch.", TTL(1)),
  CNAME("mail", "mx0.signalwerk.ch.", TTL(1)),

  TXT("@", "v=spf1 a mx ip4:176.28.14.63 ~all", TTL(1))
);
