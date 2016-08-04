pyg = 'ay'
print "Welcome"
original = raw_input('Enter a word:')
word=original.lower()
new_word=word+pyg

#original.lower() makes everything lower case
if len(original) > 0 and original.isalpha():
    if word[0]== ("a" or 'e' or 'i' or 'u' or 'o'):
        #make sure to put quotation marks around the letters
        print new_word
    else:
        new_word2=word[1:]+(word[0]+pyg)
        #word[1:] "ython" instead of "python"
        print "Translation:" + new_word2
    #original.isalpha() makes sure the word is alphabetical characters
else:
    print 'Use aplphabetical characters...no numbers'
