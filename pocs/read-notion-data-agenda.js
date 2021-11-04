require('dotenv').config();

const { Client } = require('@notionhq/client')

const read = async() => {
    const notion = new Client({
        auth: process.env.NOTION_SECRET
    })

    const data = await notion.databases.query({
        database_id: 'cbf5ec7855344d0ba9089f7852788d51',
        page_size: 100,
    })
    data.results.forEach((result) => {
        const properties = result.properties
        console.log(properties)
    })
}

read()