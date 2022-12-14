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

import ApiClient from '../ApiClient';
import ModelObject from './ModelObject';

/**
* The InlineResponse2008Transfers model module.
* @module model/InlineResponse2008Transfers
* @version 1.0.0
*/
export default class InlineResponse2008Transfers {
    /**
    * Constructs a new <code>InlineResponse2008Transfers</code>.
    * @alias module:model/InlineResponse2008Transfers
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2008Transfers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2008Transfers} obj Optional instance to populate.
    * @return {module:model/InlineResponse2008Transfers} The populated <code>InlineResponse2008Transfers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008Transfers();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [OneOfinlineResponse2008TransfersResultsItems]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ModelObject>} results
    */
    'results' = undefined;
    /**
    * @member {Number} page
    */
    'page' = undefined;
    /**
    * @member {Number} limit
    */
    'limit' = undefined;
    /**
    * @member {Number} totalPages
    */
    'totalPages' = undefined;
    /**
    * @member {Number} totalResults
    */
    'totalResults' = undefined;




}
