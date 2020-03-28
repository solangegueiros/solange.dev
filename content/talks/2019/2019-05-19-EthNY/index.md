---
title: Caspian Tradex - EthNY AirSwap winner
date: "2019-05-19T09:00:00.000Z"
description: "Caspian Tradex was AirSwap winner at Hackathon ETHNewYork in New York, EUA"
type: talk
event: Hackathon ETHNewYork
where: New York, EUA
site: "https://ethnewyork.com/"
---


<a href="https://ethnewyork.devpost.com/" target="_blank">ETHNewYork - Devpost</a>

<a href="https://devpost.com/software/trading-alert-bot-using-airswap-dexindex-io" target="_blank">DevPost - My project</a>

## Midia
- <a href="https://br.cointelegraph.com/news/brazilian-developer-wins-ethereum-hackathon-in-new-york" target="_blank">Cointelegraph - desenvolvedora brasileira Solange Gueiros vence hackathon da Ethereum em Nova York</a>

- <a href="https://guiadobitcoin.com.br/noticias/desenvolvedora-brasileira-hackathon-nova-iorque/" target="_blank">Guia do Bitcoin - desenvolvedora brasileira vence hackathon em Nova Iorque</a>

- <a href="https://www.criptofacil.com/desenvolvedora-brasileira-solange-gueiros-vence-hackathon-de-ethereum-em-nova-york/" target="_blank">Criptofacil - desenvolvedora brasileira Solange Gueiros vence hackathon de Ethereum em Nova York</a>

- <a href="https://br.investing.com/news/cryptocurrency-news/solange-gueiros-vence-hackathon-da-ethereum-em-nova-york-658963" target="_blank">Investing.com - desenvolvedora brasileira Solange Gueiros vence hackathon de Ethereum em Nova York</a>




## Caspian Tradex - Dexindex.io trading alert bot
ethnewyork 2019

### Description
My project at Hackaton EthNewYork 2019 - Caspian Tradex Bot for trading on decentralized exchanges using dexindex.io from AirSwap

### Inspiration
Decentralized exchanges can has diferent prices to same asset at same time and is possible to take profits trading it.

### What it does
It check the prices using dexindex.io from AirSwap, verify the cheapest price to buy and the most expensive price to sell. After it save the operation at google sheet.

You can check the trades and profit here:

https://docs.google.com/spreadsheets/d/1QZSbRHv_GS9o4zQrNSC_JCKajnFUNK75EL7C-O2tfRA/edit?usp=sharing

It can be to trading any asset with ETH, I'm using to trade DAI, but it is configurable. Caspian Tradex is able to configurate a pause beween the executions and can be use 24h per day.

### How I built it
I use Visual Studio, to build a C# console application. I am hosting a web server that serves price data in response to HTTP requests, using ethereum-dex-prices-service - airswap dexindex.io

https://github.com/perich/ethereum-dex-prices-service

### Challenges I ran into
I try to use the airswap's example to build a front-end, but I can not did work. I do not have time to integrate to check balances, calculates fees and put orders.

### Accomplishments that I'm proud of
I was able to integrate with the web server and consult the quotes, besides calculating the most profitable operation.

### What I learned
I learned how to use dexindex.io, hosting the web server and think about trades and profits.

### What's next for Trading alert bot using airswap dexindex.io
In future it will check the balances at exchanges and will do the trades automatically.

I would like to integrate with the decentralized exchanges, check balances in each of them, calculates fees and put orders automatically.

It will make money for me while I'm sleeping :)

### Built With
- airswap
- c#
- dexindex.io
