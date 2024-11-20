# Week 13

The folder `separate-files` and corresponding zipped version contain a
single HTML file that is connected to two CSS and two JS files, showing
how you can split tasks by putting different "things" into separate files.

The only caveat is that things in the files won't necessarily know about
_each other_. The first linked JavaScript file won't know about any variables
declared in the second file, but the second file _will_ know about ones
in the first one.
