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
    instance = new VerbwireApiDocumentation.MintApi();
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

  describe('MintApi', function() {
    describe('nftMintCollectionReserveMintPost', function() {
      it('should call nftMintCollectionReserveMintPost successfully', function(done) {
        //uncomment below and update the code to test nftMintCollectionReserveMintPost
        //instance.nftMintCollectionReserveMintPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftMintCustomContractMintFromFilePost', function() {
      it('should call nftMintCustomContractMintFromFilePost successfully', function(done) {
        //uncomment below and update the code to test nftMintCustomContractMintFromFilePost
        //instance.nftMintCustomContractMintFromFilePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftMintCustomContractMintFromMetadataUrlPost', function() {
      it('should call nftMintCustomContractMintFromMetadataUrlPost successfully', function(done) {
        //uncomment below and update the code to test nftMintCustomContractMintFromMetadataUrlPost
        //instance.nftMintCustomContractMintFromMetadataUrlPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftMintQuickMintFromFilePost', function() {
      it('should call nftMintQuickMintFromFilePost successfully', function(done) {
        //uncomment below and update the code to test nftMintQuickMintFromFilePost
        //instance.nftMintQuickMintFromFilePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftMintQuickMintFromMetadataUrlPost', function() {
      it('should call nftMintQuickMintFromMetadataUrlPost successfully', function(done) {
        //uncomment below and update the code to test nftMintQuickMintFromMetadataUrlPost
        //instance.nftMintQuickMintFromMetadataUrlPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
