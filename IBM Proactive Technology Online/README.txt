#-----------------------------------------------------------------------
# Copyright 2014 IBM
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#   http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#-----------------------------------------------------------------------
IBM Proactive Technology Online is an open source complex event processing engine developed at IBM Research - Haifa. It provides language primitives for defining, submitting, and executing event processing networks. The goal of the system is to respond to raw events and identify meaningful events within contexts. The system comes with a set of built-in operators (such as sequence, all, etc.) for determining CEP patterns. It also has extendable APIs for adding additional custom operators. The system comes with existing source/sink adapters, allowing it to extract raw events from files or pull them from RESTful services. It also provides extendable APIs for adding more adapter types. 

The repository includes: 
	-The standalone J2SE version zip, which includes the source 	code, a samples directory with the IBM Proactive Technology Online�s definition file, and a 	directory with the system�s user guide explaining the language 	semantics and use of the authoring tool.

	-A zip file with the IBM Proactive Technology Online�s authoring tool - a web application 	used 	to build and verify the application�s definition files.

	-A zip file with IBM Proactive Technology Online on a web server. This is a version of the engine adapted to run on a web server. It allows users to push 	RESTful events to the engine in addition to pulling 
	RESTful events option provided by the REST adapter. This version also provides 	REST APIs for managing the engine�s instance lifecycle, and 	managing the definition repository.
	For instructions on how to configure and install IBM Proactive Technology Online on 	Tomcat, see: https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/CEP_GE_IBM_Proactive_Technology_Online_Installation_and_Administration_Guide

-The src files for Proton standalone and Proton on web server code are located under ProtonJ2SE and ProtonOnWebServer/ProtonOnWebServerAdmin directories respectively.
For ProtonJ2SE add the dependencies to the libraries under its /lib folder to the project's classpath.
For ProtonOnWebServer and ProtonOnWebServerAdmin add the dependencies to the ProtonJ2SE project and to its /lib jars. Those web projects also depend on Apache Wink libraries (we used the 1.2.0 version) so please download those libraries and add them as project dependencies.

To run the Proton executable you will also need the config folder, where you have to update the Proton.properties file to point at Proton's JSON definition file (an example of that you can find in the sample folder). Run the com.ibm.hrl.proton.server.executor.ProtonExecutor to run Proton's engine with the specified JSON.
This is correct for both the standalone and the web versions

