
export function isEmpty(user: any) {
    
    if (!Object.keys(user).length) return { error: true, message: 'All fields are required' }

    for (const key in user) {
        if (user[key].length === 0) {
            return {
                error: true,
                message: `The ${key} is required`,
                field: key
            }
        }
    }
    return { error: false }
}