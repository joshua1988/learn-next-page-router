describe('상품 상세 페이지', () => {
	beforeEach(() => {
		cy.visit('/products/0');
	});

	it('페이지에 진입하면 상품 이름, 이미지, 가격이 표시된다.', () => {
		cy.getByCy('product-name').should('be.visible');
		cy.getByCy('product-image').should('be.visible');
		cy.getByCy('product-price').should('be.visible');
	});

	it.only('[장바구니에 담기] 버튼을 누르면 선택한 상품이 담겨졌다는 시스템 얼럿 창이 뜬다.', () => {
		// prepare
		const stub = cy.stub();
		cy.on('window:alert', stub);

		// action
		cy.getByCy('product-name').then(element => {
			const name = element.text();
			// eslint-disable-next-line cypress/unsafe-to-chain-command
			cy.getByCy('add-to-cart')
				.click()
				.then(() => {
					// assert
					expect(stub.getCall(0)).to.calledWith(
						`${name}가 장바구니에 담겼습니다`,
					);
				});
		});
	});

	it('[장바구니에 담기] 버튼을 누르면 장바구니 페이지로 이동한다', () => {
		cy.getByCy('add-to-cart').click();
		cy.url().should('include', 'cart');
	});
});
