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
import InlineResponse2009Transfers from './InlineResponse2009Transfers';

/**
* The InlineResponse2009 model module.
* @module model/InlineResponse2009
* @version 1.0.0
*/
export default class InlineResponse2009 {
    /**
    * Constructs a new <code>InlineResponse2009</code>.
    * @alias module:model/InlineResponse2009
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2009} obj Optional instance to populate.
    * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009();
                        
            
            if (data.hasOwnProperty('transfers')) {
                obj['transfers'] = InlineResponse2009Transfers.constructFromObject(data['transfers']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse2009Transfers} transfers
    */
    'transfers' = undefined;




}
