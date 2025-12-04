import OpenAI from "openai";

var x = 0; 
function queryfunc(){
    query = document.getElementById("query").value;

    const openai = new OpenAI({
      apiKey: "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",
    });
    if(x == 0){

        const response = openai.responses.create({
          model: "gpt-5-nano",
          input: "from this point onward, you act as a secretary that will answer the questions given to you. You know the name of today's event. the event's name is 'the big night'. Any questions after this you should regard as a person asking you for information about today's event."+query,
          store: true,
        });
        response.then((result) => console.log(result.output_text));

    }else{

        const response = openai.responses.create({
          model: "gpt-5-nano",
          input: query,
          store: true,
        });
        response.then((result) => console.log(result.output_text));

    }
    x++;

}