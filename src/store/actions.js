export const downloadBegin = () => {
    return {
        type: 'DOWNLOAD_BEGIN',
        loading: true,
        commits: []
    }    
} 

export const downloadEnd = (commits) => {
    return {
        type: 'DOWNLOAD_END',
        loading: false,
        commits: commits
    }    
} 

export const formSubmited = (repository) => {
    return {
        type: 'FORM_SUBMITED',
        repository
    }    
}