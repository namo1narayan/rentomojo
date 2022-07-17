module.exports = (req, res, next) => {
    res.header('Content-Range', 'games 0-20/20')
    next()
  }