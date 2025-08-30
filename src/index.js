const { add, divide } = require('./math');
const { logger } = require('./logger');

function main() {
  logger.info('Starting demo application...');
  const a = 6; const b = 3;
  logger.debug(`Numbers: a=${a}, b=${b}`);
  const sum = add(a, b);
  const quotient = divide(a, b);
  logger.info(`add(${a}, ${b}) = ${sum}`);
  logger.info(`divide(${a}, ${b}) = ${quotient}`);
  return { sum, quotient };
}

if (require.main === module) { main(); }
module.exports = { main };