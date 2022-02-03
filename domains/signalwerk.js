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
  CNAME("media", "srv03", TTL(1)),
  CNAME("podcast", "srv03", TTL(1)),
  CNAME("sh", "srv03", TTL(1)),
  CNAME("signage", "srv03", TTL(1)),

  //  Certification Authority Authorization (CAA) record
  CAA("@", "issue", "letsencrypt.org"),

  // github-pages
  // add a CNAME file
  // add the full domain-name on one line (without http)
  // xxx.signalwerk.ch
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
  CNAME("winterthur", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("md", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("uptime", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("portrait", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("snowflake", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("publisher", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("parser", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("dos-day-2021", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("digital-typography", GITHUB_SIGNALWERK_CNAME, TTL(1)),

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

  // local testing
  // The entire sub domain name *.local.signalwerk.ch point to 127.0.0.1
  A("*.local", "127.0.0.1", TTL(1)),
  
  // MAIL
  A("mx0", "176.28.14.63", TTL(1)),
  MX("@", 50, "mx0.signalwerk.ch.", TTL(1)),
  CNAME("mail", "mx0.signalwerk.ch.", TTL(1)),

  TXT("@", "v=spf1 a mx ip4:176.28.14.63 ~all", TTL(1))
);
