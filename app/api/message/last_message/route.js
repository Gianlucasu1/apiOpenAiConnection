import OpenAI from "openai";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const threadId = searchParams.get("threadId");

  if (!threadId)
    return Response.json({ error: "No id provided" }, { status: 400 });

  const openai = new OpenAI();

  try {
    const response = await openai.beta.threads.messages.list(threadId);

    const messageToReturn = response.data[0].content[0].text.value;

    


    return Response.json({ message: messageToReturn });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
