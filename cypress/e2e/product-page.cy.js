describe('상품 목록 페이지', () => {
	it('페이지에 접속하면 상품 목록이 표시된다.', () => {
		cy.visit('/');
		// cy.get('a').should('be.visible')
		cy.getByCy('product').should('be.visible');
	});

	it('페이지 상단의 Cart 메뉴를 클릭하면 장바구니 페이지로 이동한다.', () => {
		cy.visit('/');
		cy.getByCy('cart-menu').click('');
		cy.getByCy('cart-header').should('be.visible');
	});
});
