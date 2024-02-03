---
sidebar_position: 2
---

# Terminal

Setup `oh-my-zsh` to make zsh great again


## Oh My Zsh

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



### Built-in plugins

```diff
plugins=(
+ git
+ sudo
+ history
+ jsontools
+ colored-man-pages
)
```



### External plugins

```shell
brew install zsh-autosuggestions
brew install zsh-syntax-highlighting
brew install zsh-you-should-use
```

Append following at the end of `~/.zshrc`

```shell
source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /opt/homebrew/share/zsh-you-should-use/you-should-use.plugin.zsh
```

Restart terminal and enjoy!
