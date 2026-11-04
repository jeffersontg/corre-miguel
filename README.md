# Corre, Miguel!

Jogo de corrida no estilo *endless runner* (3 pistas) em que o Miguel foge da Fran, a supervisora, pelo Colégio Karina Martins. O Arthur ajuda jogando chocolate para dar turbo.

Protótipo em HTML + [three.js](https://threejs.org/) r128 — roda direto no navegador do celular.

## Como jogar

- Deslize para os lados para trocar de pista
- Deslize para cima para pular e para baixo para deslizar
- Pegue o chocolate do Arthur para ganhar turbo
- Aos **100 pontos**: fase bônus de chute a gol, com o Arthur no gol
- Aos **300 pontos**: cantina da Tia Irani — derrube 3 latas com a bolinha de tênis e ganhe uma mini pizza

No computador, use as setas do teclado (ou W A S D e espaço).

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

Settings → Pages → *Deploy from a branch* → branch `main`, pasta `/ (root)`.
O jogo fica em `https://<seu-usuario>.github.io/corre-miguel/`.

No celular, abra o link no Chrome e toque em **⋮ → Adicionar à tela inicial** para instalar com ícone.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | O jogo inteiro (cenário, personagens, fases bônus, sons) |
| `three.min.js` | three.js r128, incluído para não depender de CDN |
| `manifest.webmanifest` | Nome, ícone e tela cheia ao instalar no celular |
| `icons/` | Ícones do app |

> As fotos de referência dos personagens **não** fazem parte deste repositório.
