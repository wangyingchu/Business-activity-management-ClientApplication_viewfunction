/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2012 All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define(["dojo/main", "dojo/dnd/Manager","./Avatar"], function(dojo, DndManager, Avatar){
	
var Manager = dojo.declare("idx.dnd.Manager", [DndManager], {
	makeAvatar: function(){
		// summary:
		//		makes the avatar; it is separate to be overwritten dynamically, if needed
		return new Avatar(this);
	}
});
	
idx.dnd._manager = null;

Manager.manager = idx.dnd.manager = function(){
	// summary:
	//		Returns the current DnD manager.  Creates one if it is not created yet.
	if(!idx.dnd._manager){
		idx.dnd._manager = new idx.dnd.Manager();
	}
	return idx.dnd._manager;	// Object
};

return Manager;
});
