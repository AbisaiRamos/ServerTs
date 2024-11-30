export function isEmpty(user: any) {
    for (const key in user) {
        if (user[key] === undefined || user[key].length === 0) {
            return {
                message: `The ${key} is required`,
                field: key
            }
        }
    }
    return { }
}