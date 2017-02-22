describe('Bazinga Demo App, Home', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Bazinga Angular App');
  });

  it('should have and h1', function() {
    expect(element(by.tagName('h1')).getText()).toBe('Hooray! It\'s works!');
  });
});
