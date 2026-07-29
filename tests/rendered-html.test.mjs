import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders Felipe Judice creator media kit", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Felipe Júdice/);
  assert.match(html, /Influencer &amp; criador de conteúdo/i);
  assert.match(html, /Eu vivo histórias/);
  assert.match(html, /Meu universo/);
  assert.match(html, /Games &amp; humor/);
  assert.match(html, /Meu universo, direto do feed/);
  assert.match(html, /O que eu vivo vira conteúdo/);
  assert.match(html, /2\.939/);
  assert.match(html, /Copa chegando, resenha começando/);
  assert.match(html, /instagram\.com\/judice007\/reel\/DYN7YyOxgPV/);
  assert.match(html, /Mais vistos no Instagram/);
  assert.match(html, /instagram\.com\/reel\/CtKoCsFAHYB/);
  assert.match(html, /instagram\.com\/reel\/DX79VJUxHSx/);
  assert.match(html, /14,7 mil curtidas/);
  assert.match(html, /2\.884 curtidas/);
  assert.match(html, /Mais vistos no TikTok/);
  assert.match(html, /tiktok\.com\/@judice007\/video\/6830217627496025350/);
  assert.match(html, /tiktok\.com\/@judice007\/video\/6842698545292692741/);
  assert.match(html, /12,3 mil curtidas/);
  assert.match(html, /7\.241 curtidas/);
  assert.match(html, /Mais vistos no YouTube/);
  assert.match(html, /Shorts/);
  assert.match(html, /Vídeos/);
  assert.match(html, /youtube\.com\/shorts\/oGQSKfA6NoY/);
  assert.match(html, /youtube\.com\/shorts\/19Ar33Zo7kk/);
  assert.match(html, /351,8 mil visualizações/);
  assert.match(html, /121,4 mil visualizações/);
  assert.match(html, /youtube\.com\/watch\?v=vd9fztd_ksM/);
  assert.match(html, /youtube\.com\/watch\?v=UXQMwc6H8NA/);
  assert.match(html, /13,1 mil visualizações/);
  assert.match(html, /12,8 mil visualizações/);
  assert.match(html, /instagram\.com\/reel\/DPab2fLDFDj/);
  assert.match(html, /Le Cordon Bleu/);
  assert.match(html, /instagram\.com\/reel\/DTti-_ijHNk/);
  assert.match(html, /instagram\.com\/reel\/DOZYukmDicA/);
  assert.match(html, /instagram\.com\/reel\/DRvLleegSqc/);
  assert.match(html, /instagram\.com\/reel\/DRA2YijkXc8/);
  assert.match(html, /BetMGM/);
  assert.match(html, /Max Titanium/);
  assert.match(html, /Meta AI/);
  assert.match(html, /T\.Burger House/);
  assert.match(html, /8\.705/);
  assert.match(html, /105,6 mil/);
  assert.match(html, /3\.054/);
  assert.match(html, /youtube\.com\/watch\?v=9P7OOl9Q8WE/);
  assert.match(html, /x\.com\/FJudice007/);
  assert.match(html, /X \(Twitter\)/);
  assert.match(html, /@FJudice007/);
  assert.match(html, /56%/);
  assert.match(html, /44%/);
  assert.match(html, /59,7%/);
  assert.match(html, /18,6%/);
  assert.match(html, /96,5%/);
  assert.match(html, /Estados Unidos/);
  assert.match(html, /Horários de atividade/);
  assert.match(html, /18h–21h/);
  assert.match(html, /Audiência no TikTok/);
  assert.match(html, /30\/06–27\/07\/2026/);
  assert.match(html, /Seguidores líquidos/);
  assert.match(html, /−14/);
  assert.match(html, /64%/);
  assert.match(html, /36%/);
  assert.match(html, /808 ativos/);
  assert.match(html, /12h–13h/);
  assert.match(html, /63 ativos/);
  assert.match(html, /Espectadores · 28 dias/);
  assert.match(html, /1,6 mil/);
  assert.match(html, /1,5 mil/);
  assert.match(html, /67%/);
  assert.match(html, /32%/);
  assert.match(html, /Publicação mais vista no período/);
  assert.match(html, /421 visualizações/);
  assert.match(html, /83,4%/);
  assert.match(html, /14,7%/);
  assert.match(html, /Visualizações de publicações/);
  assert.match(html, /1,7 mil/);
  assert.match(html, /Visualizações de perfil/);
  assert.match(html, />23</);
  assert.match(html, /Curtidas/);
  assert.match(html, />25</);
  assert.match(html, /Compartilhamentos/);
  assert.match(html, /Audiência no YouTube/);
  assert.match(html, /Canal em números/);
  assert.match(html, /Todo o período/);
  assert.match(html, /3\.054/);
  assert.match(html, /1,4 mi/);
  assert.match(html, /48,3 mil/);
  assert.match(html, /1,8 mil/);
  assert.match(html, /351,8 mil/);
  assert.match(html, /121,4 mil/);
  assert.match(html, /47,8 mil/);
  assert.match(html, /13,1 mil/);
  assert.match(html, /12,8 mil/);
  assert.match(html, /11,6 mil/);
  assert.match(html, /Público-alvo histórico/);
  assert.match(html, /Masculino · 75%/);
  assert.match(html, /Brasil · 93%/);
  assert.match(html, /\+9/);
  assert.match(html, /99,6%/);
  assert.match(html, /92,6%/);
  assert.match(html, /90,4%/);
  assert.match(html, /60,1%/);
  assert.match(html, /39,9%/);
  assert.match(html, /68,5%/);
  assert.match(html, /33,2%/);
  assert.match(html, /33,1%/);
  assert.match(html, /Formatos consumidos/);
  assert.match(html, /Público mensal/);
  assert.match(html, /5,1 mil/);
  assert.match(html, /10,5 mil/);
  assert.match(html, /\+32 inscritos/);
  assert.match(html, /Espectadores por formato/);
  assert.match(html, /82%/);
  assert.match(html, /Como encontram o canal/);
  assert.match(html, /88,3%/);
  assert.match(html, /16,7 mil/);
  assert.match(html, /11,0 mil/);
  assert.match(html, /51,8 h/);
  assert.match(html, /Visualizações · 7 dias/);
  assert.match(html, /2,4 mil/);
  assert.match(html, /Conteúdo principal/);
  assert.match(html, /2,8 mil/);
  assert.match(html, /Explosão de botijão de gás/);
  assert.match(html, />18<\/strong><span>remixes do destaque/);
  assert.match(html, />242<\/strong><span>remixes totais/);
  assert.match(html, /Desempenho no Instagram/);
  assert.match(html, /Últimos 30 dias/);
  assert.match(html, /67\.866/);
  assert.match(html, /46\.967/);
  assert.match(html, /2,5 mil/);
  assert.match(html, /\+38/);
  assert.match(html, /87,6%/);
  assert.match(html, /60 mil/);
  assert.match(html, /7,7 mil/);
  assert.match(html, /383/);
  assert.match(html, /toques no link da bio/);
  assert.match(html, /wa\.me\/5524998449254/);
  assert.doesNotMatch(
    html,
    /Prazos em dia|Feedback aberto|estratégia alinhada/i,
  );
  assert.doesNotMatch(html, /Assuntos que eu vivo/i);
  assert.doesNotMatch(
    html,
    /\+60|\+2|\+10|marcas e empresas conectadas|campanhas realizadas/i,
  );
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/i);
});

