class StockSpanner {
    constructor() {
        this.data = [];
    }

    getCount(current) {
        if (this.data.length - 1 >= 0) {
            let max = 1;
            let index = this.data.length - 1;
            while (true) {
                if (index >= 0 && current >= this.data[index].price) {
                    max += this.data[index].count;
                    index -= this.data[index].count;
                } else {
                    break;
                }
            }
            return max;
        }
        return 1;
    }

    next(price) {
        const newPrice = {
            price,
            count: this.getCount(price)
        };
        this.data.push(newPrice);
        return newPrice.count;
    }
}

const S = new StockSpanner();
S.next(100);
S.next(80);
S.next(60);
S.next(70);
S.next(60);
S.next(75);
S.next(85);
