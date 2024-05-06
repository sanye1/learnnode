import { injectable } from "inversify";
import passport from "passport";
import jsonwebtoken from "jsonwebtoken";
import { Strategy, ExtractJwt } from "passport-jwt";


@injectable()
export class JWT {
    private secret: string = "xiaoliang3]pfdsa()";
    private jwtOptions: object = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: this.secret,
    }
    constructor() {
        this.strategy()
    }
    strategy() {
        let str = new Strategy(this.jwtOptions, (payload, done) => {
            // console.log(payload)
            done(null, payload)
        })
        passport.use(str)
    } 
    static middleware(){
        return passport.authenticate('jwt', { session: false })
    }
    public createToken(data: object) {
        return jsonwebtoken.sign(data, this.secret, { expiresIn: '7d' })
    }
    public init() {
        return passport.initialize()
    }
}