# 🧪 Roastr

![Alt text](assets/banner.png)

_"Listen up, you code-writing mouth-breathers!"_ - Rick

_"Aw jeez, Rick, maybe we should be nicer to the developers..."_ - Morty

---

**Rick:** "Wubba lubba dub dub! So you losers are tired of your boring, personality-free console logs? Well congratulations, you've stumbled upon the universe's most advanced debugging roasting system! I've literally built interdimensional cable networks with more enthusiasm than your average console.log() statement."

**Morty:** "Um, what Rick's trying to say is... Roastr makes debugging more fun! It, uh, it adds Rick and Morty characters to your console methods, so instead of boring logs, you get... well, you get roasted. But in a good way! I think?"

**Rick:** "Shut up Morty! _burp_ Look, I've seen more sophisticated debugging in Jerry's browser history. This package wraps EVERY console method - log, error, warn, info, debug, trace, table, group, time, count, assert - with personality that actually makes sense. Unlike your code."

## 🚀 Installation

**Rick:** "Even Jerry could install this. Probably."

```bash
npm install @goab/roastr
```

**Morty:** "Aw geez, that's actually pretty easy! Even I could remember that command!"

## 🎮 Quick Start

**Rick:** "Alright, pay attention because I'm only explaining this once, unlike your code which I'll have to explain is terrible multiple times:"

```javascript
import { initRoastr } from "@goab/roastr";

// Choose your tormentor... I mean, debugging companion
initRoastr("rick");

console.log("Testing my API");
// Rick: "Oh great, another genius using console.log(). Let me guess, you also think JavaScript is a 'real' programming language:"
```

**Morty:** "Oh! Oh! And if you want me to help instead of Rick being all... Rick-y, you can do this:"

```javascript
initRoastr("morty");

console.error("Database connection failed");
// Morty: "Oh no, an error! This is bad, right? This seems really bad! Here's what went wrong:"
```

**Rick:** "Or if you're boring and have no sense of humor whatsoever:"

```javascript
initRoastr("default");
// Gets you vanilla, personality-free messages. Ugh.
```

## 🎭 Meet Your New Debugging Partners

### 🧪 Rick Sanchez - Chief Science Officer of Brutal Honesty

**Rick:** "I'm gonna be straight with you - your debugging skills are more primitive than Jerry's understanding of quantum physics. I'll roast every console method you use while actually making your debugging experience infinitely better. It's called 'tough love,' look it up."

**Sample Rick Roast:**

> _"console.log() again? I've built civilizations that debug better than whatever this pathetic excuse for code inspection is:"_

### 😰 Morty Smith - Anxious Assistant Developer

**Morty:** "H-Hey! I try to be supportive, you know? I just... I get really worried about your code sometimes. Like, what if the warnings are serious? What if the errors mean something really bad is happening? I-I just want to help, but I also don't want anything to explode..."

**Sample Morty Support:**

> _"Aw jeez, another console.log()? Rick's gonna be so mad about this debugging approach. But here it is:"_

## 🔧 Every Console Method Gets the Rick & Morty Treatment

**Rick:** "Unlike most packages created by bootcamp graduates, this one actually WORKS with every console method. Observe:"

| Method            | Rick's Approach                                                                           | Morty's Approach                                                      |
| ----------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `console.log()`   | _"Still using console.log()? Even Mr. Meeseeks would find a better solution"_             | _"Aw jeez, console.log() again? I-I guess that's okay..."_            |
| `console.error()` | _"ERROR?! I'm not surprised. Your programming skills are worse than Jerry's self-esteem"_ | _"Oh no, an error! Should I be worried? This looks pretty serious"_   |
| `console.warn()`  | _"A warning? Your entire codebase is a warning waiting to happen"_                        | _"A warning? Oh geez, that sounds concerning! Should we be worried?"_ |
| `console.info()`  | _"console.info()? What's next, gonna send me a newsletter?"_                              | _"console.info()? Oh, that's nice! Information is good, right?"_      |
| `console.debug()` | _"At least you're trying to debug instead of just hoping it works"_                       | _"Debugging? Oh good, that means we're trying to fix things!"_        |

**Morty:** "And, um, Rick made it work with like... ALL the console methods! Even the scary ones like console.trace() and console.assert()!"

**Rick:** "That's right Morty! Because unlike your typical npm package that does one thing poorly, this does EVERYTHING excellently. _burp_"

