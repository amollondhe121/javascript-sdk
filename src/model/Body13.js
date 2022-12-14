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

/**
* The Body13 model module.
* @module model/Body13
* @version 1.0.0
*/
export default class Body13 {
    /**
    * Constructs a new <code>Body13</code>.
    * @alias module:model/Body13
    * @class
    * @param fileUrl {String} 
    */

    constructor(fileUrl) {
        
        
        this['fileUrl'] = fileUrl;
        
    }

    /**
    * Constructs a <code>Body13</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body13} obj Optional instance to populate.
    * @return {module:model/Body13} The populated <code>Body13</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body13();
                        
            
            if (data.hasOwnProperty('fileUrl')) {
                obj['fileUrl'] = ApiClient.convertToType(data['fileUrl'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} fileUrl
    */
    'fileUrl' = undefined;




}
