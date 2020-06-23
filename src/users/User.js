import mongoose from "mongoose";

class User {
    constructor(model) {
        this.model = model;
        this.getAll = this.get.bind(this);
        this.insert = this.insert.bind(this);

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
  
  export default User