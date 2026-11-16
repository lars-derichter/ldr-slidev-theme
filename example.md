---
# `theme: ./` loads this repo as the theme — used to preview while developing.
theme: ./
title: The shape of an argument
mdc: true

layout: cover
eyebrow: A lecture in three movements
author: Lars De Richter
affiliation: Thomas More Hogeschool
---

<!--
  Preview deck for the ldr theme. Run `npm run dev` to open it.
  It walks through every custom layout the theme ships.
-->

# The shape of an argument

Structure, rhythm, and restraint in technical writing.

---
layout: section
number: "01"
eyebrow: First movement
---

# Foundations

Where a good sentence begins, and why the reader keeps reading.

---

## Three habits of clear prose

- **One idea per sentence.** Let the _full stop_ do its work before you reach for a comma.
- **Concrete before abstract.** Name the thing, then explain what it means.
- **Read it aloud.** If you run out of [breath,](https://example.com) the reader already has.

---

## Revising in order

1. Read the draft once, without a pen.
2. Fix the structure.
   1. Move paragraphs before you rewrite them.
   2. Cut what no longer earns its place.
3. Only then polish the sentences.

> The first draft is for you. Every draft after that is for the reader.

---

## Where the words go

| Draft  | Words | Cut |
| ------ | ----: | --: |
| First  | 2,400 |   — |
| Second | 1,850 | 23% |
| Final  | 1,500 | 19% |

---
layout: two-cols-ldr
---

## Two ways to revise

::left::

Top down {.eyebrow.sage}

Start from the claim. Check that every paragraph earns its place and serves the argument before you polish a single sentence.

::right::

Bottom up {.eyebrow.maple}

Start from the words. Cut the dead ones, tighten the verbs, and let the structure reveal itself as the prose gets leaner.

---

Example {.eyebrow}

## Calculate the average

```java
// Calculate the average of three numbers
public double average(int a, int b, int c) {
    double sum = a + b + c;
    System.out.println("Average: " + sum / 3.0);
    return sum / 3.0;
}
```

---
layout: quote
author: William Strunk Jr.
---

Vigorous writing is concise. A sentence should contain no unnecessary words.

---
layout: image-side
image: /forest.jpg
eyebrow: Figure 2
caption: A margin gives the eye somewhere to rest between ideas.
credit: Photo · Unsplash
---

## Whitespace is part of the argument

---
layout: image-full
image: /forest.jpg
eyebrow: Figure 3
caption: Many small parts, one continuous shape.
credit: Photo · Unsplash
---

### A canopy is a kind of paragraph

---
layout: image-side
image: /forest.jpg
side: left
fit: contain
eyebrow: Figure 4
caption: Shown whole, on the parchment ground.
---

## When cropping would lie

`fit: contain` fits the whole image inside the panel instead of filling it. Use
it for screenshots, diagrams, and anything with edges that carry meaning.

---

Figure 5 {.eyebrow}

## An image in the flow

A Markdown image on its own line is centred, capped at `15rem`, and framed with
a hairline. Override the height with a utility class. Note the path: Markdown
images are resolved by Vite and need a **relative** path, not `/forest.jpg`.

![A stand of trees](./public/forest.jpg){.max-h-40}

---
layout: end
contact: lars.derichter@thomasmore.be · @ldr
---

# Thank you

Questions are welcome.
