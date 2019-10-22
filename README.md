# ChatBot

*A lab report by Bar Kadosh*

## In this Report

To submit your lab, fork [this repository](https://github.com/FAR-Lab/IDD-Fa18-Lab6). You'll need to upload any code you change into your fork, as well as upload a video of a friend or classmate using your chatbot.

## Make the ChatBot your own

**Describe what changes you made to the baseline chatbot here. Don't forget to push your modified code to this repository.**

The goal of my TunesBot was to create a chatbot that could take in input from the user and provide a song to them that might fit their specific scenario or desire. Additionally, I wanted my chatbot to be dynamic in the sense that its responses and subsequent questions were dependent on the answer of the user for a given question. 

I was thinking of this chatbot as a potential add-on to spotify, so the first change I made was to make the background green and the text with color white to look more like spotify. I then edited the chatbot's opening statement and statement following asking the user what their name is. Ultimately with my chatbot, there were 11 different pathways that the user could end up at, so I hardcoded 11 different song suggestions for each of these scenarios. However, in a future project, one way I would make this more impressive is to load in a much larger set of songs so that each of the 11 pathways had many songs that could be suggested. I would then choose a random song out of that set to make it more dynamic and personal for different users. 

With my chatbot, the initial question is whether the user wants to relax, workout, or study. If the answer is "relax", I simply ask one more question: are you feeling angry, happy, or sad. For each of these 3 responses, I suggest a different song that I think applies to that scenario and those feelings. However, if they answer "workout" or "study", the possibilities are a bit more complex. If their answer

## Record someone trying out your ChatBot

**Using a phone or other video device, record someone trying out your ChatBot. Upload that video to this repository and link to it here!**

[My TunesBot Code](https://github.com/barkadosh1/IDD-Fa19-Lab6/blob/master/chatServer.js)

---
Starter code by [David Goedicke](mailto:da.goedicke@gmail.com), closely based on work by [Nikolas Martelaro](mailto:nmartelaro@gmail.com) and [Captain Anonymous](https://codepen.io/anon/pen/PEVYXz), who forked original work by [Ian Tairea](https://codepen.io/mrtairea/pen/yJapwv).
