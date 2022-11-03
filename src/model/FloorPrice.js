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
* The FloorPrice model module.
* @module model/FloorPrice
* @version 1.0.0
*/
export default class FloorPrice {
    /**
    * Constructs a new <code>FloorPrice</code>.
    * @alias module:model/FloorPrice
    * @class
    */

    constructor() {
        
        OneOfinlineResponse2005FloorPricesItems.call(this);
        
    }

    /**
    * Constructs a <code>FloorPrice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FloorPrice} obj Optional instance to populate.
    * @return {module:model/FloorPrice} The populated <code>FloorPrice</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FloorPrice();
                        
            
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('floorAsk')) {
                obj['floorAsk'] = ApiClient.convertToType(data['floorAsk'], 'Number');
            }
            if (data.hasOwnProperty('previousFloorAsk')) {
                obj['previousFloorAsk'] = ApiClient.convertToType(data['previousFloorAsk'], 'Number');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} source
    */
    'source' = undefined;
    /**
    * @member {String} eventType
    */
    'eventType' = undefined;
    /**
    * @member {String} kind
    */
    'kind' = undefined;
    /**
    * @member {String} slug
    */
    'slug' = undefined;
    /**
    * @member {String} chain
    */
    'chain' = undefined;
    /**
    * @member {Number} floorAsk
    */
    'floorAsk' = undefined;
    /**
    * @member {Number} previousFloorAsk
    */
    'previousFloorAsk' = undefined;
    /**
    * @member {String} contractId
    */
    'contractId' = undefined;
    /**
    * @member {String} timestamp
    */
    'timestamp' = undefined;

    // Implement OneOfinlineResponse2005FloorPricesItems interface:
    


}
