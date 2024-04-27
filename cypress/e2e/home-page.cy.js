// TODO: cypress eslint 플러그인 설치
// eslint-disable-next-line no-undef
describe('카운터 앱', () => {
	// eslint-disable-next-line no-undef
	it('인덱스 페이지에 진입하면 카운터가 0으로 설정되어 있다.', () => {
		// eslint-disable-next-line no-undef
		cy.visit('http://localhost:3000');

		// eslint-disable-next-line no-undef
		cy.get('[data-cy=count]').contains('0');
	});
});
