import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
})

fastify.get("/",async(req,res)=>{
    return { hello: "world" }
})


fastify.listen({port:8000}, function(err, address) {
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }else{
        fastify.log.info(`Server is running at ${address}`)
    }
})