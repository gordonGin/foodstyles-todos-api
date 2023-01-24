export const errorHandling = (err, _req, res, _next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' });
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'bad request' });
    } else {
        res.status(500).json({ message: 'oops, we made a mistake. Sorry about that' });
    }
}