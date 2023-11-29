var REG_NONE = NewRegistrar("none");

// infrastructure
require("infrastructure/cloudflare.js");
require("infrastructure/hosteurope.js");
require("infrastructure/github.js");
require("infrastructure/hetzner.js");

// domains
require("domains/moire.js");
require("domains/signalwerk.js");
require("domains/lenin.js");
require("domains/newnion.js");
require("domains/caminantes-grafico.js");
require("domains/grafikklang.js");

// STATUS: OK
require("domains/myriad.js");
