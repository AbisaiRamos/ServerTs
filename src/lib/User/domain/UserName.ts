export class UserName {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    ensureIsValid() {
        if (this.value.length < 3) {
            throw new Error('User name must be at least 3 characters long')
        }
    }
}