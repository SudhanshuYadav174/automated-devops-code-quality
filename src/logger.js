const logger = {
  info: (msg, meta = {}) => console.log(JSON.stringify({ level: 'info', msg, ...meta })),
  debug: (msg, meta = {}) => { if (process.env.DEBUG) console.log(JSON.stringify({ level: 'debug', msg, ...meta })); },
  error: (msg, meta = {}) => console.error(JSON.stringify({ level: 'error', msg, ...meta }))
};
module.exports = { logger };