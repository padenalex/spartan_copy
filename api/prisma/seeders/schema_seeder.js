const { PrismaClient } = require('@prisma/client')
const data = require('./data')
// const managers = require('./data')

const prisma = new PrismaClient()

const main = async () => {
  try {

    for (const user of data.users) {
      const record = await prisma.users.create({ data: user })
      console.log(record)
    }

    for (const manager of data.managers) {
      const record = await prisma.managers.create({
        data: {
          users: {
            connect: { id: manager.user_id }
          }
        }
      })
      console.log(record)
    }

    for (const manager_user of data.manager_user) {
      const record = await prisma.manager_user.create({
        data: {
          users: {
            connect: { id: manager_user.user_id }
          },
          managers: {
            connect: { id: manager_user.manager_id }
          }
        }
      })
      console.log(record)
    }

  }
  catch(e) {
    throw e
  }
}

main()
  .catch((e) => { throw e })
  .finally(async () => await prisma.disconnect())
