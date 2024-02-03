---
sidebar_position: 1
---

# Homebrew

Install `homebrew` and useful extensions



## Installation

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



## Extensions

### [rmtree](https://github.com/beeftornado/homebrew-rmtree)

> Remove a formula and its unused dependencies

```shell
# Installation
brew tap beeftornado/rmtree

# Commonly Usage
brew rmtree ffmpeg
```



### [cask-upgrade](https://github.com/buo/homebrew-cask-upgrade)

> A command line tool for upgrading every outdated app installed by Homebrew Cask

```shell
# Installation
brew tap buo/cask-upgrade

# Commonly Usage
brew cu -a
```



### [cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

```shell
# Installation
brew tap homebrew/cask-fonts

# Commonly Usage
brew install font-fira-code
```
