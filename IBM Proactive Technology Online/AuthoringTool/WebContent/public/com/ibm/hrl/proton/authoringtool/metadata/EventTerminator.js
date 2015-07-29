/******************************************************************************
 * Copyright 2014 IBM
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
 dojo.provide("metadata.EventTerminator");
dojo.require("metadata.ParseError");
dojo.require("metadata.Terminator");
dojo.declare("metadata.EventTerminator",metadata.Terminator,{
	constructor: function(terminatorObject, errors, definitionType, epn) {

		this._name="";
		this._policy=null;
		this.setType(ATEnum.TerminatorType.Event);
		
		try{
			if(terminatorObject){
				//TODO: according to the terminator type, certain fields are mandatory
				if(terminatorObject.name){this.setName(terminatorObject.name);}
				if(terminatorObject.terminatorPolicy){this.setPolicy(terminatorObject.terminatorPolicy);}
				if(terminatorObject.condition){this.setCondition(terminatorObject.condition);}
			}
		}catch(err){
			///TODO: generate error
			console.log("error in terminator parsing");
		}
	},
	
	setName: function(name){
		if(this._epn.isEventExists(name)){
			this._name=name;
		}else{
			//TODO: generate error
			console.log("error - non exist terminator event");
		}		
	},
	getName: function(){
		return this._name;
	},
	
	setPolicy: function(policy){
		for(var p in ATEnum.TerminatorPolicy){
			if(ATEnum.TerminatorPolicy[p]===policy){
				this._policy=policy;
				return;
			}
		}
		//TODO: generate error
		console.log("error - non exist terminator policy " + policy);		
	},
	getPolicy:function(){
		return this._policy;
	},
	
	setCondition:function(condition){
		//TODO check condition
		this._condition=condition;
	},
	getCondition: function(){
		return this._condition;
	}
	
});
