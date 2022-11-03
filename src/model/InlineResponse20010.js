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
import InlineResponse20010Transfers from './InlineResponse20010Transfers';

/**
* The InlineResponse20010 model module.
* @module model/InlineResponse20010
* @version 1.0.0
*/
export default class InlineResponse20010 {
    /**
    * Constructs a new <code>InlineResponse20010</code>.
    * @alias module:model/InlineResponse20010
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20010} obj Optional instance to populate.
    * @return {module:model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010();
                        
            
            if (data.hasOwnProperty('transfers')) {
                obj['transfers'] = InlineResponse20010Transfers.constructFromObject(data['transfers']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse20010Transfers} transfers
    */
    'transfers' = undefined;




}
