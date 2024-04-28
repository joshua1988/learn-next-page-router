describe('카운터 앱', () => {
	it('인덱스 페이지에 진입하면 카운터가 0으로 설정되어 있다.', () => {
		cy.visit('http://localhost:3000');

		cy.get('[data-cy=count]').contains('0');
	});
});
