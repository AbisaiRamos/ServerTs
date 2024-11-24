
export function isEmpty(user: any) {
    if (!user.email || !user.password) {
       return true
    }
    return false
}