test("ships the portfolio assets and removes the starter preview", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /media-kit-felipe-judice\.pdf/);
  assert.doesNotMatch(page, /social-proof\/instagram\.webp/);
  assert.match(page, /social-card-instagram/);
  assert.match(page, /instagram-feature/);
  assert.match(page, /instagram-covers/);
  assert.match(page, /instagram\/copa-chegando\.jpg/);
  assert.match(page, /instagram\/viagem-sao-paulo\.jpg/);
  assert.match(page, /instagram\/mais-visto-gamer\.png/);
  assert.match(page, /instagram\/mais-visto-cavalo\.png/);
  assert.match(page, /tiktok\/mais-visto-nada\.jpg/);
  assert.match(page, /tiktok\/mais-visto-stonks\.jpg/);
  assert.match(page, /tiktok\/figurinhas-em-angra\.webp/);
  assert.match(page, /youtube\/ea-play-pro-2026\.webp/);
  assert.match(page, /youtube\/minha-convocacao\.webp/);
  assert.match(page, /youtube\/mais-visto-vulcao\.jpg/);
  assert.match(page, /youtube\/mais-visto-nananana\.jpg/);
  assert.match(page, /youtube\/mais-visto-ea-fc-24\.jpg/);
  assert.match(page, /youtube\/mais-visto-the-hunter\.jpg/);
  assert.doesNotMatch(page, /partners\/betmgm\.webp/);
  assert.doesNotMatch(page, /partners\/max-fornagro\.webp/);
  assert.doesNotMatch(page, /partners\/meta-ai\.webp/);
  assert.doesNotMatch(page, /partners\/parceiro-gastronomia\.webp/);
  assert.match(page, /partners\/betmgm-reel\.png/);
  assert.match(page, /partners\/maxtitanium-reel\.png/);
  assert.match(page, /partners\/meta-ai-reel\.png/);
  assert.match(page, /partners\/tburger-reel\.png/);
  assert.match(page, /partners\/le-cordon-bleu-reel\.png/);
  assert.match(page, /instagram\.com\/reel\/DPab2fLDFDj/);
  assert.match(page, /instagram\.com\/reel\/DTti-_ijHNk/);
  assert.match(page, /instagram\.com\/reel\/DOZYukmDicA/);
  assert.match(page, /instagram\.com\/reel\/DRvLleegSqc/);
  assert.match(page, /instagram\.com\/reel\/DRA2YijkXc8/);
  assert.doesNotMatch(page, /creatorWorlds|id="conteudos"/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width: 520px\)/);

  await Promise.all([
    access(new URL("../public/felipe-retrato.webp", import.meta.url)),
    access(new URL("../public/media-kit-felipe-judice.pdf", import.meta.url)),
    access(new URL("../public/instagram/profile.jpg", import.meta.url)),
    access(new URL("../public/instagram/copa-chegando.jpg", import.meta.url)),
    access(new URL("../public/instagram/viagem-sao-paulo.jpg", import.meta.url)),
    access(new URL("../public/instagram/mais-visto-gamer.png", import.meta.url)),
    access(new URL("../public/instagram/mais-visto-cavalo.png", import.meta.url)),
    access(new URL("../public/tiktok/profile.jpg", import.meta.url)),
    access(new URL("../public/tiktok/mais-visto-nada.jpg", import.meta.url)),
    access(new URL("../public/tiktok/mais-visto-stonks.jpg", import.meta.url)),
    access(new URL("../public/tiktok/figurinhas-em-angra.webp", import.meta.url)),
    access(new URL("../public/youtube/profile.jpg", import.meta.url)),
    access(new URL("../public/youtube/ea-play-pro-2026.webp", import.meta.url)),
    access(new URL("../public/youtube/minha-convocacao.webp", import.meta.url)),
    access(new URL("../public/youtube/mais-visto-vulcao.jpg", import.meta.url)),
    access(
      new URL("../public/youtube/mais-visto-nananana.jpg", import.meta.url),
    ),
    access(new URL("../public/youtube/mais-visto-ea-fc-24.jpg", import.meta.url)),
    access(
      new URL("../public/youtube/mais-visto-the-hunter.jpg", import.meta.url),
    ),
    access(new URL("../public/partners/le-cordon-bleu-reel.png", import.meta.url)),
    access(new URL("../public/partners/betmgm-reel.png", import.meta.url)),
    access(new URL("../public/partners/maxtitanium-reel.png", import.meta.url)),
    access(new URL("../public/partners/meta-ai-reel.png", import.meta.url)),
    access(new URL("../public/partners/tburger-reel.png", import.meta.url)),
  ]);

  await assert.rejects(
    access(new URL("../app/_sites-preview", import.meta.url)),
  );
});

test("keeps separate build paths for Sites and Vercel", async () => {
  const [packageSource, vercelSource, nextConfig, vercelTsconfig] =
    await Promise.all([
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../vercel.json", import.meta.url), "utf8"),
      readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
      readFile(new URL("../tsconfig.vercel.json", import.meta.url), "utf8"),
    ]);

  const packageJson = JSON.parse(packageSource);
  const vercelConfig = JSON.parse(vercelSource);

  assert.match(packageJson.scripts.build, /vinext build/);
  assert.equal(packageJson.scripts["build:vercel"], "next build");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(vercelConfig.framework, "nextjs");
  assert.equal(vercelConfig.buildCommand, "npm run build:vercel");
  assert.match(nextConfig, /tsconfig\.vercel\.json/);
  assert.match(vercelTsconfig, /"db"/);
  assert.match(vercelTsconfig, /"worker"/);
});
