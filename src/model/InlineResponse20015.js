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
import Transaction from './Transaction';

/**
* The InlineResponse20015 model module.
* @module model/InlineResponse20015
* @version 1.0.0
*/
export default class InlineResponse20015 {
    /**
    * Constructs a new <code>InlineResponse20015</code>.
    * @alias module:model/InlineResponse20015
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20015} obj Optional instance to populate.
    * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20015();
                        
            
            if (data.hasOwnProperty('Transaction')) {
                obj['Transaction'] = Transaction.constructFromObject(data['Transaction']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Transaction} Transaction
    */
    'Transaction' = undefined;




}
