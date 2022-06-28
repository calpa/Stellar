import { api } from "@serverless/cloud";

import { health } from '@stellar/util-health'

api.get('/', (req, res) => {
    // res.send('Hello World!')
    res.send('Nyahello!')
})

api.get('/api', health)