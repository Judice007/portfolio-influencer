# Felipe Júdice — Creator Media Kit

Portfólio digital de Felipe Júdice (@judice007), criado a partir do media kit
oficial. O site reúne apresentação, números de carreira, dados de audiência,
parcerias, perfis sociais e canais de contato.

## Rodar localmente

```powershell
npm.cmd ci
$env:WRANGLER_LOG_PATH = ".wrangler\wrangler.log"
node.exe node_modules\vinext\dist\cli.js dev
```

## Validar

```powershell
$env:WRANGLER_LOG_PATH = ".wrangler\wrangler.log"
node.exe node_modules\vinext\dist\cli.js build
node.exe --test tests\rendered-html.test.mjs
```

O projeto usa Next.js com vinext e mantém a configuração de hospedagem em
`.openai/hosting.json`.
