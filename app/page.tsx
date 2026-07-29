import { SiteHeader } from "./site-header";

// Snapshot dates for the analytics screenshots below. Update these together
// with the numbers whenever the data is refreshed — every occurrence in this
// file reads from these constants, so there's a single place to change.
const PROFILE_SNAPSHOT_DATE = "29/07/2026";
const YOUTUBE_SNAPSHOT_DATE = "28/07/2026";
const TIKTOK_SNAPSHOT_PERIOD = "30/06–27/07/2026";

const niches = [
  "Gastronomia",
  "Viagens",
  "Lifestyle",
  "Futebol",
  "Games",
  "Humor",
] as const;

const instagramPosts = [
  {
    src: "/instagram/copa-chegando.jpg",
    alt: "Capa de Reel de Felipe Júdice sobre a chegada da Copa",
    eyebrow: "Futebol",
    title: "Copa chegando, resenha começando.",
    type: "Reel",
    href: "https://www.instagram.com/judice007/reel/DYN7YyOxgPV/",
    className: "feed-card feed-card-tall",
  },
  {
    src: "/instagram/humor-gamer.jpg",
    alt: "Felipe Júdice em uma cena de humor diante do computador",
    eyebrow: "Games & humor",
    title: "Aquela confiança de quem diz: deixa comigo.",
    type: "Reel",
    href: "https://www.instagram.com/judice007/reel/DYBBWf7RIe2/",
    className: "feed-card",
  },
  {
    src: "/instagram/viagem-sao-paulo.jpg",
    alt: "Capa de Reel de Felipe Júdice conhecendo lugares novos em São Paulo",
    eyebrow: "Viagens",
    title: "São Paulo pelo olhar de quem vai viver a cidade.",
    type: "Reel",
    href: "https://www.instagram.com/judice007/reel/DVzcvLpETAf/",
    className: "feed-card",
  },
  {
    src: "/instagram/angra-dos-reis.jpg",
    alt: "Felipe Júdice com a paisagem de Angra dos Reis ao fundo",
    eyebrow: "Lifestyle",
    title: "Angra dos Reis também faz parte da história.",
    type: "Post",
    href: "https://www.instagram.com/judice007/p/DUHVHtUjHZo/",
    className: "feed-card feed-card-wide",
  },
  {
    src: "/instagram/lifestyle-praia.jpg",
    alt: "Felipe Júdice em um dia de praia",
    eyebrow: "Vida real",
    title: "Entre uma entrega e outra, a vida acontece.",
    type: "Post",
    href: "https://www.instagram.com/judice007/p/DTRRJx8jHKn/",
    className: "feed-card",
  },
  {
    src: "/instagram/humor-trabalho.jpg",
    alt: "Felipe Júdice em uma cena de humor sobre trabalho e pagamento",
    eyebrow: "Humor",
    title: "Situações do dia a dia que todo mundo reconhece.",
    type: "Reel",
    href: "https://www.instagram.com/judice007/reel/DT5oMAHEezq/",
    className: "feed-card feed-card-wide",
  },
] as const;

const mostViewedReels = [
  {
    src: "/instagram/mais-visto-gamer.webp",
    alt: "Felipe Júdice em um Reel de humor gamer durante uma partida",
    eyebrow: "Humor gamer",
    title: "Quando o amigo entra na call para surtar.",
    proof: "14,7 mil curtidas",
    href: "https://www.instagram.com/reel/CtKoCsFAHYB/",
  },
  {
    src: "/instagram/mais-visto-cavalo.webp",
    alt: "Felipe Júdice reagindo a um cavalo em um Reel de humor",
    eyebrow: "Humor",
    title: "Cadê o meu cavalo?",
    proof: "2.884 curtidas",
    href: "https://www.instagram.com/reel/DX79VJUxHSx/",
  },
] as const;

const mostViewedTikToks = [
  {
    src: "/tiktok/mais-visto-nada.jpg",
    alt: "Felipe Júdice em um vídeo de humor com a frase Nada começa com N e termina com A",
    eyebrow: "Humor",
    title: "Literalmente nada!!!",
    proof: "12,3 mil curtidas",
    href: "https://www.tiktok.com/@judice007/video/6830217627496025350",
  },
  {
    src: "/tiktok/mais-visto-stonks.jpg",
    alt: "Frame do TikTok Stonks de Felipe Júdice sobre ganhar um PS5",
    eyebrow: "Games & humor",
    title: "Stonks?",
    proof: "7.241 curtidas",
    href: "https://www.tiktok.com/@judice007/video/6842698545292692741",
  },
] as const;

const mostViewedShorts = [
  {
    src: "/youtube/mais-visto-vulcao.jpg",
    alt: "Felipe Júdice narrando um vídeo sobre uma erupção vulcânica",
    eyebrow: "Curiosidades",
    title: "Vulcão em erupção!!",
    proof: "351,8 mil visualizações",
    href: "https://youtube.com/shorts/oGQSKfA6NoY",
  },
  {
    src: "/youtube/mais-visto-nananana.jpg",
    alt: "Cachorro dançando no Short Nanananananana de Felipe Júdice",
    eyebrow: "Futebol & humor",
    title: "Nanananananana 🎵 eu to malucooooo",
    proof: "121,4 mil visualizações",
    href: "https://youtube.com/shorts/19Ar33Zo7kk",
  },
] as const;

