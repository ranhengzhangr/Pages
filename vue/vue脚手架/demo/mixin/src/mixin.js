export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        }
    }
}

export const mixin2 = {
    data() {
        return {
            name: "mixin name"
        }
    }
}
