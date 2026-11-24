# One Emoji, One Dream Vacation

[![Competition](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/toirant/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/toirant/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

Entry for the [One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) bounty on [make.fun](https://make.fun).

## The entry

🏝

One emoji, nothing else: a desert island with a palm tree — the postcard
image of a dream vacation. It is a single code point (U+1F3DD), so the
entry file is 4 bytes: the smallest possible text, which also wins the
exact-tie break on size.

## How it works

`main.ts` writes exactly that one emoji to `/output/entry.txt` — no words,
no newline, no trailing whitespace. It reads the file back and holds it to
the same gate the sealed scorer uses (1–8 characters, not only white
space), failing loudly if the write ever came out wrong.

Run it exactly as the grader does:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
