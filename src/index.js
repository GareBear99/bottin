// Discord Slash Command Bot
export default {
  async fetch(request, env) {
    console.log('[🎮 Discord] Incoming request:', request.method, request.url);
    
    if (request.method !== 'POST') {
      console.log('[❌] Method not allowed:', request.method);
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await request.json();
    console.log('[📦] Payload:', JSON.stringify(body, null, 2));
    
    // Handle ping
    if (body.type === 1) {
      console.log('[🎯] Ping received - responding with pong');
      return Response.json({ type: 1 });
    }

    // Handle slash commands
    if (body.type === 2) {
      const { name } = body.data;
      console.log('[🛠️] Command received:', name);
      
      if (name === 'hello') {
        console.log('[✅] Responding to /hello command');
        return Response.json({
          type: 4,
          data: { content: 'Hello! 👋' }
        });
      }
    }

    console.log('[⚠️] Unknown command or interaction type');
    return Response.json({ type: 4, data: { content: 'Unknown command' } });
  }
};