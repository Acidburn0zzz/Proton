package com.ibm.hrl.proton.runtime.metadata;

public interface IMetadataFacade {
	public ContextMetadataFacade getContextMetadataFacade() ;
	public EPAManagerMetadataFacade getEpaManagerMetadataFacade();
	public EventMetadataFacade getEventMetadataFacade() ;
	public RoutingMetadataFacade getRoutingMetadataFacade() ;
	public void setContextMetadataFacade(ContextMetadataFacade contextMetadataFacade) ;
	public void setEpaManagerMetadataFacade(
			EPAManagerMetadataFacade epaManagerMetadataFacade) ;
	public void setEventMetadataFacade(EventMetadataFacade eventMetadataFacade) ;
	public void setRoutingMetadataFacade(RoutingMetadataFacade routingMetadataFacade) ;
	
	
	public void clear();
	
}
