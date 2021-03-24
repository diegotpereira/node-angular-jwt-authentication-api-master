module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof(er) === 'string') {
        return res.status(400).json({ message: err });
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(401).josn({ message: 'Invalid Token' });
    }
    return res.status(500).json({ message: err.message });
}