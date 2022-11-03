/**
 * Verbwire API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VerbwireApiDocumentation);
  }
}(this, function(expect, VerbwireApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VerbwireApiDocumentation.InlineResponse20011Collections();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20011Collections', function() {
    it('should create an instance of InlineResponse20011Collections', function() {
      // uncomment below and update the code to test InlineResponse20011Collections
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be.a(VerbwireApiDocumentation.InlineResponse20011Collections);
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be();
    });

    it('should have the property totalResults (base name: "totalResults")', function() {
      // uncomment below and update the code to test the property totalResults
      //var instane = new VerbwireApiDocumentation.InlineResponse20011Collections();
      //expect(instance).to.be();
    });

  });

}));