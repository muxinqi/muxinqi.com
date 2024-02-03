---
sidebar_position: 5
---

# Ruby

Quickly setup with `rbenv`



## Install version manager - [rbenv](https://github.com/rbenv/rbenv)

```shell
brew install rbenv
```

```shell
# run this and follow the printed instructions:
rbenv init
```



## Install the latest stable version

```shell
# List latest stable versions
rbenv install --list

# Install a specific version
rbenv install 3.2.2

# Activate a specific version
rbenv gloabl 3.2.2
```



## Install CocoaPods

> Sudo-less installation

Add following line to `~/.zshrc`

```shell
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/bin:$PATH
```

And then,

```shell
source ~/.zshrc
```

Finally,

```shell
gem install cocoapods
```
