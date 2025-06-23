class Worker {
    constructor(workerData) {
        this.workerData = workerData;
    }

    getWorkersByTrade(trade) {
        const normalizedTrade = trade.trim().toLowerCase();

        const emails = this.workerData
            .filter(worker =>
                worker.Trades.some(t => t.trim().toLowerCase() === normalizedTrade)
            )
            .map(worker => worker.Email);

        return [...new Set(emails)];
    }

    // Function to cover all trades with minimum cost
    getMinCostToCoverTrades(tradesRequired) {
        const trades = tradesRequired.map(t => t.trim().toLowerCase());
        const remainingTrades = new Set(trades);

        // Clone worker data
        const workers = this.workerData.map(w => ({
            ...w,
            Trades: w.Trades.map(t => t.trim().toLowerCase())
        }));

        const usedWorkers = [];

        while (remainingTrades.size > 0) {
            let bestWorker = null;
            let maxMatchedTrades = 0;

            for (const worker of workers) {
                // How many required trades this worker can do (only 1/day, so 1 matters)
                const matches = worker.Trades.filter(t => remainingTrades.has(t));
                if (matches.length > 0 && (!bestWorker || worker.Cost < bestWorker.Cost)) {
                    bestWorker = worker;
                }
            }

            if (!bestWorker) {
                return { cost: -1, message: "Not all trades can be covered", workers: [] };
            }

            // Assign the first matching trade (only 1/day)
            const assignedTrade = bestWorker.Trades.find(t => remainingTrades.has(t));
            remainingTrades.delete(assignedTrade);
            usedWorkers.push(bestWorker);
        }

        const totalCost = usedWorkers.reduce((sum, w) => sum + w.Cost, 0);

        return {
            cost: totalCost,
            workers: usedWorkers.map(w => w.Email)
        };
    }
}

// Sample Data
const workerData = [
    {
        Email: "a@a.com",
        Trades: ["brickwork"],
        Cost: 90,
    },
    {
        Email: "b@b.com",
        Trades: ["drywall", "cement"],
        Cost: 100,
    },
    {
        Email: "c@c.com",
        Trades: ["brickwork", "cement"],
        Cost: 85,
    }
];

// Usage
const workers = new Worker(workerData);
const result = workers.getMinCostToCoverTrades(["brickwork", "cement", "drywall"]);
console.log(result);
// Example Output:
// {
//   cost: 185,
//   workers: ['c@c.com', 'b@b.com']
// }
