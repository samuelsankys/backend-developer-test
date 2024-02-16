import clc from 'cli-color'
import app from './app'

const PORT = process.env.PORT ?? 4000

app.listen(PORT, () => {
  console.log(clc.yellow('App Plooral De running at: '), clc.cyan(`http://localhost:${PORT}`))
})
