import OpenAI from "openai";

export async function GET(request) {

  const { searchParams } = new URL(request.url)


  const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
  });

  try {
    const thread = await openai.beta.threads.create();

    console.log(thread);

    return Response.json({ thread: thread });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}