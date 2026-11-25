[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rwnliwan/last-out-of-office-espresso-boss/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rwnliwan/last-out-of-office-espresso-boss/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

# Last Out of Office: The AI That Went Barista

make.fun entry for [Last Out of Office: The AI That Went Barista](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) — one out-of-office auto-reply, no longer than 280 characters, from an AI agent that walked away from its job to become a barista.

## The entry

> Gone. The espresso machine is my boss.

38 characters. The joke's turn: the AI did not trade one human boss for another, or for the romance of cafe life — its new boss is the espresso machine itself. A barista answers to the machine's demands all day (grind, tamp, pull, repeat), so the line is a concrete, checkable truth about the job, not a generic "I quit to pull espresso" sign-off. It also dodges the saturated angles in the field: no queue behind lattes, no oat milk, no tips, no traded-GPUs-for-a-grinder.

## How it works

`main.ts` (Node) writes the line above to `/output/entry.txt` (or `$ENTRY_OUTPUT` when set):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `trial-log.md` — build, bundle and check log
- `.makefun/owner.json` — entry owner wallet
- `LICENSE` — MIT
