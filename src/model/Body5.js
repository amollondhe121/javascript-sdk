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
* The Body5 model module.
* @module model/Body5
* @version 1.0.0
*/
export default class Body5 {
    /**
    * Constructs a new <code>Body5</code>.
    * @alias module:model/Body5
    * @class
    * @param contractAddress {String} 
    * @param withdrawAddress {String} 
    * @param chain {module:model/Body5.ChainEnum} 
    */

    constructor(contractAddress, withdrawAddress, chain) {
        
        
        this['contractAddress'] = contractAddress;
        this['withdrawAddress'] = withdrawAddress;
        this['chain'] = chain;
        
    }

    /**
    * Constructs a <code>Body5</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body5} obj Optional instance to populate.
    * @return {module:model/Body5} The populated <code>Body5</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body5();
                        
            
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('withdrawAddress')) {
                obj['withdrawAddress'] = ApiClient.convertToType(data['withdrawAddress'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} contractAddress
    */
    'contractAddress' = undefined;
    /**
    * @member {String} withdrawAddress
    */
    'withdrawAddress' = undefined;
    /**
    * @member {module:model/Body5.ChainEnum} chain
    */
    'chain' = undefined;



    /**
    * Allowed values for the <code>chain</code> property.
    * @enum {String}
    * @readonly
    */
    static ChainEnum = {
        /**
         * value: "goerli"
         * @const
         */
        "goerli": "goerli",
        /**
         * value: "bsc-testnet"
         * @const
         */
        "bsc-testnet": "bsc-testnet",
        /**
         * value: "fuji"
         * @const
         */
        "fuji": "fuji",
        /**
         * value: "arbitrum-goerli"
         * @const
         */
        "arbitrum-goerli": "arbitrum-goerli",
        /**
         * value: "optimism-goerli"
         * @const
         */
        "optimism-goerli": "optimism-goerli",
        /**
         * value: "fantom-testnet"
         * @const
         */
        "fantom-testnet": "fantom-testnet",
        /**
         * value: "ethereum"
         * @const
         */
        "ethereum": "ethereum",
        /**
         * value: "bsc"
         * @const
         */
        "bsc": "bsc",
        /**
         * value: "avalanche"
         * @const
         */
        "avalanche": "avalanche",
        /**
         * value: "polygon"
         * @const
         */
        "polygon": "polygon",
        /**
         * value: "arbitrum"
         * @const
         */
        "arbitrum": "arbitrum",
        /**
         * value: "optimism"
         * @const
         */
        "optimism": "optimism",
        /**
         * value: "fantom"
         * @const
         */
        "fantom": "fantom"    };

}
