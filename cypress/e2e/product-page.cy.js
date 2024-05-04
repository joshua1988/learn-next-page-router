const { PRODUCTS_3개 } = require('../fixture/products');

describe('상품 목록 페이지', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('페이지에 접속하면 상품 목록이 표시된다.', () => {
		// cy.get('a').should('be.visible')
		cy.getByCy('product').should('be.visible');
	});

	it('페이지 상단의 Cart 메뉴를 클릭하면 장바구니 페이지로 이동한다.', () => {
		cy.getByCy('cart-menu').click('');
		cy.getByCy('cart-header').should('be.visible');
	});

	it('상품을 클릭하면 상품 상세 페이지로 이동한다.', () => {
		cy.getByCy('product').first().click();
		cy.url().should('include', '/products/');
	});

	it('상품의 개수가 3개면 목록에 3개가 노출되어야 한다.', () => {
		cy.intercept('/products', PRODUCTS_3개).as('getProducts');
		cy.visit('/');
		cy.wait('@getProducts');

		cy.getByCy('product').should('have.length', 3);
	});
});
