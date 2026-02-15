
import { prismaClient } from "./prisma/db";



async function seed () {

    await prismaClient.user.create({
        data: {
            id:"1",
            email:"test@test.com",
            password:"test"
        }
    })

    await prismaClient.website.create({
        data: {
            id:"1",
            url:"https://test.com",
            userId:"1"
        }
    })

   

    await prismaClient.tick.create({
        data: {
            id:"1",
            websiteId:"1",
            createdAt:new Date(),
            status:"Good",
            latency:100
        }
    })
    await prismaClient.tick.create({
        data: {
            id:"1",
            websiteId:"1",
            createdAt:new Date(Date.now() - 1000 * 60 * 10 ), 
            status:"Good",
            latency:100
        }
    })
    await prismaClient.tick.create({
        data: {
            id:"1",
            websiteId:"1",
            createdAt:new Date(Date.now() - 1000 * 60 * 20 ), 
            status:"Good",
            latency:100
        }
    })
}

seed();