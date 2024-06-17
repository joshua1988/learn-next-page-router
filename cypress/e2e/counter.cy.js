describe('카운터 앱', () => {
  beforeEach(() => {
    // 현재 그룹핑된 describe 안에서의 모든 테스트 코드가 실행되기 전에 공통 로직을 실행하고 싶다면 여기에 추가하세요.
    cy.visit('http://localhost:3000');
  });

  // 첫 번째 테스트 시나리오
  it('페이지에 진입하면 카운터 앱이 정상적으로 실행된다(0이 표시된다)', () => {
    cy.get('[data-cy=counter]').click();
    cy.getByCy('counter');

    // cy.get('[data-cy=counter]').contains(0);
    cy.getByCy('counter').contains(0);
  });

  // 두 번째 테스트 시나리오
  it('플러스 버튼을 누르면 카운터가 1이 증가된다', () => {
    cy.getByCy('add-button').click();
    cy.getByCy('counter').contains(1);
  });

  // 세 번째 테스트 시나리오
  it('마이너스 버튼을 누르면 카운터가 1이 감소된다', () => {
    cy.getByCy('minus-button').click();
    cy.getByCy('counter').contains(-1);
  });
});
