# Лабораторная работа: ERC20 Токен на Polygon Amoy

## Состав группы

- Исаев Даниил Викторович
- Яковенко Валерий Юрьевич
- Кузнецов Дмитрий Юрьевич

## Выбранная тестовая сеть

- **Сеть:** Polygon Amoy (тестнет)
- **ChainId:** 80002
- **RPC:** https://rpc-amoy.polygon.technology  
- **Обозреватель:** https://amoy.polygonscan.com

## Краткое описание выполненных шагов

1. **Подготовка проекта.** Инициализирован Hardhat-проект, установлены зависимости (OpenZeppelin Contracts, ethers, dotenv, hardhat-verify). В `.env` указаны `PRIVATE_KEY` и `POLYGONSCAN_API_KEY`, `.env` добавлен в `.gitignore`.

2. **Смарт-контракт.** Написан контракт `MyToken` в `contracts/MyToken.sol`: наследование от OpenZeppelin ERC20, ERC20Burnable, Ownable; конструктор принимает владельца, имя и символ токена; функция `mint` доступна только владельцу; поддержка `burn` для держателей токенов.

3. **Компиляция и деплой.** Контракт скомпилирован (`npx hardhat compile`). В `hardhat.config.js` настроена сеть `amoy` (Polygon Amoy). Деплой выполнен через CLI: `npx hardhat run scripts/deploy.js --network amoy`. Контракт развёрнут в сети Amoy, владелец — адрес из `PRIVATE_KEY`.

4. **Взаимодействие с контрактом.** В Remix подключён кошелёк MetaMask (сеть Polygon Amoy), загружен контракт по адресу (At Address). Вызвана функция `mint` для начисления токенов. В MetaMask добавлен токен MTT (My Test Token) по адресу контракта. Выполнены переводы MTT на другой адрес через «Отправить» в MetaMask.

5. **Верификация контракта.** Собран единый исходный файл (flatten) контракта и зависимостей OpenZeppelin. На Polygonscan (amoy.polygonscan.com) выполнена верификация: загружен исходный код, указаны компилятор v0.8.20, оптимизатор (No, 200 runs), EVM paris. Контракт отмечен как верифицированный (Exact Match); доступны вкладки Read Contract и Write Contract.

6. **Проверка.** Транзакции и переводы токенов просмотрены на amoy.polygonscan.com (страница контракта, Token Transfers).

## Ссылка на верифицированный контракт

**Верифицированный контракт в обозревателе сети:**

https://amoy.polygonscan.com/address/0xE78ca4a331dA0fcbD52d9d009bBE10E6F3b6f27e

- Токен: **My Test Token (MTT)**  
- Контракт верифицирован (Contract Source Code Verified, Exact Match).

## Исходный код в репозитории

- Контракт: [contracts/MyToken.sol](contracts/MyToken.sol)
- Скрипт деплоя: [scripts/deploy.js](scripts/deploy.js)
- Конфигурация: [hardhat.config.js](hardhat.config.js)
