/*******************************************************************************
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
package com.ibm.hrl.proton.admin.webapp.exceptions;

import javax.ws.rs.WebApplicationException;


public class ResponseException extends WebApplicationException {

	private static final long serialVersionUID = 1L;

		
	
    private int errorCode;
    private String message;

    public ResponseException(int errorCode, String message) {
    	super(); this.message = message;
    	this.errorCode = errorCode;
    }

    public String getMessage() {    	
    	return getException();
    }

    public String getException() {    	
    	return message;
    }

    public int getErrorCode() {    	
    	return errorCode;
    }

}
