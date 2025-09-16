import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
})

fastify.get("/",async(request,reply)=>{
        reply.type("text/html").send("<h3>Hello from Home")
})

fastify.get("/about",async(request,reply)=>{
    reply.type("text/html").send("<h3>Hello from about</h3>") ;
})
fastify.get("/contact",async(request,reply)=>{
    reply.type("text/html").send("<h3 >Hello from contact")
})


fastify.listen({port:8000}, function(err, address) {
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }else{
        fastify.log.info(`Server is running at http//localhost:${address}`)
    }
})