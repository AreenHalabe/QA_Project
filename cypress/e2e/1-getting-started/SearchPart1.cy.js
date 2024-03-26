describe('Search component', () => {
    it('check from search bar container' , ()=>{
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('exist');
    })

    it('check from search on nablus company should display 4 company',()=>{
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('exist');
        const SearchValue = 'Nablus';
        cy.get('.search-bar').type(SearchValue);
        cy.get('.card-container').should('be.visible');
        cy.wait(3000);
        cy.get('.company-slogan')
       .each(($item) => {
            cy.wrap($item).should('contain', SearchValue);
        });

    })


    it('check from search on Ramallah company should display 8 company',()=>{
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('exist');
        const SearchValue = 'Ramallah';
        cy.get('.search-bar').type(SearchValue);
        cy.get('.card-container').should('be.visible');
        cy.wait(3000);
        cy.get('.company-slogan')
        .each(($item) => {
            cy.wrap($item).should('contain', SearchValue);
        });

    })

    it('check from search on Hebron company should display 1 company',()=>{
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('exist');
        const SearchValue = 'Hebron';
        cy.get('.search-bar').type(SearchValue);
        cy.get('.card-container').should('be.visible');
        cy.wait(3000);
        cy.get('.company-slogan')
        .each(($item) => {
            cy.wrap($item).should('contain', SearchValue);
        });

    })

    it('check from result when search on mobile',()=>{
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('exist');
        const SearchValue = 'Mobile';
        cy.get('.search-bar').type(SearchValue);
        cy.get('.card-container').should('be.visible');
        cy.wait(3000);
        cy.get('.slider-element.mobile')
        .each(($item) => {
            cy.wrap($item).should('contain', SearchValue);
        });

    })

    it('check the result when search on devOps' , ()=>{
        cy.visit('https://stacksinfo.web.app');  
        cy.get('.search-bar').should('exist');
        const SearchValue = 'DevOps';
        cy.get('.search-bar').type(SearchValue);
        cy.get('.card-container').should('be.visible');
        cy.wait(3000);
        cy.get('.slider-element.devops')
          .each(($item) => {
              cy.wrap($item).should('contain', SearchValue);
          });
      })




    
  
    


  
  
    
  
})
  