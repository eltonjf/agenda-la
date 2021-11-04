require('dotenv').config();

const { Client } = require('@notionhq/client')

const registro = {
    Confirmado: { id: '%5BSDp', type: 'checkbox', checkbox: false },
    Date: {
      id: 'zNc%3D',
      type: 'date',
      date: { start: '2021-11-06T10:30:00.000-03:00', end: null }
    },
    Paciente: { id: '%7B%60%7Dj', type: 'rich_text', rich_text: [{ text: { content: 'Elton Mário silva'} }] },
    Name: { id: 'title', type: 'title', title: [{ text: { content: 'Elton Mário silva'} }] },
  }


const insert = async() => {
    const notion = new Client({
        auth: process.env.NOTION_SECRET
    })

    const inserted = await notion.pages.create({
        parent:{
            database_id: 'cbf5ec7855344d0ba9089f7852788d51'
        },
        properties: registro
    })

    console.log(inserted)

/*
    const data = await notion.databases.query({
        database_id: 'cbf5ec7855344d0ba9089f7852788d51',
        page_size: 100,
    })
    data.results.forEach((result) => {
        const properties = result.properties
        console.log(properties.Name)
        console.log(properties.Paciente)
    })
    */
}

insert()