# react-rust-chrome-extension

## How to build

1. install rsw `cargo install rsw`
2. install wasm-pack

```sh
rsw build
cd pkg/filecoin-signer
yarn link
cd -
yarn link "filecoin-signer-wasm"
```

## Filecoin Signing Tools

- [build readme](./rust/filecoin-signing-tools/README.md)
- [filecoin-signing-tools-js](https://github.com/Zondax/filecoin-signing-tools-js)
- [filecoin-signing-tools](https://github.com/Zondax/filecoin-signing-tools)
- [filecoin-js-signer](https://github.com/Zondax/filecoin-js-signer)
