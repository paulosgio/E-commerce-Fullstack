import jwt from "jsonwebtoken"

export function auth(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).send("Token not submmited") 
    }
    const token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).send("Invalid token")
    }
}