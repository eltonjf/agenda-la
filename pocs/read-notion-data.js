require('dotenv').config();

const { Client } = require('@notionhq/client')

const read = async() => {
    const notion = new Client({
        auth: process.env.NOTION_SECRET
    })

    const data = await notion.databases.query({
        database_id: '6a5eec69ffef4914a2331fab254283ca',
        page_size: 100,
    })
    data.results.forEach((result) => {
        const blockedDate = result.properties.Date.date.start
        console.log(blockedDate)
    })
}

read()