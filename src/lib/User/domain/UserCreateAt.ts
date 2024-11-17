export class UserCreatedAt {
    value: Date
    
    constructor(value: Date) {
        this.value = value
        this.ensureIsValid()
    }

    ensureIsValid() {
        if (this.value > new Date()) {
            throw new Error('User createdAt must be in the past')
        }
    }
}