## 🛠️ Advanced Features (Because You'll Need Them)

### Character Switching Mid-Session

**Rick:** "Changed your mind? Typical. Here's how you switch characters without breaking everything:"

```javascript
// Start with my superior intellect
initRoastr("rick");
console.log("Rick mode activated");

// Switch to Morty if you can't handle the truth
initRoastr("morty");
console.log("Now in anxiety mode");
```

**Morty:** "Oh! And if you need to go back to boring console logs for some reason:"

```javascript
import { restoreConsole } from "@goab/roastr";

restoreConsole(); // Back to soul-crushing normalcy
```

### Network Error Roasting

**Rick:** "I even intercept your pathetic fetch failures:"

```javascript
initRoastr("rick");

fetch("/api/your-broken-endpoint").catch((error) => {
  // I'll roast your 404 errors automatically
  // Because OF COURSE your API doesn't work
});
```

**Morty:** "Aw jeez, that's... that's actually pretty helpful! Even when things go wrong, we're still there for you!"

## 🎯 Why You Need This (Spoiler: You Do)

**Rick:** "Look, your debugging is already a joke - at least now it's an INTENTIONAL joke. Here's why this package is infinitely better than your current approach:"

- **🔥 Educational Roasting**: Learn better debugging habits through public humiliation
- **🎭 Personality**: Your console finally has more personality than Jerry
- **⚡ Zero Performance Impact**: Unlike your code, this doesn't slow anything down
- **🧪 Complete Coverage**: Every console method, because I don't do half-measures
- **📦 TypeScript Support**: Fully typed, because even I have standards

**Morty:** "Plus, um, it actually makes debugging kind of fun? Like, even when things go wrong, at least Rick and I are there to... well, Rick roasts you and I worry about everything, but we're there!"

## 🚨 Production Usage Warning

**Rick:** "Obviously don't use this in production, genius. Your users don't need to know how incompetent you are:"

```javascript
if (process.env.NODE_ENV === "development") {
  initRoastr("rick"); // For development masochism
}
```

**Morty:** "Yeah, uh, Rick's right. We should probably keep the roasting between us developers, you know?"

## 🤝 Contributing

**Rick:** "Found a bug? Want to add more roasts? Fine, whatever. Just don't submit garbage code:"

1. Fork the repo (try not to break it)
2. Create your feature branch
3. Add your roasts (make them good, unlike your debugging skills)
4. Submit a pull request (I'll probably reject it anyway)

**Morty:** "Rick! Be nice! Um, we actually really appreciate contributions! Every little bit helps make the package better!"

## 📊 Package Stats That'll Blow Your Tiny Mind

**Rick:** "Over 220 unique roasts PER console method PER character. That's more variety than your entire programming toolkit."

**Morty:** "That's... that's actually a lot of roasts, Rick. Like, maybe too many? Is that okay? Should we be worried about roast overflow?"

**Rick:** "Shut up Morty! Quality AND quantity - concepts foreign to most developers."

## 🎪 Side Effects (All Good Ones)

**Rick:** "Warning: May cause excessive laughter, improved coding habits, and existential crises about your career choices."

**Morty:** "Oh! And, um, you might actually start debugging better because you don't want Rick to roast you as much!"

**Rick:** "Exactly! It's called 'negative reinforcement learning,' Morty. Though in this case, it's more like 'reality reinforcement learning.'"

## 📜 License

**Rick:** "MIT License - use it, abuse it, get roasted by it. Just like everything else in your programming career."

**Morty:** "The license is really nice! Very permissive! Rick spent like, five seconds picking it!"

---

## 🎬 Final Words

**Rick:** "Look, this package won't fix your terrible code architecture or your questionable life choices, but at least now your debugging sessions will be entertaining. And hey, maybe if you get roasted enough, you'll actually learn something. Stranger things have happened. _burp_"

**Morty:** "Aw jeez, Rick, maybe end on a nicer note? Um... we really hope this helps make your coding more fun! And, uh, try not to take Rick's roasts too personally. He means well! I think!"

**Rick:** "I absolutely do not mean well, Morty. I mean accurately."

_"Wubba lubba dub dub! Now stop reading documentation and go get roasted!"_ - Rick

_"Good luck with your debugging! We're rooting for you!"_ - Morty
