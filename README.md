c# Homework 3: Password-Generator

## Project Goal

Create a page that can generate a password depending on user selected criteria


## Challenges

### Issues 1: Missing characters from selected criteria

My first instinct when creating this was to create a string with all the selected user criteria and randomly select characters from that string. The issue I was coming across was that it would work only about 60% or 70% of the time when doing a low password length. Of course when having a longer length, the probability of the random selector will choose from all the different criteria.

#### Solution 1/2: Change character selection probability

I noticed that there are only ten characters within the special and the numeric sets. I extended those sets to match the lowercase and uppercase lengths by repeating the characters in the string.

#### Solution 2/2: Check every character in the generated password

I created a way to check every single character for every criterial if there is at least 1 character within in the generated password in the character sets.


### Issue 2: How to get the generated password contain all criteria

#### Solution: Keep generating a password

I had to figure out a way for the password to dynamically change if it does not pass all the criteria. First I though to someone randomly change a single character within the generated password string but I thought what if it selected the character that it only had one character of a character set and is required for the criteria. I couldn't figure it out so I decided to just make it regenerate a password by using a do-while loop so it can run through the checks once and if any of the checks fail and it sees a false, it will loop back and regenerate the password and check the password again.


## Take Aways

Code this was a refresher for me. Learning C, C++, and Java in college really helped with the way of thinking with conditional and loop statements. The hardest part troubleshooting the code when it would not work but adding console.log's everywhere incredibly helped.
