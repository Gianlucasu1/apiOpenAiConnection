import OpenAI from "openai";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const content = searchParams.get("content");
  const assistantId = searchParams.get("assistantId");

  if (!content)
    return Response.json({ error: "No content provided" }, { status: 400 });
  if (!assistantId)
    return Response.json(
      { error: "No  assistant id provided" },
      { status: 400 }
    );

  const openai = new OpenAI();

  try {

    let run = await openai.beta.threads.createAndRun({
      assistant_id: assistantId,
      thread: {
        messages: [
          { role: "user", content: content },
        ],
      },
    });

    while(run.status !== "completed"){
      console.log("run status", run.status)
      run = await openai.beta.threads.runs.retrieve(
       run.thread_id,
        run.id,
      );
      console.log("run status 2", run.status);
    }

    console.log({ run: run });

    return Response.json({ run: run });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}








