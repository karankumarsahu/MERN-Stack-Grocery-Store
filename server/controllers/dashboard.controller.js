import { Order } from "../models/order.model.js";

export const dashboardStats = async (req, res) => {
    try {
        let stats = {};

        const today = new Date();
        const oneMonthAgo = new Date();
        const sixMonthsAgo = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);

        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        today.setHours(0, 0, 0, 0);

        const salesDataLastSixMonths = [];

        // Iterate over the last six months
        for (let i = 0; i < 6; i++) {
            // Calculate the start date of the current month
            const startDate = new Date(today.getFullYear(), today.getMonth() - i, 1);

            // Calculate the end date of the current month
            const endDate = new Date(today.getFullYear(), today.getMonth() - i + 1, 0, 23, 59, 59, 999);

            // Fetch orders created in the current month
            const ordersCurrentMonthPromise = Order.find({
                createdAt: { $gte: startDate, $lte: endDate }
            });

            const [ordersCurrentMonth] = await Promise.all([ordersCurrentMonthPromise]);

            let totalSalesCurrentMonth = 0;
            ordersCurrentMonth.forEach(order => {
                order.orderItems.forEach(item => {
                    totalSalesCurrentMonth += item.qty;
                });
            });

            // Push total sales for the current month to the array
            salesDataLastSixMonths.push(totalSalesCurrentMonth);
        }

        // Fetch other stats outside the loop
        const ordersPromise = Order.countDocuments({ createdAt: { $gte: today } });
        const ordersLastMonthPromise = Order.find({ createdAt: { $gte: oneMonthAgo } });
        const todaysOrdersPromise = Order.find({ createdAt: { $gte: today } });
        const ordersThisYearPromise = Order.find({ createdAt: { $gte: startOfYear } });
        const ordersLastSixMonthsPromise = Order.find({ createdAt: { $gte: sixMonthsAgo } });
        const latestTransactionPromise = Order.find({}).sort({ createdAt: -1 }).limit(4);

        const [
            orders,
            ordersLastMonth,
            todaysOrders,
            ordersThisYear,
            ordersLastSixMonths,
            totalOrders,
            pendingOrders,
            shippingOrders,
            deliveredOrders,
            latestTransaction
        ] = await Promise.all([
            ordersPromise,
            ordersLastMonthPromise,
            todaysOrdersPromise,
            ordersThisYearPromise,
            ordersLastSixMonthsPromise,
            Order.find({}),
            Order.find({ status: "pending" }),
            Order.find({ status: "shipping" }),
            Order.find({ status: "delivered" }),
            latestTransactionPromise
        ]);

        // Calculate other stats
        let totalTaxDeduction = 0;
        ordersLastMonth.forEach(order => {
            totalTaxDeduction += order.tax;
        });

        let todayTotalIncome = 0;
        todaysOrders.forEach(order => {
            todayTotalIncome += order.total;
        });

        let totalIncomeThisYear = 0;
        ordersThisYear.forEach(order => {
            totalIncomeThisYear += order.total;
        });

        const lastSixMonthProductSale = salesDataLastSixMonths.reverse();

        let orderStats = {
            totalOrdersReceived : totalOrders.length,
            pendingOrders : pendingOrders.length,
            shippingOrders : shippingOrders.length,
            deliveredOrders : deliveredOrders.length,
        };

        // Set stats object
        stats.orders = orders;
        stats.totalTaxDeductionLastMonth = totalTaxDeduction;
        stats.todayTotalIncome = todayTotalIncome;
        stats.totalIncomeThisYear = totalIncomeThisYear;
        stats.salesDataLastSixMonths = lastSixMonthProductSale;
        stats.orderStats = orderStats;
        stats.latestTransaction = latestTransaction;

        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
