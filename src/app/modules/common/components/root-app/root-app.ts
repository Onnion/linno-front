export class RootComponent {
    private context: ('admin' | 'app');

    constructor(context: ('admin' | 'app')) {
        this.context = context;
    }

}