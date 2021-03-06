class Controller {

    constructor(user) {
      this.user = user;
      this.get = this.get.bind(this);
      this.insert = this.insert.bind(this);
    }
  
    
    async insert(req, res) {
    // Create a new user
        try {
            const user = new User(req.body)
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (error) {
            res.status(400).send(error)
        }
    }

    async insert(req, res) {
    //Login a registered user
        try {
            const { email, password } = req.body
            const user = await User.findByCredentials(email, password)
            if (!user) {
                return res.status(401).send({error: 'Login failed! Check authentication credentials'})
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }
    
    async get(req, res) {
    // View logged in user profile
        res.send(req.user)
    }

    async insert(req, res) {
    // Log user out of the application
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async insert(req, res) {
    // Log user out of all devices
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
  
export default Controller;