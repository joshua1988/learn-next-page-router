describe('상품 목록 페이지', () => {
	it('페이지에 접속하면 상품 목록이 표시된다.', () => {
		cy.visit('/');
		// cy.get('a').should('be.visible')
		cy.getByCy('product').should('be.visible');
	});
});
