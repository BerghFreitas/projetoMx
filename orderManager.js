async function placeOrder(account, symbol, volume, action, sl, tp) {
    const order = await account.createOrder({
        symbol: symbol,
        volume: volume,
        action: action,
        type: 'market',
        sl: sl,
        tp: tp
    });
    console.log('Ordem enviada:', order);
}

module.exports = { placeOrder };
