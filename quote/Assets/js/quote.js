const quoteContent = document.getElementById('quote_content');
const quoteOwner = document.getElementById('quote_owner');
const button = document.getElementById('quote_button');

const quotes = [
    {quote: `"The best way to find yourself is to lose yourself in the service of others."`, 
     person: `Mahatma Gandhi`},
     {quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`, 
     person: `Albert Einstein`},
     {quote: `"Your time is limited, so don't waste it living someone else' life."`, 
     person: `Steve Jobs`},
     {quote: `"The journey of a thousand miles starts with one step."`, 
     person: `Lao Tzu`},
     {quote: `“We cannot solve problems with the kind of thinking we employed when we came up with them.”`, 
     person: `Albert Einstein`},
     {quote: `“Learn as if you will live forever, live like you will die tomorrow.”`, 
     person: `Mahatma Gandhi`},
     {quote: `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”`, 
     person: `Mark Twain`},
     {quote: `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”`, 
     person: `Eleanor Roosevelt`},
     {quote: `“When you change your thoughts, remember to also change your world.”`, 
     person: `Norman Vincent Peale`},
     {quote: `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.”`, 
     person: `Walter Anderson`},
     {quote: `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”`, 
     person: `Diane McLaren`},
     {quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`, 
     person: `Winston S. Churchill`},
     {quote: `"It is better to fail in originality than to succeed in imitation."`, 
     person: `Herman Melville`},
     {quote: `"The road to success and the road to failure are almost exactly the same."`, 
     person: `Colin R. Davis`},
     {quote: `“Success usually comes to those who are too busy looking for it.”`, 
     person: `David Thoreau`},
     {quote: `“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”`, 
     person: `Dale Carnegie`},
     {quote: `“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”`, 
     person: `Mister Rogers`},
     {quote: `“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”`, 
     person: `John Wooden`},
     {quote: `“I never dreamed about success. I worked for it.”`, 
     person: `Estée Lauder`},
     {quote: `“Success is getting what you want, happiness is wanting what you get.”`, 
     person: `W. P. Kinsella`},
];


button.addEventListener('click', function(e){
    if(e.target.innerHTML !== ""){
        const random = Math.floor(Math.random() * quotes.length);
        quoteContent.innerHTML = quotes[random].quote;
        quoteOwner.innerHTML = quotes[random].person;
    }
})