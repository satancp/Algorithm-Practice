class StockSpanner {
    constructor() {
        this.data = [];
        this.previousValue = 0;
    }

    getCount(current) {
        let max = 1;
        let index = this.data.length - 1;
        let flag = true;
        if (index >= 0) {
            while (flag) {
                if (index >= 0 && current >= this.data[index].price) {
                    max += this.data[index].count;
                    index -= this.data[index].count;
                } else {
                    flag = true;
                    break;
                }
            }
        }
        return max;
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
