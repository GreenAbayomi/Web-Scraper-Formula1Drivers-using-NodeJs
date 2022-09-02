export const notFound = (req, res, next)=>{
    try {
        const err = new Error (`Route not found`)
        err.status = 404
        next(err)
    } catch (error) {
        console.log(error.message)
    }
}

export const errorHandler = (err, req, res, next)=>{
    res.status(err.status || 500).json({msg: err.message || `Unknown error`})
}