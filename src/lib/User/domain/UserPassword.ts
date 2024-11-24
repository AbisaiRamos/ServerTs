export class UserPassword {
    value: string
    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    ensureIsValid() {
        if (this.value.length < 6) {
            throw new Error('User password must be at least 6 characters long')
        }
    }
}