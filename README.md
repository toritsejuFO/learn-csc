# learn-csc
A native mobile application to learn about Computer Science by taking quizzes. Built with React Native.

## About
The application has an in-built (offline) number of questions on different aspects of computer science. This allows you to still enjoy the app offline without data. The set of in-built questions, except the first one (which is always open), requires you to answer the previous question correctly to be able to unlock the next. After you answer all questions correctly (Unlock all questions), you can lock it all up again so a friend can have a go at it themselves. Cool right?

It also has a **Trivia** section, which requires data connectivity, where questions are fetched online from a *free* 3rd party API (credits to [Open Trivia Database](https://opentdb.com/)). The questions vary in difficulty and makes the app less boring by giving you new questions everyday, or almost new questions :smirk:, they do a good randomization job :grin:.

## Required Software
- Nodejs (at least 10)
- JDK
- Android Studio
- Android SDK

## How Do I Get Setup?
- clone the repo with the command `git clone https://github.com/toritsejuFO/learn-csc.git`
- `cd learn-csc`
- `npm install`
- `react-native start`

# Resource links
- Check out the getting started guide on the [docs](https://facebook.github.io/react-native/docs/getting-started.html) for further setup and the different running environments

## Todo
- Get the app to the playstore
- Add a scoring feature with appropriate mechanism (noting repeated questions each day) for both the offline (this would be capped) and online questions.
- Maybe tush up the home screen :no_mouth:? Help me :sob:
