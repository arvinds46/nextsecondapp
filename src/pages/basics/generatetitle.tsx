export const generateTitle=(pathname:any)=>{
    switch (pathname) {
        case '/basics/about':
            return 'About Us'
        default:
            return 'My App'
    }
}