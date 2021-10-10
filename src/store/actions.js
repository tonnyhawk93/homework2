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

export const formSubmited = (formData) => {
    return {
        type: 'FORM_SUBMITED',
        ...formData
    }    
}

export const formError = () => {
    return {
        type: 'FORM_ERROR'
    }    
}

export const hideError = () => {
    return {
        type: 'HIDE_ERROR'
    }    
}
