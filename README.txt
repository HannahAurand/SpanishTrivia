First, I pseudo-coded what I thought I would 
have to do in order to create the ability 
for the incorrect or correct questions to affect 
the positioning of the images on the page.

Then I was told that would be extremely hard, 
so I reevaluated and began trying to simply 
alert the user when they got a question right or wrong.

So, I created some vars to store all the info
from the dom in the js file so that I could easily
manipulate the dom nodes in functions and arrays.

Then I created an object class that created a  
template for the structure of the questions that
I stored as instances of the question class in my 
array. 

Then, I displayed the question and answers by 
creating a questioncounter var (at the suggestion
of a classmate, who said my for loop seemed too
complicated), and so I have the difference questions
and answers displaying in the text fields of the 
html by running the questionCounter when they 
click the "next question" button.

Before they click the next question button, though,
the browser compares their clicked answer to the 
correct answer stored within that instance of 
question and answers in the array. It highlights 
green or red depending on if it is right or wrong.

If the question is answered incorrectly, they must
try again to answer the question correctly before they
pass to the next question.

This is the MVP. Silver features would be to 
store the score, to announce they won or lost,
and to move them on to the next level if they won.

Zakk helped me think through the logic flow for 
getting through the questions and displaying them.