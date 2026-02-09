import { server } from '../build/Server';


server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`)
});