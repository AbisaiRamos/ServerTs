export class UserEmail {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    ensureIsValid() {
        if(!this.value.includes('@') || !this.value.includes('.')) {
            throw new Error('User email must be valid')
        }
    }
}