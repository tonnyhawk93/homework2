import React from 'react';
import { BuildHistoryServiceConsumer } from '../components/buildHistoryServiceContext/buildHistoryServiceContext';

const WithBuildHistoryService = () => (Wrapped) => {
    return(props) => {
        return (<BuildHistoryServiceConsumer> 
            {
                (BuildHistoryService) => {
                    return (
                        <Wrapped {...props} 
                        BuildHistoryService = {BuildHistoryService}/>
                    )   
                }            
            }
        </BuildHistoryServiceConsumer>)
    };
}

export default WithBuildHistoryService;