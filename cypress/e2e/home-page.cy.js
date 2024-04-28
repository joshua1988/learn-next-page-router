describe('카운터 앱', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('인덱스 페이지에 진입하면 카운터가 0으로 설정되어 있다', () => {
		cy.getByCy('count').contains('0');
	});

	it('+ 버튼을 누르면 카운트 값이 1 증가한다', () => {
		cy.get('#plus-button').click();
		cy.get('[data-cy=count]').contains(1);
	});

	// TODO: 마이너스 버튼 눌렀을 떄 카운트가 1이 감소되는 시나리오를 작성해 보세요.
});
