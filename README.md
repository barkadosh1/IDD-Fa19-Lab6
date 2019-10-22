# ChatBot

*A lab report by Bar Kadosh*

## In this Report

To submit your lab, fork [this repository](https://github.com/FAR-Lab/IDD-Fa18-Lab6). You'll need to upload any code you change into your fork, as well as upload a video of a friend or classmate using your chatbot.

## Make the ChatBot your own

**Describe what changes you made to the baseline chatbot here. Don't forget to push your modified code to this repository.**

The goal of my TunesBot was to create a chatbot that could take in input from the user and provide a song to them that might fit their specific scenario or desire. Additionally, I wanted my chatbot to be dynamic in the sense that its responses and subsequent questions were dependent on the user's answer for a given question. 

I was thinking of this chatbot as a potential add-on to spotify, so the first change I made was to make the background green and the text with color white to look more like spotify. I then edited the chatbot's opening statement and the statement following asking the user what their name is. Ultimately with my chatbot, there were 11 different pathways that the user could end up at, so I hardcoded 11 different song suggestions for each of these scenarios. However, in a future project, one way I would make this more impressive is to load in a much larger set of songs so that each of the 11 pathways had many songs that could be suggested. I would then choose a random song out of that set to make it more dynamic and personal for different users. 

With my chatbot, the initial question is whether the user wants to relax, workout, or study. If the answer is "relax", I simply ask one more question: are you feeling angry, happy, or sad. For each of these 3 responses, I suggest a different song that I think applies to that scenario and those feelings. However, if they answer "workout" or "study", the possibilities are a bit more complex. If their answer is "workout", I ask if they are going to lift or jog. If they are lifting, I ask if they want mellow or intense workout music, and if they are jogging, I ask if they are jogging inside or outside. If their response is "study", I ask if they are studying alone or with friends. If they are studying alone, I ask if they want music with lyrics or without lyrics, and if they are studying with friends I ask if they want mellow or upbeat study music. With each response, I have prepared responses and potential error messages catered specifically to where in the decision tree the user is. 

I also ensure that my chatbot accepts words if they have capital letters by converting all responses to lowercase letters. One limitation is that my chatbot expects specific responses -- if it gets a different response from the possibilities it is expecting, it will tell the user and ask again for another attempt by the user. 

## Record someone trying out your ChatBot

**Using a phone or other video device, record someone trying out your ChatBot. Upload that video to this repository and link to it here!**

For my videos, I tried to highlight the fact that each message and following question is dependent on the response the user gives in the previous question, meaning that the chatbot is taking input from the user and using it to alter the path of questions it provides. With the videos, I tried to highlight 3 different paths that the chatbot takes to recommending songs and I also tried to show that the chatbot works if capital letters are used and if a response it isn't expecting is used. 

[My TunesBot Code](https://github.com/barkadosh1/IDD-Fa19-Lab6/blob/master/chatServer.js)

[My TunesBot Video 1](https://youtu.be/76BYzRgd6VA)

[My TunesBot Video 2](https://youtu.be/IRlrZDwIjn4)

[My TunesBot Video 3](https://youtu.be/5qNZmdcQAL0)

---
Starter code by [David Goedicke](mailto:da.goedicke@gmail.com), closely based on work by [Nikolas Martelaro](mailto:nmartelaro@gmail.com) and [Captain Anonymous](https://codepen.io/anon/pen/PEVYXz), who forked original work by [Ian Tairea](https://codepen.io/mrtairea/pen/yJapwv).
