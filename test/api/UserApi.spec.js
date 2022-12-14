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
    instance = new VerbwireApiDocumentation.UserApi();
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

  describe('UserApi', function() {
    describe('nftUserOpsAllowListSharesForAddressPost', function() {
      it('should call nftUserOpsAllowListSharesForAddressPost successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsAllowListSharesForAddressPost
        //instance.nftUserOpsAllowListSharesForAddressPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsContractPaymentDetailsPost', function() {
      it('should call nftUserOpsContractPaymentDetailsPost successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsContractPaymentDetailsPost
        //instance.nftUserOpsContractPaymentDetailsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsDeployedContractsGet', function() {
      it('should call nftUserOpsDeployedContractsGet successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsDeployedContractsGet
        //instance.nftUserOpsDeployedContractsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsIpfsUploadsGet', function() {
      it('should call nftUserOpsIpfsUploadsGet successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsIpfsUploadsGet
        //instance.nftUserOpsIpfsUploadsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsNftsMintedGet', function() {
      it('should call nftUserOpsNftsMintedGet successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsNftsMintedGet
        //instance.nftUserOpsNftsMintedGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsPayeeAtIndexPost', function() {
      it('should call nftUserOpsPayeeAtIndexPost successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsPayeeAtIndexPost
        //instance.nftUserOpsPayeeAtIndexPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsTransactionDetailsPost', function() {
      it('should call nftUserOpsTransactionDetailsPost successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsTransactionDetailsPost
        //instance.nftUserOpsTransactionDetailsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nftUserOpsUserCollectionContractDetailsPost', function() {
      it('should call nftUserOpsUserCollectionContractDetailsPost successfully', function(done) {
        //uncomment below and update the code to test nftUserOpsUserCollectionContractDetailsPost
        //instance.nftUserOpsUserCollectionContractDetailsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