const mostViewedYouTubeVideos = [
  {
    src: "/youtube/mais-visto-ea-fc-24.jpg",
    alt: "Capa do vídeo sobre comprar EA Sports FC 24 por 150 reais no PC",
    eyebrow: "Games · EA Sports",
    title: "Comprar EA Sports FC 24 por 150 reais no PC?",
    proof: "13,1 mil visualizações",
    href: "https://www.youtube.com/watch?v=vd9fztd_ksM",
  },
  {
    src: "/youtube/mais-visto-the-hunter.jpg",
    alt: "Capa do vídeo ensinando a resolver erro ao abrir The Hunter",
    eyebrow: "Tutorial · Games",
    title: "The Hunter não abre na Epic ou Steam",
    proof: "12,8 mil visualizações",
    href: "https://www.youtube.com/watch?v=UXQMwc6H8NA",
  },
] as const;

const partners = [
  {
    kind: "reel",
    src: "/partners/betmgm-reel.webp",
    alt: "Frame do conteúdo de Felipe Júdice para a BetMGM",
    className: "partner-card partner-card-reel partner-card-wide",
    href: "https://www.instagram.com/reel/DTti-_ijHNk/",
    eyebrow: "Campanha publicitária",
    title: "BetMGM",
  },
  {
    kind: "reel",
    src: "/partners/le-cordon-bleu-reel.webp",
    alt: "Felipe Júdice no evento Le Cordon Bleu Rio de Janeiro",
    className: "partner-card partner-card-reel",
    href: "https://www.instagram.com/reel/DPab2fLDFDj/",
    eyebrow: "Experiência gastronômica",
    title: "Le Cordon Bleu",
  },
  {
    kind: "reel",
    src: "/partners/maxtitanium-reel.webp",
    alt: "Felipe Júdice apresentando produtos da Max Titanium",
    className: "partner-card partner-card-reel",
    href: "https://www.instagram.com/reel/DOZYukmDicA/",
    eyebrow: "Gamer para fitness",
    title: "Max Titanium",
  },
  {
    kind: "reel",
    src: "/partners/meta-ai-reel.webp",
    alt: "Felipe Júdice apresentando a campanha da Meta AI com o Flamengo",
    className: "partner-card partner-card-reel",
    href: "https://www.instagram.com/reel/DRvLleegSqc/",
    eyebrow: "Tecnologia e futebol",
    title: "Meta AI × Flamengo",
  },
  {
    kind: "reel",
    src: "/partners/tburger-reel.webp",
    alt: "Fachada da T.Burger House em conteúdo de Felipe Júdice",
    className: "partner-card partner-card-reel",
    href: "https://www.instagram.com/reel/DRA2YijkXc8/",
    eyebrow: "Gastronomia em Angra",
    title: "T.Burger House",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Judice007 · vida real em conteúdo
            </p>
            <h1>
              Eu vivo histórias.
              <span>E transformo em conteúdo.</span>
            </h1>
            <p className="hero-intro">
              Gastronomia, viagens, futebol, games e humor com a personalidade
              de quem mostra a vida como ela é.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#universo">
                Entrar no meu universo <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-ghost"
                href="/media-kit-felipe-judice.pdf"
                target="_blank"
              >
                Abrir media kit <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-location">
              <span>24</span>
              <p>
                Angra dos Reis
                <strong>Rio de Janeiro</strong>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-card">
              <img
                src="/felipe-retrato.webp"
                alt="Felipe Júdice sorrindo"
                width="533"
                height="800"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <span>Influencer & creator</span>
                <strong>@judice007</strong>
              </div>
            </div>

            <div className="floating-pill floating-pill-top">
              <span aria-hidden="true">●</span> vida real, sem personagem
            </div>
            <div className="floating-pill floating-pill-bottom">
              gastro · viagens · futebol · games
            </div>
          </div>

          <div className="hero-seal" aria-hidden="true">
            <span>JUDICE</span>
            <strong>007</strong>
          </div>
        </section>

        <div className="niche-marquee" aria-label="Principais nichos de conteúdo">
          <div className="niche-track">
            {[...niches, ...niches].map((niche, index) => (
              <span key={`${niche}-${index}`}>
                {niche} <i aria-hidden="true">✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="about section-shell" id="sobre">
          <div className="about-heading">
            <p className="section-label">01 — Muito prazer</p>
            <h2>
              O Felipe por trás do
              <span>@judice007.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-photo">
              <img
                src="/felipe-producao.webp"
                alt="Felipe Júdice trabalhando em uma produção audiovisual"
                width="640"
                height="800"
                loading="lazy"
              />
              <span>Nos bastidores</span>
            </div>

            <div className="about-text">
              <p className="about-lead">
                Sou o <strong>Felipe Júdice</strong>, tenho 28 anos e gosto de
                transformar o que vivo em conteúdo que aproxima.
              </p>
              <p>
                Nasci e cresci em Angra dos Reis, sou formado em Administração e
                sempre fui o cara da câmera, do futebol, dos games e da resenha.
                Foi daí que nasceu o Judice007.
              </p>
              <p>
                Meu conteúdo vem das experiências que realmente fazem parte da
                minha vida: os lugares que conheço, o que provo, os jogos que
                acompanho e as histórias que valem ser compartilhadas.
              </p>

              <div className="work-principles">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Vida real</h3>
                    <p>Sem personagem e sem conversa ensaiada.</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Bom humor</h3>
                    <p>Leveza para deixar cada história mais próxima.</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Experiências</h3>
                    <p>Conteúdo que nasce do que eu realmente vivo.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

        </section>

        <section className="feed section-shell" id="universo">
          <div className="section-heading feed-heading">
            <div>
              <p className="section-label">02 — Meu universo, direto do feed</p>
              <h2>
                O que eu vivo vira conteúdo.
                <span>E o feed prova isso.</span>
              </h2>
            </div>
            <p>
              Gastronomia, viagens, futebol, games, humor e lifestyle aparecem
              com o meu olhar, a minha rotina e a espontaneidade do Judice007.
            </p>
          </div>

          <div className="universe-topics" aria-label="Temas do conteúdo">
            {niches.map((niche, index) => (
              <span key={niche}>
                <small>0{index + 1}</small>
                {niche}
              </span>
            ))}
          </div>

          <div className="feed-profile">
            <img
              src="/instagram/profile.jpg"
              alt="Foto de perfil de Felipe Júdice no Instagram"
              width="150"
              height="150"
              loading="lazy"
            />
            <div className="feed-profile-copy">
              <span>Perfil público · {PROFILE_SNAPSHOT_DATE}</span>
              <h2>@judice007</h2>
              <p>
                Humor, gastronomia, futebol e viagens. A vida como ela é para
                mim, direto de Angra dos Reis.
              </p>
            </div>
            <div className="feed-profile-numbers">
              <p>
                <strong>2.939</strong>
                <span>seguidores</span>
              </p>
              <p>
                <strong>1.142</strong>
                <span>seguindo</span>
              </p>
            </div>
            <a
              href="https://www.instagram.com/judice007/"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir o Instagram de Felipe Júdice"
            >
              Ver perfil <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="feed-highlights-row">
            <div className="feed-highlights">
              <div className="feed-highlights-heading">
                <div>
                  <span>Mais vistos no Instagram</span>
                  <h3>Conteúdos que ganharam alcance.</h3>
                </div>
                <small>Engajamento público · {PROFILE_SNAPSHOT_DATE}</small>
              </div>

              <div className="feed-highlights-grid">
                {mostViewedReels.map((reel, index) => (
                  <a
                    className="feed-highlight-card"
                    href={reel.href}
                    target="_blank"
                    rel="noreferrer"
                    key={reel.href}
                  >
                    <img src={reel.src} alt={reel.alt} loading="lazy" />
                    <span className="feed-highlight-rank">
                      0{index + 1} · mais visto
                    </span>
                    <span className="feed-highlight-proof">{reel.proof}</span>
                    <span className="feed-highlight-gradient" aria-hidden="true" />
                    <span className="feed-highlight-copy">
                      <small>{reel.eyebrow}</small>
                      <strong>{reel.title}</strong>
                      <i aria-hidden="true">↗</i>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="feed-highlights feed-highlights-tiktok"
              id="tiktok-mais-vistos"
            >
              <div className="feed-highlights-heading">
                <div>
                  <span>Mais vistos no TikTok</span>
                  <h3>Humor que atravessou plataformas.</h3>
                </div>
                <small>Ranking informado por Felipe · curtidas públicas</small>
              </div>

              <div className="feed-highlights-grid">
                {mostViewedTikToks.map((video, index) => (
                  <a
                    className="feed-highlight-card"
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    key={video.href}
                  >
                    <img src={video.src} alt={video.alt} loading="lazy" />
                    <span className="feed-highlight-rank">
                      0{index + 1} · mais visto
                    </span>
                    <span className="feed-highlight-proof">{video.proof}</span>
                    <span className="feed-highlight-gradient" aria-hidden="true" />
                    <span className="feed-highlight-copy">
                      <small>{video.eyebrow}</small>
                      <strong>{video.title}</strong>
                      <i aria-hidden="true">↗</i>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="feed-highlights feed-highlights-youtube"
            id="youtube-mais-vistos"
          >
            <div className="feed-highlights-heading">
              <div>
                <span>Mais vistos no YouTube</span>
                <h3>Shorts e vídeos que viraram alcance.</h3>
              </div>
              <small>Visualizações públicas · {PROFILE_SNAPSHOT_DATE}</small>
            </div>

            <div className="feed-highlight-groups">
              <div className="feed-highlight-group">
                <div className="feed-highlight-group-heading">
                  <strong>Shorts</strong>
                  <small>Conteúdo rápido</small>
                </div>
                <div className="feed-highlights-grid feed-highlights-grid-vertical">
                  {mostViewedShorts.map((short, index) => (
                    <a
                      className="feed-highlight-card"
                      href={short.href}
                      target="_blank"
                      rel="noreferrer"
                      key={short.href}
                    >
                      <img src={short.src} alt={short.alt} loading="lazy" />
                      <span className="feed-highlight-rank">
                        0{index + 1} · mais visto
                      </span>
                      <span className="feed-highlight-proof">{short.proof}</span>
                      <span className="feed-highlight-gradient" aria-hidden="true" />
                      <span className="feed-highlight-copy">
                        <small>{short.eyebrow}</small>
                        <strong>{short.title}</strong>
                        <i aria-hidden="true">↗</i>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="feed-highlight-group">
                <div className="feed-highlight-group-heading">
                  <strong>Vídeos</strong>
                  <small>Conteúdo completo</small>
                </div>
                <div className="feed-highlights-grid feed-highlights-grid-landscape">
                  {mostViewedYouTubeVideos.map((video, index) => (
                    <a
                      className="feed-highlight-card"
                      href={video.href}
                      target="_blank"
                      rel="noreferrer"
                      key={video.href}
                    >
                      <img src={video.src} alt={video.alt} loading="lazy" />
                      <span className="feed-highlight-rank">
                        0{index + 1} · mais visto
                      </span>
                      <span className="feed-highlight-proof">{video.proof}</span>
                      <span className="feed-highlight-gradient" aria-hidden="true" />
                      <span className="feed-highlight-copy">
                        <small>{video.eyebrow}</small>
                        <strong>{video.title}</strong>
                        <i aria-hidden="true">↗</i>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="feed-grid">
            {instagramPosts.map((post) => (
              <a
                className={post.className}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                key={post.href}
              >
                <img src={post.src} alt={post.alt} loading="lazy" />
                <div className="feed-card-gradient" aria-hidden="true" />
                <span className="feed-card-type">{post.type}</span>
                <div className="feed-card-copy">
                  <small>{post.eyebrow}</small>
                  <h3>{post.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="audience" id="audiencia">
          <div className="audience-inner section-shell">
            <div className="audience-heading">
              <p className="section-label section-label-light">
                03 — Quem acompanha o @judice007
              </p>
              <h2>
                Uma comunidade que
                <span>já faz parte da história.</span>
              </h2>
              <p>
                Nos últimos 30 dias, o conteúdo alcançou quase 47 mil contas,
                com os Reels levando o Judice007 principalmente para quem ainda
                não seguia o perfil.
              </p>
            </div>

            <div className="audience-dashboard">
              <article className="insights-card data-card">
                <div className="card-topline">
                  <span>Desempenho no Instagram</span>
                  <small>Últimos 30 dias · {PROFILE_SNAPSHOT_DATE}</small>
                </div>

                <div className="insights-kpis">
                  <div>
                    <small>Visualizações</small>
                    <strong>67.866</strong>
                  </div>
                  <div>
                    <small>Contas alcançadas</small>
                    <strong>46.967</strong>
                  </div>
                  <div>
                    <small>Interações</small>
                    <strong>2,5 mil</strong>
                  </div>
                  <div>
                    <small>Seguidores líquidos</small>
                    <strong>+38</strong>
                  </div>
                </div>

                <div className="insights-detail-grid">
                  <div className="insights-source">
                    <div>
                      <span>Descoberta</span>
                      <strong>87,6%</strong>
                      <small>das visualizações vieram de não seguidores</small>
                    </div>
                    <div
                      className="insights-source-bar"
                      aria-label="87,6% de não seguidores e 12,4% de seguidores"
                    >
                      <i aria-hidden="true" />
                    </div>
                    <p>
                      <span>Não seguidores · 87,6%</span>
                      <span>Seguidores · 12,4%</span>
                    </p>
                  </div>

                  <div className="content-performance">
                    <span>Visualizações por formato</span>
                    <div>
                      <p>
                        <span>Reels</span>
                        <strong>60 mil</strong>
                      </p>
                      <i style={{ "--bar": "100%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <p>
                        <span>Stories</span>
                        <strong>7,7 mil</strong>
                      </p>
                      <i style={{ "--bar": "12.8%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <p>
                        <span>Posts</span>
                        <strong>449</strong>
                      </p>
                      <i style={{ "--bar": "1%" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>

                <div className="insights-profile-activity">
                  <p>
                    <strong>383</strong>
                    <span>visitas ao perfil</span>
                  </p>
                  <p>
                    <strong>7</strong>
                    <span>toques no link da bio</span>
                  </p>
                  <p>
                    <strong>2.939</strong>
                    <span>seguidores · +1,3%</span>
                  </p>
                </div>
              </article>

              <article className="gender-card data-card">
                <div className="card-topline">
                  <span>Por gênero</span>
                  <small>Instagram</small>
                </div>
                <div className="gender-chart">
                  <div className="donut" aria-hidden="true">
                    <span>56%</span>
                  </div>
                  <div className="legend">
                    <p>
                      <i className="legend-red" aria-hidden="true" />
                      <span>Mulheres</span>
                      <strong>56%</strong>
                    </p>
                    <p>
                      <i className="legend-paper" aria-hidden="true" />
                      <span>Homens</span>
                      <strong>44%</strong>
                    </p>
                  </div>
                </div>

              </article>

              <article className="age-card data-card">
                <div className="card-topline">
                  <span>Faixa etária</span>
                  <small>Distribuição</small>
                </div>
                <div className="bar-list">
                  <div>
                    <p>
                      <span>13–17</span>
                      <strong>0,2%</strong>
                    </p>
                    <i style={{ "--bar": "0.2%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>18–24</span>
                      <strong>10,6%</strong>
                    </p>
                    <i style={{ "--bar": "10.6%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>25–34</span>
                      <strong>59,7%</strong>
                    </p>
                    <i style={{ "--bar": "59.7%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>35–44</span>
                      <strong>18,6%</strong>
                    </p>
                    <i style={{ "--bar": "18.6%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>45–54</span>
                      <strong>7,4%</strong>
                    </p>
                    <i style={{ "--bar": "7.4%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>55–64</span>
                      <strong>2,6%</strong>
                    </p>
                    <i style={{ "--bar": "2.6%" } as React.CSSProperties} />
                  </div>
                  <div>
                    <p>
                      <span>65+</span>
                      <strong>0,9%</strong>
                    </p>
                    <i style={{ "--bar": "0.9%" } as React.CSSProperties} />
                  </div>
                </div>

              </article>

              <article className="location-card data-card">
                <div className="card-topline">
                  <span>Principais localizações</span>
                  <small>Países</small>
                </div>
                <ol>
                  <li>
                    <span>Brasil</span>
                    <strong>96,5%</strong>
                  </li>
                  <li>
                    <span>Estados Unidos</span>
                    <strong>1,0%</strong>
                  </li>
                  <li>
                    <span>Portugal</span>
                    <strong>0,4%</strong>
                  </li>
                  <li>
                    <span>Espanha</span>
                    <strong>0,3%</strong>
                  </li>
                  <li>
                    <span>Nigéria</span>
                    <strong>0,1%</strong>
                  </li>
                </ol>
              </article>

              <article className="activity-card data-card">
                <div className="card-topline">
                  <span>Horários de atividade</span>
                  <small>Fuso horário BRT</small>
                </div>
                <div className="activity-layout">
                  <div
                    className="activity-chart"
                    aria-label="Atividade dos seguidores ao longo do dia, com maior concentração às 18 horas"
                  >
                    {[
                      ["0h", "42%"],
                      ["3h", "14%"],
                      ["6h", "34%"],
                      ["9h", "76%"],
                      ["12h", "95%"],
                      ["15h", "96%"],
                      ["18h", "100%"],
                      ["21h", "88%"],
                    ].map(([time, height]) => (
                      <div key={time}>
                        <i
                          style={
                            { "--activity": height } as React.CSSProperties
                          }
                        />
                        <small>{time}</small>
                      </div>
                    ))}
                  </div>
                  <div className="activity-summary">
                    <span>Melhor janela</span>
                    <strong>18h–21h</strong>
                    <p>Seguidores mais ativos às segundas, terças e quintas.</p>
                    <small>Dados dos últimos 30 dias</small>
                  </div>
                </div>
              </article>

              <article className="tiktok-audience-card data-card">
                <div className="card-topline">
                  <span>Audiência no TikTok</span>
                  <small>{TIKTOK_SNAPSHOT_PERIOD}</small>
                </div>

                <div className="tiktok-performance-kpis">
                  <div>
                    <small>Visualizações de publicações</small>
                    <strong>1,7 mil</strong>
                  </div>
                  <div>
                    <small>Visualizações de perfil</small>
                    <strong>23</strong>
                  </div>
                  <div>
                    <small>Curtidas</small>
                    <strong>25</strong>
                  </div>
                  <div>
                    <small>Compartilhamentos</small>
                    <strong>4</strong>
                  </div>
                </div>

                <div className="tiktok-audience-layout">
                  <div className="tiktok-follower-kpis">
                    <div>
                      <small>Total de seguidores</small>
                      <strong>8.705</strong>
                    </div>
                    <div>
                      <small>Seguidores líquidos</small>
                      <strong>−14</strong>
                      <span>no período analisado</span>
                    </div>
                  </div>

                  <div className="tiktok-gender">
                    <span>Gênero dos seguidores</span>
                    <div>
                      <p>
                        <span>Masculino</span>
                        <strong>64%</strong>
                      </p>
                      <i
                        className="tiktok-gender-male"
                        aria-label="64% masculino"
                      />
                    </div>
                    <div>
                      <p>
                        <span>Feminino</span>
                        <strong>36%</strong>
                      </p>
                      <i
                        className="tiktok-gender-female"
                        aria-label="36% feminino"
                      />
                    </div>
                  </div>

                  <div className="tiktok-activity-peaks">
                    <div>
                      <small>Pico dos seguidores</small>
                      <strong>20h</strong>
                      <span>808 ativos · últimos 7 dias</span>
                    </div>
                    <div>
                      <small>Pico dos espectadores</small>
                      <strong>12h–13h</strong>
                      <span>segunda-feira · 63 ativos</span>
                    </div>
                  </div>
                </div>

                <div className="tiktok-viewer-overview">
                  <div className="tiktok-viewer-kpis">
                    <span>Espectadores · 28 dias</span>
                    <div>
                      <p>
                        <small>Total</small>
                        <strong>1,6 mil</strong>
                      </p>
                      <p>
                        <small>Novos</small>
                        <strong>1,5 mil</strong>
                      </p>
                    </div>
                    <p className="tiktok-top-content">
                      <span>Publicação mais vista no período</span>
                      <strong>421 visualizações</strong>
                    </p>
                  </div>

                  <div className="tiktok-viewer-gender">
                    <span>Gênero dos espectadores</span>
                    {[
                      ["Masculino", "67%", "viewer-male"],
                      ["Feminino", "32%", "viewer-female"],
                      ["Outro", "1%", "viewer-other"],
                    ].map(([label, value, className]) => (
                      <div key={label}>
                        <p>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </p>
                        <i className={className} aria-hidden="true" />
                      </div>
                    ))}
                  </div>

                  <div className="tiktok-traffic-source">
                    <span>Origem de tráfego</span>
                    {[
                      ["Pesquisar", "83,4%", "83.4%"],
                      ["Para você", "14,7%", "14.7%"],
                      ["Perfil pessoal", "1,4%", "1.4%"],
                      ["Som", "0,4%", "0.4%"],
                      ["Seguindo", "0,1%", "0.1%"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <p>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </p>
                        <i
                          style={{ "--traffic": width } as React.CSSProperties}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="youtube-audience-card data-card">
                <div className="card-topline">
                  <span>Audiência no YouTube</span>
                  <small>Dados recentes e históricos · {YOUTUBE_SNAPSHOT_DATE}</small>
                </div>

                <div className="youtube-lifetime-overview">
                  <div className="youtube-lifetime-heading">
                    <span>Canal em números</span>
                    <small>Todo o período</small>
                  </div>

                  <div className="youtube-lifetime-kpis">
                    <div>
                      <small>Inscritos</small>
                      <strong>3.054</strong>
                    </div>
                    <div>
                      <small>Visualizações</small>
                      <strong>1,4 mi</strong>
                    </div>
                    <div>
                      <small>Marcações “Gostei”</small>
                      <strong>48,3 mil</strong>
                    </div>
                    <div>
                      <small>Comentários</small>
                      <strong>1,8 mil</strong>
                    </div>
                  </div>

                  <div className="youtube-lifetime-details">
                    <div className="youtube-lifetime-ranking">
                      <span>Shorts de maior alcance</span>
                      {[
                        ["Vulcão em erupção", "351,8 mil"],
                        ["Nanananananana", "121,4 mil"],
                        ["Ficar preso no elevador", "47,8 mil"],
                      ].map(([title, views]) => (
                        <p key={title}>
                          <small>{title}</small>
                          <strong>{views}</strong>
                        </p>
                      ))}
                    </div>

                    <div className="youtube-lifetime-ranking">
                      <span>Vídeos em alta</span>
                      {[
                        ["Comprar EA Sports FC 24", "13,1 mil"],
                        ["The Hunter não abre", "12,8 mil"],
                        ["Baixar Point Blank", "11,6 mil"],
                      ].map(([title, views]) => (
                        <p key={title}>
                          <small>{title}</small>
                          <strong>{views}</strong>
                        </p>
                      ))}
                    </div>

                    <div className="youtube-lifetime-audience">
                      <span>Público-alvo histórico</span>
                      <div>
                        <small>Idade</small>
                        <p>18–24 · 19%</p>
                        <p>25–34 · 31%</p>
                        <p>35–44 · 25%</p>
                      </div>
                      <div>
                        <small>Gênero</small>
                        <p>Masculino · 75%</p>
                        <p>Feminino · 24%</p>
                        <p>Especificado · 0%</p>
                      </div>
                      <div>
                        <small>Região</small>
                        <p>Brasil · 93%</p>
                        <p>Portugal · 2%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="youtube-period-heading">
                  <span>Desempenho recente</span>
                  <small>Últimos 28 dias</small>
                </div>

                <div className="youtube-audience-kpis">
                  <div>
                    <small>Novos inscritos</small>
                    <strong>+9</strong>
                  </div>
                  <div>
                    <small>Tempo de não inscritos</small>
                    <strong>99,6%</strong>
                  </div>
                  <div>
                    <small>Novos espectadores</small>
                    <strong>92,6%</strong>
                  </div>
                  <div>
                    <small>Audiência no Brasil</small>
                    <strong>90,4%</strong>
                  </div>
                </div>

                <div className="youtube-audience-grid">
                  <div className="youtube-demographics">
                    <span>Perfil da audiência</span>
                    <div className="youtube-gender-bars">
                      <div>
                        <p>
                          <span>Masculino</span>
                          <strong>60,1%</strong>
                        </p>
                        <i className="youtube-gender-male" aria-hidden="true" />
                      </div>
                      <div>
                        <p>
                          <span>Feminino</span>
                          <strong>39,9%</strong>
                        </p>
                        <i className="youtube-gender-female" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="youtube-age-bars">
                      <small>Idade</small>
                      {[
                        ["13–17", "29,9%", "29.9%"],
                        ["18–24", "1,3%", "1.3%"],
                        ["25–34", "33,2%", "33.2%"],
                        ["35–44", "33,1%", "33.1%"],
                        ["45–54", "2,5%", "2.5%"],
                        ["55–64", "0,0%", "0%"],
                      ].map(([label, value, width]) => (
                        <div key={label}>
                          <p>
                            <span>{label}</span>
                            <strong>{value}</strong>
                          </p>
                          <i
                            style={{ "--youtube-bar": width } as React.CSSProperties}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="youtube-devices">
                    <span>Dispositivos</span>
                    {[
                      ["Celular", "68,5%", "68.5%"],
                      ["Computador", "19,6%", "19.6%"],
                      ["TV", "9,5%", "9.5%"],
                      ["Tablet", "2,6%", "2.6%"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <p>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </p>
                        <i
                          style={{ "--youtube-bar": width } as React.CSSProperties}
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                    <p className="youtube-region-note">
                      <span>Região</span>
                      <strong>Brasil 90,4% · Portugal 0,1%</strong>
                    </p>
                  </div>

                  <div className="youtube-behavior">
                    <span>Comportamento de visualização</span>
                    <div>
                      <p>
                        <span>Novos espectadores</span>
                        <strong>92,6%</strong>
                      </p>
                      <i style={{ "--youtube-bar": "92.6%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <p>
                        <span>Espectadores casuais</span>
                        <strong>7,3%</strong>
                      </p>
                      <i style={{ "--youtube-bar": "7.3%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <p>
                        <span>Espectadores frequentes</span>
                        <strong>&lt; 0,1%</strong>
                      </p>
                      <i style={{ "--youtube-bar": "0.1%" } as React.CSSProperties} />
                    </div>

                    <div className="youtube-format-fit">
                      <small>Formatos consumidos</small>
                      <p>
                        <span>Vídeos</span>
                        <span>Shorts</span>
                        <span>Lives</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="youtube-content-overview">
                  <div className="youtube-content-heading">
                    <span>Desempenho de conteúdo</span>
                    <small>Últimos 28 dias · 1 Short publicado</small>
                  </div>

                  <div className="youtube-content-summary">
                    <div>
                      <small>Visualizações</small>
                      <strong>11,0 mil</strong>
                    </div>
                    <div>
                      <small>Tempo de exibição</small>
                      <strong>51,8 h</strong>
                    </div>
                    <div>
                      <small>Novos inscritos</small>
                      <strong>+9</strong>
                    </div>
                    <div>
                      <small>Visualizações · 7 dias</small>
                      <strong>2,4 mil</strong>
                    </div>
                  </div>

                  <div className="youtube-content-grid">
                    <div className="youtube-content-kpis">
                      <div>
                        <small>Público mensal</small>
                        <strong>5,1 mil</strong>
                      </div>
                      <div>
                        <small>Shorts</small>
                        <strong>10,5 mil</strong>
                        <span>visualizações · +32 inscritos</span>
                      </div>
                      <div>
                        <small>Vídeos</small>
                        <strong>476</strong>
                        <span>visualizações · +1 inscrito</span>
                      </div>
                    </div>

                    <div className="youtube-format-overlap">
                      <span>Espectadores por formato</span>
                      {[
                        ["Somente Shorts", "82%", "82%"],
                        ["Somente vídeos", "17%", "17%"],
                        ["Ambos", "1%", "1%"],
                      ].map(([label, value, width]) => (
                        <div key={label}>
                          <p>
                            <span>{label}</span>
                            <strong>{value}</strong>
                          </p>
                          <i
                            style={{ "--youtube-bar": width } as React.CSSProperties}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="youtube-discovery">
                      <span>Como encontram o canal</span>
                      {[
                        ["Pesquisa do YouTube", "88,3%", "88.3%"],
                        ["Feed dos Shorts", "8,1%", "8.1%"],
                        ["Externa", "1,0%", "1%"],
                        ["Páginas do canal", "1,0%", "1%"],
                        ["Outros", "1,7%", "1.7%"],
                      ].map(([label, value, width]) => (
                        <div key={label}>
                          <p>
                            <span>{label}</span>
                            <strong>{value}</strong>
                          </p>
                          <i
                            style={{ "--youtube-bar": width } as React.CSSProperties}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="youtube-top-content">
                    <span>Conteúdo principal · visualizações</span>
                    <ol>
                      {[
                        ["Nanananananana 🎵 eu tô malucooooo", "2,8 mil"],
                        ["Explosão de botijão de gás", "2,3 mil"],
                        ["Ficar preso no elevador", "1,8 mil"],
                        ["Roubo na loja da Apple", "339"],
                        ["Maior piscina do mundo", "321"],
                      ].map(([title, views]) => (
                        <li key={title}>
                          <span>{title}</span>
                          <strong>{views}</strong>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="youtube-remix-highlight">
                    <div>
                      <small>Destaque de remix</small>
                      <strong>Nanananananana 🎵 eu to malucooooo</strong>
                    </div>
                    <p>
                      <strong>16,7 mil</strong>
                      <span>visualizações de remix</span>
                    </p>
                    <p>
                      <strong>18</strong>
                      <span>remixes do destaque</span>
                    </p>
                    <p>
                      <strong>242</strong>
                      <span>remixes totais</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="partners section-shell" id="parcerias">
          <div className="section-heading">
            <div>
              <p className="section-label">04 — Já criamos juntos</p>
              <h2>
                Parcerias que entraram
                <span>no meu universo.</span>
              </h2>
            </div>
            <p>
              Marcas e experiências que encontraram no meu jeito uma forma
              autêntica de chegar até as pessoas.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner) =>
              partner.kind === "reel" ? (
                <a
                  className={partner.className}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Assistir ao conteúdo ${partner.title} no Instagram`}
                  key={partner.src}
                >
                  <img src={partner.src} alt={partner.alt} loading="lazy" />
                  <span className="partner-reel-play" aria-hidden="true">
                    ▶
                  </span>
                  <span className="partner-reel-copy">
                    <small>{partner.eyebrow}</small>
                    <strong>{partner.title}</strong>
                    <i>Ver Reel ↗</i>
                  </span>
                </a>
              ) : (
                <figure className={partner.className} key={partner.src}>
                  <img src={partner.src} alt={partner.alt} loading="lazy" />
                </figure>
              ),
            )}
          </div>
        </section>

        <section className="social section-shell" id="redes">
          <div className="social-heading">
            <p className="section-label">05 — Acompanha de perto</p>
            <h2>
              A vida acontece.
              <span>O conteúdo continua.</span>
            </h2>
          </div>

          <div className="social-grid">
            <article className="social-card social-card-instagram">
              <div className="social-card-index">01</div>
              <div className="tiktok-feature instagram-feature">
                <div className="tiktok-profile instagram-profile">
                  <img
                    src="/instagram/profile.jpg"
                    alt="Foto do perfil de Felipe Júdice no Instagram"
                    width="1080"
                    height="1080"
                    loading="lazy"
                  />
                  <div>
                    <span>Perfil público · {PROFILE_SNAPSHOT_DATE}</span>
                    <strong>Felipe Júdice</strong>
                    <small>Humor, gastronomia, futebol e viagens.</small>
                  </div>
                  <div className="tiktok-numbers">
                    <p>
                      <strong>2.939</strong>
                      <span>seguidores</span>
                    </p>
                    <p>
                      <strong>1.142</strong>
                      <span>seguindo</span>
                    </p>
                  </div>
                </div>

                <div className="tiktok-covers instagram-covers">
                  <a
                    href="https://www.instagram.com/reel/CtKoCsFAHYB/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Reel de humor gamer no Instagram"
                  >
                    <img
                      src="/instagram/mais-visto-gamer.webp"
                      alt="Felipe Júdice em Reel de humor gamer"
                      loading="lazy"
                    />
                    <span>01</span>
                  </a>
                  <a
                    href="https://www.instagram.com/reel/DX79VJUxHSx/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Reel Cadê o meu cavalo no Instagram"
                  >
                    <img
                      src="/instagram/mais-visto-cavalo.webp"
                      alt="Felipe Júdice reagindo a um cavalo em Reel de humor"
                      loading="lazy"
                    />
                    <span>02</span>
                  </a>
                  <a
                    href="https://www.instagram.com/judice007/reel/DYN7YyOxgPV/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Copa chegando, resenha começando no Instagram"
                  >
                    <img
                      src="/instagram/copa-chegando.jpg"
                      alt="Capa do Reel sobre a chegada da Copa"
                      loading="lazy"
                    />
                    <span>03</span>
                  </a>
                </div>
              </div>

              <div className="social-card-caption">
                <span>Instagram</span>
                <strong>@judice007</strong>
                <a
                  href="https://www.instagram.com/judice007/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir o Instagram de Felipe Júdice"
                >
                  ↗
                </a>
              </div>
            </article>

            <article className="social-card social-card-youtube">
              <div className="social-card-index">02</div>
              <div className="youtube-feature">
                <div className="youtube-profile">
                  <img
                    src="/youtube/profile.jpg"
                    alt="Imagem do canal Judice007 no YouTube"
                    width="160"
                    height="160"
                    loading="lazy"
                  />
                  <div>
                    <span>Canal público · {PROFILE_SNAPSHOT_DATE}</span>
                    <strong>Judice007</strong>
                    <small>Futebol, games, tecnologia e diversão.</small>
                  </div>
                  <div className="youtube-numbers">
                    <p>
                      <strong>3.054</strong>
                      <span>inscritos</span>
                    </p>
                    <p>
                      <strong>726</strong>
                      <span>vídeos</span>
                    </p>
                  </div>
                </div>

                <div className="youtube-covers">
                  <a
                    href="https://www.youtube.com/watch?v=9P7OOl9Q8WE"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir EA Play Pro 2026 no YouTube"
                    className="youtube-cover-main"
                  >
                    <img
                      src="/youtube/ea-play-pro-2026.webp"
                      alt="Capa do vídeo EA Play Pro 2026"
                      loading="lazy"
                    />
                    <span>EA Play Pro 2026</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Zifblk9BSEA"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Tem Neymar na Copa no YouTube"
                  >
                    <img
                      src="/youtube/neymar-na-copa.webp"
                      alt="Capa do vídeo Tem Neymar na Copa"
                      loading="lazy"
                    />
                    <span>Neymar na Copa</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=XoSZHOnx5nk"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Minha convocação para a Copa no YouTube"
                  >
                    <img
                      src="/youtube/minha-convocacao.webp"
                      alt="Capa do vídeo Minha convocação para a Copa"
                      loading="lazy"
                    />
                    <span>Minha convocação</span>
                  </a>
                </div>
              </div>

              <div className="social-card-caption">
                <span>YouTube</span>
                <strong>@Judice007</strong>
                <a
                  href="https://www.youtube.com/@Judice007"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir o canal Judice007 no YouTube"
                >
                  ↗
                </a>
              </div>
            </article>

            <article className="social-card social-card-tiktok">
              <div className="social-card-index">03</div>
              <div className="tiktok-feature">
                <div className="tiktok-profile">
                  <img
                    src="/tiktok/profile.jpg"
                    alt="Foto do perfil de Felipe Júdice no TikTok"
                    width="1080"
                    height="1080"
                    loading="lazy"
                  />
                  <div>
                    <span>Perfil público · {PROFILE_SNAPSHOT_DATE}</span>
                    <strong>Felipe Júdice</strong>
                    <small>
                      Conteúdo da vida real para vocês.
                    </small>
                  </div>
                  <div className="tiktok-numbers">
                    <p>
                      <strong>8.705</strong>
                      <span>seguidores</span>
                    </p>
                    <p>
                      <strong>105,6 mil</strong>
                      <span>curtidas</span>
                    </p>
                  </div>
                </div>

                <div className="tiktok-covers">
                  <a
                    href="https://www.tiktok.com/@judice007/video/6830217627496025350"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Literalmente nada no TikTok"
                  >
                    <img
                      src="/tiktok/mais-visto-nada.jpg"
                      alt="Capa do TikTok Literalmente nada"
                      loading="lazy"
                    />
                    <span>01</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@judice007/video/6842698545292692741"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir Stonks no TikTok"
                  >
                    <img
                      src="/tiktok/mais-visto-stonks.jpg"
                      alt="Capa do TikTok Stonks"
                      loading="lazy"
                    />
                    <span>02</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@judice007/video/7638788886004534535"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Assistir vídeo sobre troca de figurinhas em Angra no TikTok"
                  >
                    <img
                      src="/tiktok/figurinhas-em-angra.webp"
                      alt="Capa do TikTok sobre troca de figurinhas em Angra"
                      loading="lazy"
                    />
                    <span>03</span>
                  </a>
                </div>
              </div>

              <div className="social-card-caption">
                <span>TikTok</span>
                <strong>@judice007</strong>
                <a
                  href="https://www.tiktok.com/@judice007"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir o TikTok de Felipe Júdice"
                >
                  ↗
                </a>
              </div>
            </article>

            <article className="social-card social-card-x">
              <div className="social-card-index">04</div>
              <a
                className="x-feature"
                href="https://x.com/FJudice007"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir o perfil de Felipe Júdice no X"
              >
                <span className="x-mark" aria-hidden="true">
                  X
                </span>
                <span className="x-profile-copy">
                  <small>Perfil oficial no X</small>
                  <strong>@FJudice007</strong>
                  <span>Felipe Júdice no X, em um link direto e fácil de encontrar.</span>
                </span>
                <span className="x-profile-cta">
                  Visitar perfil <i aria-hidden="true">↗</i>
                </span>
              </a>

              <div className="social-card-caption">
                <span>X (Twitter)</span>
                <strong>@FJudice007</strong>
                <a
                  href="https://x.com/FJudice007"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir o X de Felipe Júdice"
                >
                  ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-grain" aria-hidden="true" />
          <p className="section-label section-label-light">
            06 — Vamos criar juntos?
          </p>
          <h2>
            Bora colocar sua marca
            <span>nessa conversa?</span>
          </h2>
          <p>
            Se a sua marca combina com o meu universo, vamos pensar em uma
            parceria verdadeira, criativa e com a cara de quem acompanha.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="https://wa.me/5524998449254"
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-outline"
              href="https://www.instagram.com/judice007/"
              target="_blank"
              rel="noreferrer"
            >
              @judice007 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-meta">
            <span>Angra dos Reis — RJ</span>
            <a href="tel:+5524998449254">(24) 99844-9254</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-symbol" aria-hidden="true">
            007
          </span>
          <span className="brand-copy">
            <strong>Felipe Júdice</strong>
            <small>creator media kit</small>
          </span>
        </a>
        <span>Influencer & criador de conteúdo</span>
        <span>© 2026 Felipe Júdice</span>
      </footer>
    </>
  );
}
