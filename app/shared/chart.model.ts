export interface IChart {
    name: string;
    count: number;
}

export class Chart implements IChart {
    name: string;
    count: number;
    
    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }
}
