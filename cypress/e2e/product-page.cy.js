const { THREE_PRODUCT_ITEMS } = require('../fixtures');

describe('상품 목록 페이지', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // 첫 번째 테스트 시나리오
  it('페이지에 진입하면 상품 목록이 표시된다', () => {
    cy.get('[data-cy=product-item]').should('be.visible');
    // cy.getByCy('product-item').should('not.be.visible');
  });

  // 두 번째 테스트 시나리오
  it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다', () => {
    // cy.get('[data-cy').click();
    // prepare - 준비
    // cy.visit();

    // action - 인터렉션
    cy.getByCy('cart-link').click();

    // assertion - 보장
    cy.url().should('include', '/cart');
    // cy.get('[data-cy=cart-header]').should('be.visible');
    cy.getByCy('cart-header').should('be.visible');
  });

  // 세 번째 테스트 시나리오
  it('상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다', () => {
    // 1. prepare
    // cy.visit('/')

    // 2. action
    cy.getByCy('product-item').first().click();

    // 3. assertion
    cy.url().should('include', '/products/');
  });

  // 네 번째 테스트 시나리오 - API 모킹
  it.only('상품 목록이 3개면 화면에 3개 상품이 표시된다', () => {
    // cy.visit('/');
    // prepare
    cy.intercept('/products', THREE_PRODUCT_ITEMS).as('getProducts');
    cy.visit('/');
    cy.wait('@getProducts');

    // assertion
    cy.getByCy('product-item').should('have.length', 3);
  });
});
