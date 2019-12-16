describe("Job search application", () => {
  it("Allows searching and favoriting jobs after log in", () => {

    cy.server();
    cy.route({
      method: "GET",
      url: "**/jobs/**",
      response: 'fixture:jobs.json'
    });

    cy.visit("localhost:3000/");
    cy.contains('Search Get on Board!');

    // Check Job list.
    cy.get('input.searchBox').type('react').blur();
    cy.contains('Desarrollador React Native'); // Job #2

    // See the details of first job, check other job data not shown
    cy.get(':nth-child(1) > .middle > .header').click(); // Job #1
    cy.contains('Job description');
    cy.get('Desarrollador React Native').should('not.exist');

    // Go back, now log in
    cy.get('.primary').click();
    cy.get('input.emailSignIn').focus().type('mlabarca@outlook.com');
    cy.get('.secondary').click();
    cy.contains('You are logged in as mlabarca@outlook.com.');

    // Favorite
    cy.route({
      method: "POST",
      url: "**/favorites/create",
      response: {id: 1}
    });
    cy.get(':nth-child(1) > .middle > .extra > .outline').click();
    cy.get(':nth-child(1) > .middle > .extra > .outline').should('not.exist');
    cy.get(':nth-child(1) > .middle > .extra > .heart').should('exist');

    // Unfavorite
    cy.route({
      method: "DELETE",
      url: "**/favorites/delete",
      response: {}
    });
    cy.get(':nth-child(1) > .middle > .extra > .heart').click();
     cy.get(':nth-child(1) > .middle > .extra > .outline').should('exist');

  });
});
