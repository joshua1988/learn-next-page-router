/**
 * @description data-cy 셀렉터 유틸 함수
 */
Cypress.Commands.add('getByCy', text => {
	return cy.get(`[data-cy=${text}]`);
});
