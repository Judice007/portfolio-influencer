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
  assert.match(html, /3,05 mil/);
  assert.match(html, /youtube\.com\/watch\?v=9P7OOl9Q8WE/);
  assert.match(html, /63,1%/);
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
