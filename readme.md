# layout_product-cards

Projeto para exibir cartões de produtos com avaliação por estrelas, seguindo metodologia BEM e usando SCSS.

## 📁 Estrutura do projeto

- SCSS modularizado:
  - `_card.scss`
  - `_stars.scss`
  - `_variables.scss`
- Blocos BEM para `product-card` e `stars`
- Fontes importadas do Google Fonts (Roboto 500)
- Imagens em `src/images`
- Empacotamento com Parcel
- Testes automatizados com Cypress + Mochawesome

## ⚙️ Testes automatizados (Cypress + Mochawesome)

- **Total de testes:** 1
- **Falhas:** 0 ❌
- **Sucessos:** 1 ✅
- **Duração total:** 5.1s

### Teste principal executado:

```js
cy.visit('http://localhost:1234'); // ou a URL do seu projeto
cy.get('[data-qa="product-card"]').should('have.length.at.least', 1);


🔗 Links importantes
Link da demonstração do projeto (cards):
https://layout-product-cards-ivanivaldo.surge.sh
(Link do seu site hospedado no Surge)

Link do relatório de testes Cypress (Mochawesome):
https://layout-product-cards-report.surge.sh/html_report/mochawesome.html
(Link direto para o relatório visual gerado pelo Mochawesome)

