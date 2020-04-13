<img src="https://github.com/andr-dev/Chromethesia/raw/master/tab-icon.png" width="128" height="128" />

# Chromesthesia

> A lightweight chrome extension to induce synesthetic experiences in non-synesthetic subjects.

> Untested neuroscience experiment!

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Chromesthesia is a chrome extension currently being tested to see if synesthetic experiences can be induced in people who do not have synesthesia by simply browsing the web!

## Examples

### Before
![Before](https://github.com/andr-dev/Chromethesia/raw/master/preview1_before.png)

### After
![After](https://github.com/andr-dev/Chromethesia/raw/master/preview1_after.png)

## Background

A while back, I read an <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0039799">article</a> by three researchers at the University of Amsterdam in (you guessed it) Amsterdam, The Netherlands. In the article, they examined whether grapheme-color synesthesia, a form of synesthesia in which an individual associates and perceives numbers and letters with distinct colors, can be acquired by a person who is not synesthetic through long term exposure to colored characters. In the experiment they performed, non-synesthetes were given a set of books which had been prepared such that each character in the book had a specific color which was used instead of the standard black text. The colors remained consistent across the set of books. They discovered that, after reading one book with > 50,000 words, the subjects had experienced induced effects sufficient enough to be regarded as behavioral markers for synesthesia.

I found this discovery to be super interesting so I thought about how I could test it out on myself and see if I could have an induced synesthetic experience. Thus, this project was born. Keep in mind, however, that I am in no way a neuroscientist nor qualified to say that this extension will produce synesthetic experiences in you, the reader. Test it out and see what happens!

### About the name

Yes, I know that Chromesthesia is another type of synesthesia in which sound evokes an experience of color in the subject however I couldn't let a name like Chromesthesia slip away so whoops 😄.

## Installation

### Method #1 (Use the Existing Color Palette)

1) Enable chrome developer mode
2) Download the .crx extension from the releases page found at https://github.com/andr-dev/Chromethesia/releases
3) Go to chrome://extensions/ and enable the "Developer Mode" toggle in the top right corner
4) Drag the .crx file into the extensions window and click "Add Extension"

No additional setup is required.

### Method #2 (Customize the 🎨 Color Palette)

Currently, the color values are hard coded into a file called background.js in a data table at the top of the file. First, download the source code of the latest release found at https://github.com/andr-dev/Chromethesia/releases. Extract the zip and open a file called background.js with a code editor. Edit the hex color values to your preference and then save the file. To install the extension, go to chrome://extensions/ and enable the "Developer Mode" toggle in the top right corner. Then, select load unpacked and select the extracted folder where you made the edits. Chromesthesia should now be installed!

## Contributing

> If you would like to contribute to this project, follow these steps.

### Step 1

- **Option 1**
    - 🍴 Fork 🍴 this repo!

- **Option 2**
    - 👯 Clone 👯 this repo to your local machine using `https://github.com/andr-dev/Chromethesia.git`

### Step 2

- 🔨 **Hack Away At It!** 🔨

### Step 3

- Create a new pull request 🔁 using <a href="https://github.com/andr-dev/Chromesthesia/compare/" target="_blank">`https://github.com/andr-dev/Chromesthesia/compare/`</a>.

## Support

If you have any issues, open up a new issue and I'll get to it as soon as possible!
