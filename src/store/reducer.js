function reducer(state, action) {
    switch(action.type) {
        case 'DOWNLOAD_BEGIN': return { 
            ...state,
            loading: action.loading            
        };
        case 'DOWNLOAD_END': return { 
            ...state,
            loading: action.loading,
            commits: action.commits
        };   
        case 'FORM_SUBMITED': return {
            ...state, 
            repository: action.repository,
            command: action.command,
            branch: action.branch,
            synTime: action.synTime,
        };   
        case 'FORM_ERROR': return { 
            ...state,
            error : true
        };
        case 'HIDE_ERROR': return { 
            ...state,
            error : false
        };  
        default: return state;
    }
}


export default reducer;