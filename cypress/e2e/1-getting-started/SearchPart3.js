describe('Search component', () => {
  
    beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
      cy.get('.search-bar').should('be.visible');
    });
    it('Search with full company name' , ()=>{  
      cy.get('input[class="search-bar"]').type('Element Media');
      cy.wait(3000);
      cy.get('.company-name')
        .each(($item) => {
            cy.wrap($item).should('contain', 'Element Media');
        });
    });
    it('Search with first letter of company name' , ()=>{  
      cy.get('input[class="search-bar"]').type('I');
      cy.wait(3000);
      cy.get('.last-search-and-results .item-text')
        .each(($item) => {
            cy.wrap($item).invoke('text').should('match', /^I/);
        });
    });

    it('Search for the company in capital letters' , ()=>{  
      cy.get('input[class="search-bar"]').type('ENDEAVOR');
      cy.wait(3000);
      cy.get('.company-name').contains('Endeavor').should('be.visible');
    });

    it('Search for a company using a letter in the middle of its name' , ()=>{  
      cy.get('input[class="search-bar"]').type('A');
      cy.wait(3000);
      cy.get('.company-name').contains('Advice Technologies').should('be.visible');
    });
    
    it('Search for a company using the first three letters' , ()=>{  
      cy.get('input[class="search-bar"]').type('EXA');
      cy.wait(3000);
      cy.get('.company-name').contains('EXALT Technologies Ltd').should('be.visible');
    });
    it('Search for an input with a hyphen between words' , ()=>{  
      cy.get('input[class="search-bar"]').type('Souk-Tel');
      cy.wait(3000);
      cy.get('.company-name').contains('SoukTel').should('be.visible');
    });
    it('Search for a number ' , ()=>{  
      cy.get('input[class="search-bar"]').type('1');
      cy.wait(3000);
      cy.get('p.title-not-fround').should('be.visible');
    });

    it('Search for an input with a  symbols ', () => {
      cy.get('input[class="search-bar"]').type('@&#');
      cy.wait(3000);
      cy.get('p.title-not-fround').should('be.visible');
    });

    it('Open a topic from last history search menu', () => {
      cy.get('input[class="search-bar"]').type('front').type('{enter}');
      cy.wait(3000);
      cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
      cy.get('.item-text-button').click();
    });

    it('Remove all topics from last history search', () => {
      cy.get('input[class="search-bar"]').type('front').type('{enter}');
      cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
      cy.get('.header-last > .remove-button').click();
    });







});
