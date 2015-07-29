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
 dojo.provide("widgets.CompositeTab");

dojo.require("dijit._Templated");
dojo.require("dijit._Widget");
dojo.require('dijit.layout.AccordionContainer');
dojo.require('dijit.layout.AccordionPane');
dojo.require("widgets.GeneralAtt");
dojo.require("widgets.composite_contexts");
dojo.require("widgets.SectionPane");
dojo.declare("widgets.CompositeTab",
             [dijit._Widget, dijit._Templated],
{
    widgetsInTemplate: true,
    templatePath: dojo.moduleUrl("widgets","composite_tab.html"),
  
	 startup: function(){
        widgets.CompositeTab.superclass.startup.apply(this, arguments);
}});
