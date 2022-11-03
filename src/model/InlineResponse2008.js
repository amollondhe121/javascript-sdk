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
import InlineResponse2008Transfers from './InlineResponse2008Transfers';

/**
* The InlineResponse2008 model module.
* @module model/InlineResponse2008
* @version 1.0.0
*/
export default class InlineResponse2008 {
    /**
    * Constructs a new <code>InlineResponse2008</code>.
    * @alias module:model/InlineResponse2008
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2008} obj Optional instance to populate.
    * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();
                        
            
            if (data.hasOwnProperty('transfers')) {
                obj['transfers'] = InlineResponse2008Transfers.constructFromObject(data['transfers']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse2008Transfers} transfers
    */
    'transfers' = undefined;




}