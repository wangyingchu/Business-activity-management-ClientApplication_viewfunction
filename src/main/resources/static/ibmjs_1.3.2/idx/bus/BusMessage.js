/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2012 All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or 
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define(["dojo/_base/declare","dojo/_base/lang"],
	  function(dDeclare,dLang) {
	/**
	 * @name idx.bus.BusMessage
	 * @class EXPERIMENTAL API: Message for use with idx.bus 
	 */
	return dDeclare("idx.bus.BusMessage", [], 
	 		/**@lends idx.bus.BusMessage#*/				
{
    /**
     * The scope for the message.  If the message is targeted at a specific scope
     * it is easier for subscribers to filter it and prevent action names from
     * overlapping in namespaces.  Some subscribers may in fact listen to all
     * action scopes.
     * @type String
     * @default ""
     */
    scope: "",

    /**
     * The message type is a string that uniquely defines an action to be taken.
     * The set of handled messages depends on the subscribers that are 
     * subscribed to the bus.  Specific subscribers can be designed to handle
     * certain messages while leaving other kinds to other subscribers.
     * @type String
     * @default ""
     */ 
    messageType: "",

    /**
     * The source of the requested action.
     * @type String
     * @default null
     */
    source: null,

    /**
     * Set to true to broadcast the message upstream even if it has already been
     * handled by at least one subscriber within the local scope, otherwise set
     * to false if the message should only be propagated upstream if it has not
     * been handled within local scope.
     * @type Boolean
     * @default false
     */
    broadcast: false,

    /**
     * The object containing any additional arguments for handling the message.
     * @type Object
     * @default null
     */ 
    args: null,
 
	/**
	 * Constructs with the specified arguments.
	 * @param {Object} args
	 */
    constructor: function(args) {
      if (args) {
        dLang.mixin(this,args);
      }
      this._results = new Array();
    },

    /**
     * Access for results length
     * @returns
     */
    getResultCount: function() {
      return this._results.length;
    },
  
    /**
     * Accessor for result count
     * @returns {Boolean}
     */
    isHandled: function() {
       return (this.getResultCount() > 0);
    },

    /**
     * Appends the result 
     * @param {Object} source
     * @param {Object} result
     */
    appendResult: function(/*Object*/ source, /*Object*/ result) {
      this._results.push({source: source, result: result});
    }
});
});