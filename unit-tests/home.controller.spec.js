describe('Controller: StateHomeController', function() {

  var ctrl;

  beforeEach(module('bazingaApp'));
  beforeEach(module('ui.router'));
  beforeEach(inject(function($controller) {
    ctrl = $controller('StateHomeController', {

    });
  }));

  describe('StateHomeController, checking title', function() {
    it('should have title defined', function () {
      expect(ctrl.title).toBeDefined();
    });

    it('should be defined as "home"', function() {
      expect(ctrl.title).toEqual('home');
    });
  });
});
