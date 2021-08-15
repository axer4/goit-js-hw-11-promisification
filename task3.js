const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            const objResolve = {
                 id: transaction.id,
                time: delay,
            }
            if (canProcess) {
                resolve({objResolve})
            } else {
                reject(transaction.id);
            }
        }, delay)
    
    });
    return promise
    
};

const logSuccess = (promiseResult) => {
    console.log(`Transaction ${promiseResult.objResolve.id} processed in ${promiseResult.objResolve.time}ms`);
};


const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
 makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);