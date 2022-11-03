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
import NFTDetails from './NFTDetails';

/**
* The InlineResponse2003 model module.
* @module model/InlineResponse2003
* @version 1.0.0
*/
export default class InlineResponse2003 {
    /**
    * Constructs a new <code>InlineResponse2003</code>.
    * @alias module:model/InlineResponse2003
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2003} obj Optional instance to populate.
    * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();
                        
            
            if (data.hasOwnProperty('nft_details')) {
                obj['nft_details'] = NFTDetails.constructFromObject(data['nft_details']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NFTDetails} nft_details
    */
    'nft_details' = undefined;




}
