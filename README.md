# Лабораторная работа: ERC20 Токен на Polygon Amoy

## Состав группы

- Фамилия: 0xАдресКошелька

## Выбранная тестовая сеть

Chain ID: 80002 (Polygon Amoy)

## Краткое описание шагов

1. Настроили MetaMask с сетью Amoy и получили тестовый POL из фаусетов.
2. Установили Hardhat, создали проект, настроили .env и hardhat.config.js для Amoy.
3. Написали контракт MyToken.sol на основе OpenZeppelin (ERC20, mintable, burnable).
4. Развернули контракт: `npm run deploy` (Hardhat 2, сеть Amoy).
5. Верифицировали контракт: `npx hardhat verify --network amoy АДРЕС "OWNER" "My Test Token" "MTT"`.
6. Минтили токены, обменялись трансферами с коллегами через Remix или MetaMask.
7. Проверили транзакции на amoy.polygonscan.com.

## Ссылка на верифицированный контракт

https://amoy.polygonscan.com/address/КОНТРАКТ_АДРЕС#code

## Исходный код

- Контракт: [contracts/MyToken.sol](contracts/MyToken.sol)
- Деплой: [scripts/deploy.js](scripts/deploy.js)
