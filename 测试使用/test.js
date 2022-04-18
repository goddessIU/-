class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(property)
        this.property = property
    }
}

console.log(new PropertyRequiredError('ff').name)