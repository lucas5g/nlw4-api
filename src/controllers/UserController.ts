import {Request, Response } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'
class UserController{

  async index(request: Request, response: Response){
    const userRepository = getCustomRepository(UserRepository)
    const users = await userRepository.find()

    return response.json(users)
  }

  async create(request: Request, response: Response){
    const {name, email} = request.body

    const users = getCustomRepository(UserRepository)

    const userAlreadyExists = await users.findOne({
      email,
    })

    if(userAlreadyExists){
      return response.status(400).json({
        error: "User already exists!"
      })
    }
    const data = users.create({
      name, email
    })

    await users.save(data)

    return response.status(201).send(data)

  }
}

export {UserController}