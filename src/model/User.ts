class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birth_date: string,
        private class_id: string
    ) {}

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getBirthDate(): string {
        return this.birth_date
    }

    public getClassId(): string {
        return this.class_id
    }
    
}
export default User