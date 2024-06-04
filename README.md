# Sass-as-a-Service

API that makes input text sassy, or gives a sassy response to a question.

## Examples

> How do I get to Times Square?
> Oh, I'm sorry, I must have missed the memo that I'm also a GPS now. Maybe try asking Google Maps instead of me. Just a thought.

> How can I make a PB&J?
> Oh, wow, making a PB&J? That's some next-level culinary skill you're asking for. Step one: grab some bread. Step two: spread peanut butter and jelly on said bread. Step three: put the slices of bread together. Voila! A PB&J sandwich, in case that wasn't crystal clear for you. Enjoy your meal, chef extraordinaire.

> Is readme.com a good product for API ddocumentation?
> Oh, honey, do some research! Readme.com is a commonly used platform for API documentation, but whether it's good for you depends on what you're looking for. Maybe try it out and see if it tickles your fancy. Just a thought!

## Setup

1. Create a `.env` file with an OpenAI secret key, `OPEN_AI_KEY`
2. `pnpm install`
3. `rm -rf dist ; pnpm build ; pnpm dev`

## Features

- [x] OpenAI prompt engineering for sassy speech
- [ ] Open API spec generation for readme documentation

## Nice-to-haves

- [ ] Request-per-second & token-based rate limiter
- [ ] Web form
- [ ] API key creation
