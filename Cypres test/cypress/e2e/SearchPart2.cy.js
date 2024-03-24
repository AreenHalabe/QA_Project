describe('Search component', () => {

  
  it('check from search bar container' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    cy.get('.search-bar-container').should('exist');
  })

  it('check the result when search on Najah company' ,()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'Najah';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.title-not-fround').should('contain' , 'Oops, No Matches Found :(');
  })

  it('check the result when search on asal company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'asal';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.company-name').should('contain' , 'ASAL Technologies');
    
  })


  it('check the result when search on exalt company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'exalt';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.company-name').should('contain' , 'EXALT Technologies Ltd.');
  })


  it('check the result when search on Adham  company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'adham';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.company-name').should('contain' , 'ADHAM Inc.');
  })

  it('check the result when search on Bisan company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'bisan';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.company-name').should('contain' , 'Bisan Systems');
  })
  it('check the result when search on Al Andalus company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'Abdalus';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.company-name').should('contain' , 'Al Andalus Software Development');
  })

  it('check the result when search on fake company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'fretelo';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.title-not-fround').should('contain' , 'Oops, No Matches Found :(');
  })

  it('check the result when search on Backend' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'Backend';
    cy.get('.search-bar').type(SearchValue);
    cy.get('.card-container').should('be.visible');
    cy.wait(3000);
    cy.get('.slider-element.backend')
      .each(($item) => {
          cy.wrap($item).should('contain', SearchValue);
      });
  })

  it('check the result when search on DBA' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'DBA';
    cy.get('.search-bar').type(SearchValue);
    cy.get('.card-container').should('be.visible');
    cy.wait(3000);
    cy.get('.slider-element.dba')
      .each(($item) => {
          cy.wrap($item).should('contain', SearchValue);
      });
  })

  it('check the result when search on fake company' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    const SearchValue = 'commit technology';
    cy.get('.search-bar').type(SearchValue);
    cy.wait(3000);
    cy.get('.title-not-fround').should('contain' , 'Oops, No Matches Found :(');
  })

  it('check the result when search on Ramallah Backend' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    cy.get('.search-bar').type('Ramallah Backend');
    cy.get('.card-container').should('be.visible');
    cy.wait(3000);
    cy.get('.slider-element.backend')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Backend');
    });
    cy.get('.card-container > .card > .head > .card-description > .company-slogan')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Ramallah');
    });
  })

  it('check the result when search on nablus mobile' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    cy.get('.search-bar').type('nablus mobile');
    cy.get('.card-container').should('be.visible');
    cy.wait(3000);
    cy.get('.slider-element.mobile')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Mobile');
    });
    cy.get('.card-container > .card > .head > .card-description > .company-slogan')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Nablus');
    });
  })


  it('check the result when search on nablus Frontend' , ()=>{
    cy.visit('https://stacksinfo.web.app');  
    cy.get('.search-bar').type('nablus frontend');
    cy.get('.card-container').should('be.visible');
    cy.wait(3000);
    cy.get('.slider-element.frontend')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Frontend');
    });
    cy.get('.card-container > .card > .head > .card-description > .company-slogan')
    .each(($item) => {
      cy.wrap($item).should('contain', 'Nablus');
    });
  })




})
