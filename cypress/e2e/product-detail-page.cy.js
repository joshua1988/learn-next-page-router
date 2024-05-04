describe('상품 상세 페이지', () => {
	it('페이지에 진입하면 상품 이름, 이미지, 가격이 표시된다.', () => {
		cy.visit('/products/0');
		cy.getByCy('product-name').should('be.visible');
		cy.getByCy('product-image').should('be.visible');
		cy.getByCy('product-price').should('be.visible');
	});
});
